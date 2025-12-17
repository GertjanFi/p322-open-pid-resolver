# Authoritative External Resolver Repository (AERR)

This repository serves as an **Authoritative External Resolver Repository (AERR)** for persistent identifiers issued under the `p322` namespace.

It contains:
- a minimal, self-contained PID resolver implementation;
- the authoritative PID-to-resource mappings;
- the referenced content itself (in Markdown form);
- governance and policy documentation required to reproduce resolution and stewardship.

The repository is intentionally designed so that **any third party can fork or mirror it and immediately continue PID resolution**, without coordination, contractual dependency, or reliance on the original publisher.

---

## Scope and purpose

The purpose of this repository is to ensure **long-term resolvability and interpretability** of persistent identifiers independently of:

- domain names (e.g. `p-322.com`);
- hosting providers;
- specific runtime platforms (e.g. Cloudflare Workers);
- organisational continuity of Plimpton-322.

Persistent identifiers are treated as **administrative and semantic anchors**, not as URLs.

---

## Stewardship notice

This repository is maintained under a personal GitHub account for practical reasons. It **does not represent personal ownership** of the identifiers, mappings, resolver logic, or content contained herein.

The current maintainer acts solely as a **temporary steward**.

The repository is explicitly intended to be:
- forked;
- mirrored;
- transferred to another steward;
- re-hosted under a different organisation or jurisdiction,

**without affecting the validity, meaning, or continuity of existing identifiers.**

No coordination with the original maintainer is required for such continuation.

---

## Identifier scheme

The canonical identifier format used as the source of truth is:

```
p322:<type>:<slug>
```

Example:

```
p322:blog:verrijkingen-als-nanopublicaties
```

Within HTTP-based resolution, the following path-based representation is also supported:

```
/p322/blog/verrijkingen-als-nanopublicaties
```

Both representations are normalized internally to the canonical colon-based form.

---

## PID mappings

The authoritative mapping between identifiers and content lives in:

```
data/pid-links.jsonl
```

Each line represents one mapping:

```json
{
  "key": "p322:blog:verrijkingen-als-nanopublicaties",
  "path": "content/blog/verrijkingen-als-nanopublicaties.md"
}
```

This JSONL file is the **single source of truth** for PID resolution.

All changes are tracked through version control, providing a complete audit trail.

---

## Resolver implementation

A minimal Node.js-based resolver is provided in:

```
resolver/server.js
```

Characteristics:

- no external dependencies;
- resolves both colon-based and path-based PID representations;
- serves Markdown content directly from the repository;
- suitable for local execution, containers, or alternative hosting environments.

Run locally:

```bash
node resolver/server.js
```

By default, the resolver:
- does not perform external redirects;
- does not depend on any domain controlled by Plimpton-322;
- blocks indexing by search engines.

---

## Design assumptions

This repository is explicitly designed for a **failure-of-the-origin scenario**, including:

- organisational discontinuation;
- domain loss;
- infrastructure shutdown.

In such cases, the recommended continuation strategy is:

1. fork or mirror this repository;
2. run the included resolver;
3. optionally repoint external resolvers or references.

No identifier renumbering or semantic migration is required.

---

## Governance and continuity

Governance decisions concerning:
- identifier syntax;
- resolver behaviour;
- mapping conventions;

are documented in version control and are therefore transparent and reproducible.

Continuity is pursued through:
- openness;
- forkability;
- replaceability of infrastructure;

rather than contractual guarantees or platform permanence.

---

## Relation to external PID systems

Local `p322` identifiers may coexist with external persistent identifier systems (e.g. ARK-based infrastructures).

In such cases:
- local identifiers remain semantically primary;
- external identifiers are considered additional resolution layers;
- no dependency on third-party resolvers is introduced.

---

## Disclaimer

This repository and the identifiers it documents are provided on a **best-effort basis**.

No guarantees are made regarding:
- perpetual availability;
- immutability of content representations;
- suitability for any specific purpose.

Use of the identifiers and materials contained herein is at the user's own risk.

---

## Licensing

This repository uses **multiple licenses**, reflecting the different roles of code, administrative data, and content.

### Resolver code
All resolver source code is licensed under the **MIT License**. This permits unrestricted use, modification, redistribution, and re-implementation, including in commercial or public infrastructures.

### PID mappings
All persistent identifier mappings, including `pid-links.jsonl`, are dedicated to the public domain under **CC0 1.0**.

These mappings are administrative metadata and may be freely copied, mirrored, or incorporated into other resolver systems without attribution or restriction.

### Content
Markdown content resolved by the PID system is licensed **per file**. The applicable license is stated explicitly in each file (e.g. via frontmatter or header comments).

Unless stated otherwise, no license should be assumed for content files.

