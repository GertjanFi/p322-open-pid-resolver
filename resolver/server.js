// server.js — Minimal PID resolver (AERR-ready, multi-representation)
//
// Accepts PID in path as either:
//   /p322:blog:01...
//   /p322/blog/01...
//
// Resolution order for language:
//   1) /<PID>/<lang>
//   2) /<PID>?lang=<lang>
//   3) Accept-Language header (q-weighted)
//   4) alphabetically first available representation key
//
// JSONL schema expected (one record per line):
// {
//   "pid": "p322:blog:01...",
//   "representations": { "nl": "nl/posts/x.md", "en": "en/posts/y.md" }
// }

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { URL } from "node:url";

const PORT = Number(process.env.PORT || 8788);
const HOST = process.env.HOST || "0.0.0.0";

const REPO_ROOT = path.resolve(process.cwd());
const PID_JSONL = path.join(REPO_ROOT, "data", "pid-links.jsonl");
const CONTENT_ROOT = path.join(REPO_ROOT, "content");

const CACHE_TTL_MS = Number(process.env.CACHE_TTL_MS || 60_000);
let cache = new Map(); // pid -> { representations: Record<string,string> }
let cacheLoadedAt = 0;

const NOINDEX = process.env.NOINDEX !== "0";

function trimSlashes(s) {
  return s.replace(/^\/+|\/+$/g, "");
}

function withNoIndexHeaders(h) {
  if (!NOINDEX) return h;
  h.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return h;
}

function send(res, status, body, headersObj = {}) {
  res.writeHead(status, headersObj);
  res.end(body);
}

function safeParseJson(line) {
  try {
    return JSON.parse(line);
  } catch {
    return null;
  }
}

function canonicalPidKeyFromPathOrNull(raw) {
  // raw is path without leading/trailing slashes, may contain slashes.
  const s = String(raw || "").trim();
  if (!s) return null;

  // Already colon PID
  if (s.includes(":")) {
    // Must minimally look like ns:type:opaque
    const parts = s.split(":").filter(Boolean);
    return parts.length >= 3
      ? `${parts[0]}:${parts[1]}:${parts.slice(2).join(":")}`
      : null;
  }

  // Slash PID: p322/blog/<opaque...>
  const parts = s.split("/").filter(Boolean);
  if (parts.length < 3) return null;
  const [ns, type, ...rest] = parts;
  return `${ns}:${type}:${rest.join("/")}`;
}

function parseRequest(rawPath) {
  // Supports:
  //  - /<pid>
  //  - /<pid>/<lang>
  //
  // where <pid> may itself be p322:... or p322/... (slash form).
  //
  // Strategy:
  // - split into segments
  // - try interpret last segment as lang IF it looks like a lang code
  // - remaining segments form pidPart (which may include '/')
  const segs = trimSlashes(rawPath).split("/").filter(Boolean);
  if (segs.length === 0) return { pid: null, lang: null };

  const looksLikeLang = (x) => /^[a-zA-Z]{2,3}([-_][a-zA-Z0-9]{2,8})*$/.test(x);

  let lang = null;
  let pidPartSegs = segs;

  if (segs.length >= 2 && looksLikeLang(segs[segs.length - 1])) {
    lang = segs[segs.length - 1].toLowerCase();
    pidPartSegs = segs.slice(0, -1);
  }

  const pidPart = pidPartSegs.join("/");
  const pid = canonicalPidKeyFromPathOrNull(pidPart);

  return { pid, lang };
}

function normalizeRelContentPath(rel) {
  // representations should be relative paths like "nl/posts/foo.md"
  if (typeof rel !== "string") return null;

  // allow both with and without leading slash
  const cleaned = rel.replace(/^\/+/, "");
  // disallow traversal
  const abs = path.resolve(CONTENT_ROOT, cleaned);
  if (!abs.startsWith(CONTENT_ROOT + path.sep)) return null;

  return { rel: cleaned, abs };
}

function loadJsonlIntoCache() {
  const now = Date.now();
  if (now - cacheLoadedAt < CACHE_TTL_MS && cache.size > 0) return;

  const next = new Map();

  if (!fs.existsSync(PID_JSONL)) {
    cache = next;
    cacheLoadedAt = now;
    return;
  }

  const lines = fs
    .readFileSync(PID_JSONL, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  for (const line of lines) {
    const obj = safeParseJson(line);
    if (!obj) continue;

    const pid = obj.pid;
    const reps = obj.representations;

    if (typeof pid !== "string" || !pid) continue;
    if (!reps || typeof reps !== "object") continue;

    const cleaned = {};
    for (const [lang, relPath] of Object.entries(reps)) {
      if (typeof lang !== "string" || !lang.trim()) continue;
      const lp = normalizeRelContentPath(relPath);
      if (!lp) continue;
      cleaned[String(lang).toLowerCase()] = lp.rel;
    }

    if (Object.keys(cleaned).length === 0) continue;

    next.set(pid, { representations: cleaned });
  }

  cache = next;
  cacheLoadedAt = now;
}

function parseAcceptLanguage(headerValue) {
  // Returns ordered array of language tags (lowercased) by descending q.
  // Example: "nl,en-US;q=0.8,en;q=0.7"
  if (!headerValue) return [];
  const parts = String(headerValue)
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  const scored = parts
    .map((p) => {
      const [tagPart, ...params] = p.split(";").map((x) => x.trim());
      let q = 1;
      for (const param of params) {
        const m = param.match(/^q=(0(\.\d+)?|1(\.0+)?)$/);
        if (m) q = Number(m[1]);
      }
      return { tag: tagPart.toLowerCase(), q };
    })
    .filter((x) => x.tag && x.tag !== "*")
    .sort((a, b) => b.q - a.q);

  return scored.map((x) => x.tag);
}

function pickLang({ explicitLang, queryLang, acceptLangs, available }) {
  // available: array of keys like ["en","nl"]
  const availSet = new Set(available);

  const pick = (tag) => {
    if (!tag) return null;
    const t = String(tag).toLowerCase();

    // exact match (e.g. nl, en-us)
    if (availSet.has(t)) return t;

    // primary subtag match (e.g. en-us -> en)
    const primary = t.split(/[-_]/)[0];
    if (availSet.has(primary)) return primary;

    return null;
  };

  // 1) /<PID>/<lang>
  let chosen = pick(explicitLang);
  if (chosen) return chosen;

  // 2) ?lang=<lang>
  chosen = pick(queryLang);
  if (chosen) return chosen;

  // 3) Accept-Language (q-weighted)
  for (const tag of acceptLangs) {
    chosen = pick(tag);
    if (chosen) return chosen;
  }

  // 4) alphabetical first
  return available.slice().sort()[0] || null;
}

/* ------------------------------------------------------------------ */
/* HTTP server                                                         */
/* ------------------------------------------------------------------ */

const server = http.createServer((req, res) => {
  const url = new URL(
    req.url || "/",
    `http://${req.headers.host || "localhost"}`
  );

  // Health
  if (url.pathname === "/_health") {
    const h = withNoIndexHeaders(new Headers());
    h.set("content-type", "text/plain; charset=utf-8");
    h.set("cache-control", "no-store");
    return send(res, 200, "ok", Object.fromEntries(h.entries()));
  }

  // robots.txt
  if (url.pathname === "/robots.txt") {
    const h = new Headers();
    h.set("content-type", "text/plain; charset=utf-8");
    h.set("cache-control", "public, max-age=3600");
    return send(
      res,
      200,
      "User-agent: *\nDisallow: /\n",
      Object.fromEntries(h.entries())
    );
  }

  const { pid, lang: langFromPath } = parseRequest(url.pathname);
  const langFromQuery = url.searchParams.get("lang")?.toLowerCase() || null;

  if (!pid) {
    const h = withNoIndexHeaders(new Headers());
    h.set("content-type", "text/plain; charset=utf-8");
    return send(res, 404, "Not found", Object.fromEntries(h.entries()));
  }

  loadJsonlIntoCache();
  const rec = cache.get(pid);

  if (!rec?.representations) {
    const h = withNoIndexHeaders(new Headers());
    h.set("content-type", "text/plain; charset=utf-8");
    return send(res, 404, "Not found", Object.fromEntries(h.entries()));
  }

  const availableLangs = Object.keys(rec.representations).sort();
  const acceptLangs = parseAcceptLanguage(req.headers["accept-language"]);

  const chosenLang = pickLang({
    explicitLang: langFromPath,
    queryLang: langFromQuery,
    acceptLangs,
    available: availableLangs,
  });

  if (!chosenLang) {
    const h = withNoIndexHeaders(new Headers());
    h.set("content-type", "text/plain; charset=utf-8");
    return send(res, 404, "Not found", Object.fromEntries(h.entries()));
  }

  const relPath = rec.representations[chosenLang];
  const p = normalizeRelContentPath(relPath);

  if (!p || !fs.existsSync(p.abs)) {
    const h = withNoIndexHeaders(new Headers());
    h.set("content-type", "text/plain; charset=utf-8");
    return send(res, 404, "Not found", Object.fromEntries(h.entries()));
  }

  const body = fs.readFileSync(p.abs, "utf8");

  const h = withNoIndexHeaders(new Headers());
  h.set("content-type", "text/markdown; charset=utf-8");
  h.set("cache-control", "no-store");
  h.set("X-P322-PID", pid);
  h.set("X-P322-Lang", chosenLang);
  h.set("X-P322-Source-Path", p.rel);

  return send(res, 200, body, Object.fromEntries(h.entries()));
});

server.listen(PORT, HOST, () => {
  console.log(`PID resolver listening on http://${HOST}:${PORT}`);
  console.log(`PID mappings: ${PID_JSONL}`);
  console.log(`Content root: ${CONTENT_ROOT}`);
});
