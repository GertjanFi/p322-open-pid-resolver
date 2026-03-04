---
title: "Names That Endure: Persistent Identifiers Without the Illusion of Eternity"
date: "2026-01-07T00:00:00+00:00"
excerpt: "Links feel like concrete, until they suddenly turn to sand. In heritage data, that is not a detail but a risk: what works today may vanish tomorrow due to a new vendor, a reorganisation, or a change in leadership. In this blog, I show why a URL is not a promise, what a PID does deliver, and how minimal, sober infrastructure can build trust - without illusions of eternity. If your collections need to outlive your organisation, this is worth reading."
teaser: "Persistent identifiers are about technology and policy. Discover why real digital-heritage continuity starts with agreements, not URIs, and what that demands from organisations."
---

Digital infrastructure is full of temporary solutions that masquerade as permanent. Internet addresses, software interfaces/APIs, dashboards: they feel reliable because they work today. But heritage outlives a contract, a vendor, a project phase, and even an organisation. Anyone who takes that seriously cannot keep pretending that a link is enough.

Information on the internet is nothing more than a chance encounter on a crowded platform. And once you work in the domain of digital heritage data, that starts to feel rather thin. Heritage calls for names that continue to exist even when the train has long since departed for the next station.

## The fata morgana

Before I say more about persistent identification (PIDs), there is one thing I need to get off my chest:

**Technically persistent data does not exist.**

There. That had to be said.

Persistency is entirely about a promise: can others trust that you will keep your promise to make information available?

This blog is about how you can organise that—perhaps even give some guarantees. But if you break that promise, there is no system that can keep your information persistent.

## Why “persistent” is a dangerous word

Why this disclaimer? Because many stories about persistent identifiers are a bit religious. “Persistent” almost sounds like you are promising immortality.

But I work in a startup that is still so young that we know every line of code by name. Thinking about eternal PIDs is therefore not exactly at the top of the priority list.

So why do it anyway?

Because I believe in _practice what you preach_. If we help heritage institutions comply with the NDE guidelines, then we must comply with them ourselves. And introducing good policy and infrastructure while you are still young, small, and flexible has its own advantages.

## This is not a technical problem

PIDs are not a magical technology that forces the internet to keep your document findable forever. You will really have to do that yourself.

The core is simple and at the same time strict: persistent identification means, above all, that you promise to keep the source available under a stable name, and that you do not let that name drift with every reorganisation of your institution, every restructuring of your website, your CMS, your folder structure, or your next impulse to “clean everything up nicely”.

And yes, you can make that promise on any arbitrary web address:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

But how credible is that?

Today our website is structured this way, but in a year it may be different. If we later choose a different CMS with a different structure, all those addresses will change. Does that inspire confidence in others to believe your promise of a permanent address?

Probably not.

## Where trust begins

That is why your first step is not technical: choose your own identifier that has meaning independent of your technology. Technology—especially digital technology—is ephemeral and therefore inspires little trust.

Sustainable identification therefore starts with a piece of text like:

`p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

It has a shape so ugly that I personally find it reassuring, because it shows that this is about structure, not marketing. That inspires trust.

We call `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` a _Uniform Resource Identifier_, URI for friends. URI, too, is a term with a slightly magical status. There are quite a few interpretations floating around, while there is simply a standard that defines it: [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986).

A URI **identifies** something—and nothing more than that.

A URI does not have to be unique.  
A URI may contain any content you find useful.  
And a URI does not have to say anything about where something is located.

Of course, URIs _may_ be unique, and many people quietly assume that they are. One of the most commonly used URI examples is an ISBN. There is an entire organisation behind it to keep those numbers globally unique. That is great. But it is not required. Most organisations have no need for a worldwide guarantee. It is convenient if an identifier is unique within the context of a system, but even there the specification remains silent.

## Semantics in a URI

People often assume that URIs must consist of arbitrary characters, like the fragment `01J6E8F3PFQ2H9R7M4K8V1CW`. That _feels_ “unique”. But that is not required either. If you want to embed meaning in a URI, you are free to do so.

There are rules for how machines interpret your URI. Everything before the first colon `:` is called a _scheme_, which is best understood as the context of the identifier. Anyone may choose a scheme. You can document it and officially register it as a standard (such as `mailto`, `urn`, or `http`), or simply invent one yourself.

`mailto:gertjan@p-322.com` is a URI. Thanks to the standardised `mailto:` scheme, computers know that this is an email address and what to do with it.

`urn:isbn:9780140449136` is also a URI. The `urn` scheme is strictly defined and includes fixed _namespaces_ such as `isbn`, separated by colons. Every colon after the first is simply a free character whose meaning you may define within the URI itself. Within `urn`, it functions as a separator.

The formally guaranteed URI of a book therefore has the form `urn:isbn:9780140449136`, not `isbn:9780140449136`. Even though the latter is, in itself, a perfectly valid URI and is probably used far more often than the `urn` version. But that is a social and organisational effect — a convention. The policy is built on `urn:isbn:9780140449136`.

I chose to include semantic context in the P-322 URIs. The identifier `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` indicates that, within the self-defined scheme `p322`, namespaces such as `blog` exist, each associated with an arbitrary identifier.

That goes rather—perhaps excessively—far for a startup. It probably says more about me and my obsession with data systems than about those blogs.

But even if you cannot click on a URI, it still _means_ something.

That is the layer of minimal persistency: trust that this name will continue to exist, even if the door closes.

## Technology as servant

But people _do_ want to click, and systems want to forward reliably. That is where technology comes in: a small, sober piece of infrastructure with just one task—to wrap the minimal identifier in such a way that it becomes reachable on the internet. We do that with a scheme, and then we call it a _Uniform Resource Locator_, or URL. Any URI that specifies an access mechanism and a location is a URL.

So: every URL is a URI, but not every URI is a URL.

On the web, we usually use `http` and `https` as access mechanisms, which I will lump together here for convenience.

A web address such as:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

is therefore a perfectly valid URL—but one that does not communicate persistency. That is why our startup uses the address `https://pid.p-322.com/`, followed by the identifier, resulting in:

`https://pid.p-322.com/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

And because not all systems handle colons equally well, this also works:

`https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`

## The doorman

At `https://pid.p-322.com/`, that sober piece of software is running. It looks up the identifier in a table and maps it to the location where the blog currently resides.

If that page moves from:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

to:

`https://p-322.com/archief-met-meuk/gertjan-snapte-er-niets-van`

we update the table.

You therefore do not need a complex management organisation. A simple doorman suffices — one that maintains a table of identifiers and locations. For that task we use the English term _to resolve_. Hence the doorman is called a _resolver_. In Dutch this leads to ugly anglicisms like _resolven_ or _resolveren_. Brrr.

## Let the true PID stand up

So what is the real, true PID? Is it the URL `https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`, where people and machines can actually find something? Or the URI `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`, for which we give the guarantee?

In my world, it is the URL. We do this to provide access to information; otherwise it becomes too abstract for me. Our policy is designed to ensure that the URL `https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW` remains the same while the underlying source is free to move.

## But what about ARK, Handle, and DOI?

Anyone following this field is probably thinking: “How on earth can you talk about PIDs without mentioning ARK, Handle, or DOI?”

The answer is simple and perhaps surprising: you do not strictly need them for persistency.

You can manage it perfectly well on your own internet domain. Persistency is not the same as “having a Handle or an ARK”. Some organisations — such as startups — may even _have_ to do without them, because they often come with substantial requirements. Other institutions are effectively immortal and simply do not need them.

That leads to the amusing situation that our startup organises persistency in the same way as the Rijksmuseum. Compare `https://pid.p-322.com/<identifier>` with:

- `https://id.rijksmuseum.nl/<number>` for physical objects
- `https://data.rijksmuseum.nl/<number>` for digital metadata

No ARK or Handle in sight. Persistency is primarily about building trust. You formalise that in your persistency policy. [The Rijksmuseum](https://data.rijksmuseum.nl/policy/) has, of course, done this down to the finest detail. We believe we have done a decent job as well. Our policy [can be found here](/en/policy/persistency/).

Of course, it helps if your name is Rijksmuseum and not P-322. That is why I nevertheless took a deeper dive into Handle, ARK, and DOI. In next week’s blog I will show that and explain the roles they play. I will put the differences side by side and even try to apply for one as a startup. To be continued.

## Persistency policy

With or without ARKs and Handles, trust in the persistency of your data is an accumulation of measures and promises.

You promise to maintain a list of identifiers. You promise that a piece of software is routing the identifier to a location. Ideally, you also promise that the meaning of your identifier is documented, and that the mapping from PID to location is not locked away in an obscure database but exists as an open and usable resource.

Capturing that in policy is far more important than applying for a Handle or an ARK.

These promises gain strength when they are designed to be independent of the continued existence of your organisation. A museum or research institution might turn to an archive or an organisation such as [DANS](https://dans.knaw.nl/nl/) for this. For a startup, that is difficult. There are hardly any institutions that can help with this. We therefore based our persistency policy on open repositories on the web.

As a kind of compromise between idealism and reality.

## The compromise outside the door

We have open-sourced the code of our resolver. The mappings themselves are deposited as a simple data file. The repository containing all of this is the source of truth, complete with version history: when did a mapping change, and why?

We are calling this, with a rather expensive-sounding name, the _Authoritative External Resolver Repository (AERR)_. It is not an existing term in the PID world, but our name for this governance model of “guarantees-outside-the-door”.

The AERR can be found at: [https://github.com/GertjanFi/p322-open-pid-resolver](https://github.com/GertjanFi/p322-open-pid-resolver)

It lives on my personal GitHub account, but it could have been hosted anywhere except at P-322. After all, it is an insurance policy against the day the startup no longer exists.

If we were to disappear and stop paying for `p-322.com`, anyone could still copy the repository, deploy the resolver, load the mapping file, and recover the PIDs.

You might lose the original domain name, but the identifiers would continue to exist and become interpretable again. That is what you ultimately need in a heritage context: not our eternal presence, but the ability to ensure continuity through transfer.

## The time capsule

An AERR is essentially a time capsule. But how do you find it again after the collapse, if a user only has:

`https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`

Without `p-322.com`, that is a dead link.

This is where ARK and Handle resolvers deliver their real value. But as I said earlier: more on that in next week’s blog.

Our AERR is already live. Every time we add new data with a persistency promise, it is also added to the AERR — completely automatically. We do not have to do anything. If there is a PID attached, it is _also_ in the AERR. Even if we are gone tomorrow, you will always be able to access it.

Well, always? There is that disclaimer again. Technical persistency does not exist. You can access it as long as GitHub exists, and as long as my personal account remains online. That is why we also promise a _best-effort_ attempt to approach partner organisations to ensure that our AERR continues to exist.

## Back to the fata morgana

And with that, we are back at the fata morgana.

This entire setup is captured in our persistency policy. The goal? To create trust in our links. To help others believe that we are doing everything we can to ensure that our information remains reliably available.

Whether that has succeeded is up to you, when you decide whether you dare to refer to our PIDs. Because a technically persistent system exists no more than the fountain of eternal youth.
