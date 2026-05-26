---
pid: p322:blog:06EQD3C3G9SB3QXZS38BJG83C
title: "Sawubona Commons: because heritage institutions are not semantic web companies"
date: "2026-05-26T00:00:00+00:00"
excerpt: "The Colonial Collections Datahub works. And precisely because of that, an uncomfortable question emerged: who actually gets to participate in heritage infrastructure? Because behind concepts such as linked data, interoperability, and semantic standards lies a model that mainly works for institutions that already speak the language of semantic infrastructures.<br/><br/>In this blog, I describe why that problem goes much deeper than technology alone. Because once service platforms start harmonising collection data, interpretive power emerges as well. Local knowledge, historical context, and alternative classifications slowly disappear behind a single central reality.<br/><br/>Sawubona Commons is our attempt to approach this differently. Not by throwing away linked data, but by fundamentally reorganising heritage infrastructure."
teaser: "Why European heritage infrastructure increasingly demands digital maturity from institutions that are not tech companies at all."
isAutoTranslated: true
---

The Colonial Collections Datahub works. That may sound like a strange way to begin a new project, but that is precisely where the problem lies. Because it was only once the infrastructure started to gain traction that it became visible how difficult participation in a national service platform actually is. Not because institutions lack valuable collection data, but because almost the entire model is implicitly built for organisations that already speak the language of linked data, semantic standards, and infrastructures.

Over the past eighteen months, that question would not leave me alone: can we build an infrastructure without requiring institutions to first become semantic web companies? On a European scale? That is where our new project, Sawubona Commons, emerged.

## The problem started in production

Over the past years, I worked together with museums, researchers, developers, heritage institutions, and communities of origin on an infrastructure for the colonial collections consortium in the Netherlands. Not as yet another portal into which one more dataset had to be pushed, but as an attempt to make visible what already exists across collections, institutions, and systems.

The result is the [Colonial Collections Datahub](https://app.colonialcollections.nl).

A production system. Not a prototype. Not a PowerPoint presentation with arrows pointing towards a dot on the horizon. Simply a real platform running on real data, real connections, and therefore also real problems. Researchers use it. Communities rediscover objects that were previously practically invisible. Artists draw inspiration from it. Institutions contribute data. A platform that I still very much enjoy maintaining together with P-322.

But precisely when the datahub started to gain traction, something else also became visible.

## Who actually gets to participate?

The somewhat uncomfortable question is no longer whether the platform works, but who actually gets to participate.

Because although the Dutch heritage sector likes to talk about interoperability, linked data, shared thesauri, and semantic standards, reality turns out to be far more stubborn than policy documents usually suggest. Nearly all institutions that successfully connect to the infrastructure are organisations that are already relatively technically mature. Institutions with developers. Institutions with knowledge of linked data. Institutions that already speak the language of infrastructure.

And that creates friction.

Because once participation depends on a high degree of technical maturity, an infrastructure naturally emerges in which the same parties continue to participate. Not because someone explicitly decides this, but because infrastructures always impose technical requirements. Whoever understands RDF gets to participate. Whoever maintains SPARQL endpoints can connect. Whoever knows how CIDOC-CRM mappings work can publish linked data. Whoever cannot make that translation remains dependent on suppliers, subsidy partners, the Dutch Digital Heritage Network, or larger institutions.

## Heritage institutions are not semantic web companies

And honestly, heritage institutions should not have to become semantic web companies in order to participate in a service platform.

These are organisations that manage objects, carry out restorations, keep depots operational, guide researchers, and try to make collections accessible with small teams. They often run registration systems that were purchased to support collection management, not to become part of a national linked-data infrastructure.

And if that already proves complicated in the Netherlands — a country with organisations such as the Dutch Digital Heritage Network, shared terminologies, and nearly twenty years of experience with semantic standards — then what does that mean on a European scale?

## Colonial heritage is a European issue

Because colonial heritage obviously does not stop at the Dutch border.

Centuries of trade, looting, collecting, and scientific classification have resulted in a diaspora of objects spread across Europe. Nearly every European country manages heritage acquired within that colonial context, even when that country itself was not a classical colonial power.

Colonial heritage is therefore not only a national responsibility, but also a European one.

And precisely because of that, the existing architecture increasingly started to become uncomfortable.

Because the problem goes much deeper than technology alone.

## Interoperability is not neutral

Over the past twenty years, we as heritage institutions have almost reflexively assumed that interoperability mainly emerges through more standardisation, more harmonisation, and more linked data. If systems simply use the same models, speak the same terminologies, and follow the same semantic structures, collaboration would naturally emerge.

Except that a collection is not a neutral technical raw material that can be merged without losing something in the process. Every dataset carries traces of institutions, researchers, historical classifications, local choices, changing terminology, and collection managers who have sometimes worked with the same material for decades.

And that becomes visible precisely in the details.

## The great smoothing machine

A collection manager in a registration system, for example, does not simply describe an object as “mask”. Beneath that single word sit material descriptions, local names, old classifications, alternative interpretations, doubtful cases, and historical spellings. Sometimes there are notes from a curator who died thirty years ago. Sometimes a term refers to a local classification system used only within that institution. From a heritage perspective, this is rich knowledge. From the perspective of a central infrastructure model, it quickly becomes noise that needs to be “cleaned up”.

And so somewhere within the service platform, the great smoothing machine starts turning.

A local term is replaced with a preferred thesaurus term. A historical doubtful case still receives one official classification because the model expects only one value. A complex material field is split apart so it better fits a central semantic structure. An old spelling disappears because it does not match the platform terminology.

Technically speaking, the dataset becomes more consistent. But at the same time, traces of how that collection is locally understood also disappear.

## When infrastructure becomes interpretive power

And a few months later, somewhere, a new linked dataset appears in which nobody can exactly explain anymore why certain choices were originally made. Only that it was “necessary for interoperability”. And that problem is not merely technical.

It is also about power.

Because once an infrastructure starts determining which terminology becomes dominant, which semantic structure is considered “correct”, and which interpretations remain visible, a centre of power automatically emerges. Not because people have bad intentions, but because the centralisation of data almost always leads to the centralisation of interpretation.

We see this everywhere: with aggregators, with European infrastructures, with service platforms that begin as neutral technical solutions and slowly transform into places where it is implicitly established how heritage **ought** to be described.

And I find that uncomfortable.

Because many heritage infrastructures theoretically claim that institutions remain owners of their own data. But in practice, interpretive power still shifts towards the service platform simply because harmonisation takes place there.

At that point, you are no longer really an infrastructure.

You have become a translation machine that determines which version of reality becomes dominantly visible.

## Why a cache is something different from an aggregator

That is why, last year, a different idea slowly started to emerge. Perhaps service platforms should not aspire to become aggregators of heritage data at all. Perhaps they should dare to become far more modest.

Anyone who has read my earlier stories [about aggregators and caches](https://n2t.net/ark:/48229/p322/blog/01J6E8F3PEM9H4Q7R2K8V1CW/en) will probably already sense where this is heading.

We took the first step towards this in the Colonial Collections Datahub. But even that platform still contains a central _knowledge graph_ with linked data registered in the NDE dataset register.

People start referring to that.

So it does not really feel like a cache.

And that was also the biggest criticism I received from other experts: “You call it a cache. But then what exactly makes it different from an aggregator?”

Fair enough.

So the linked-data knowledge graph and the SPARQL endpoint have to go. Which also saves a considerable amount of structural costs within the project.

## When the model started to shift

This became more concrete during the NDE HackaLOD of 2025. There we cautiously experimented with a different approach. Could we continue building on the open-source infrastructure of the Colonial Collections Datahub without requiring institutions to first establish a full linked-data operation? Could participation be decoupled from heavy infrastructure requirements?

That experiment turned out to be surprisingly successful.

For the municipality of Arnhem, we built a new datahub within twenty-four hours in which complex collection data could be processed directly from existing spreadsheets and exports. No months-long implementation trajectory. No semantic migration beforehand. No major harmonisation project before the municipality could participate.

Not because the source suddenly became perfectly standardised, but because we made the transformations transparent.

And that was when the penny finally dropped.

The problem is not that institutions have “bad data”. The problem is that infrastructures assume all semantic complexity must first be resolved before institutions are even allowed to participate.

And with that, the architectural model begins to shift.

## Where the linked data goes now

Instead of an aggregator that pulls data inward, harmonises it, stores it permanently, and republishes it, we are now genuinely moving towards that temporary cache. What we started in the Colonial Collections Datahub, we are now taking much further.

Not an infrastructure that attempts to replace the source, but an infrastructure that temporarily brings enrichments together without absorbing the original data.

That may sound like a small technical distinction, but conceptually it changes almost everything.

An aggregator implicitly says: “Deliver your data to us and we will create a better version of it.”

A cache says: “Your source remains leading, we temporarily add extra perspectives.”

That also means linked data does not disappear. Quite the opposite. Only the place where that transformation occurs changes.

No longer hidden deep inside the central black box of a service platform, but explicitly visible in a transparent data broker positioned between the source holder and the infrastructure.

I also wrote about this in my response to the recent NDE report: [Service platforms are not data layers — time to acknowledge that](https://n2t.net/ark:/48229/p322/blog/01J6E8F3PBM2QH7R4K9V8C1W/en).

## The data broker as a transparent intermediary layer

The data broker makes transformations reproducible. Every mapping. Every harmonisation. Every thesaurus match. Every enrichment. Not as mysterious semantic magic understood only by data specialists, but as a controllable process in which the underlying source values, choices, and provenance remain visible.

Every night, the broker retrieves source data, performs transformations, writes temporary optimised data for the datahub, and additionally generates linked-data dumps for parties that require them. Different parties simply require different representations.

That also means institutions no longer have to build perfect CIDOC-CRM or Linked Art implementations before they are allowed to participate. The infrastructure shifts from “deliver perfect data” towards “tell the broker how the data should be transformed”.

That is a fundamentally different attitude.

As a result, even if you wanted to, a service platform can no longer become a central truth. No aggregator. No semantic centre of power. Through the data broker, multiple reproducible perspectives can exist side by side. Not one dominant dataset, but transparent enrichment layers offered independently from the source.

And perhaps even more importantly: as a heritage institution, you no longer first have to become a semantic web company before collaboration becomes possible at all.

## Sawubona Commons

And that is why [Sawubona Commons](https://www.sawubona-commons.eu) now exists.

In the second half of 2025, together with Cindy Zalm of the [Wereldmuseum](https://welkom.wereldmuseum.nl), I wrote a new European grant proposal. We are incredibly pleased that [ECHOES](https://www.echoes-eccch.eu), the programme surrounding the European Collaborative Cloud for Cultural Heritage (ECCCH), is giving us the opportunity to further develop these ideas on a European scale.

Not as another hype around AI, knowledge graphs, or semantic infrastructures. But precisely as an attempt to make heritage infrastructure more practical, more transparent, and more honest.

Sawubona Commons must not become a European aggregator that smooths local systems until everything neatly fits within a single model. If the project succeeds, it should instead create space for the uncomfortable reality that heritage data always carries context, history, interpretation, and local practice with it.

That may make interoperability messier than policy documents would prefer.

But probably also more honest.

And I think that is perhaps the most important lesson of recent years: heritage institutions do not need even more standardisation. Instead, infrastructures must learn far better how to deal with differences without immediately trying to harmonise them away.

Exactly what this will look like technically, organisationally, and as a network is something we will discover over the coming months within Sawubona Commons. Not from a theoretical model, but in production. With real collections, real institutions, and inevitably, real problems as well.
