---
layout: layouts/post.njk
lang: en
title: "Cache, Not Copies: A Remedy Against Aggregation"
onHomepage: true
date: 2025-12-04
category: "Background"
type: "blog"
authorKey: gertjan
image: "/assets/images/knowledge/cache-geen-kopie-tegen-aggregatie.jpg"
excerpt: "The first blog with lessons learned from treating colonial collections as a service platform.<br/><br/>The Datahub lives on the rhythm of nightly synchronizations: every day the entire knowledge graph is rebuilt from scratch. Not to preserve it, but to remain deliberately disposable. A dataset that cannot be fully reconstructed from its source is an aggregate. By remaining fully reproducible, the Datahub prevents itself from becoming an authority and stays a service provider rather than a gatekeeper."
teaser: "The first blog in P-322 lessons for service platforms is live. Discover why the Datahub Colonial Collections is rebuilt from scratch every night and how this radical “disposability” prevents a service platform from becoming an authority itself. Explore the core of truly reproducible data sharing."
---

Around five in the morning, somewhere between the nightly data synchronization and my second pot of tea, I realized that our service, the [Datahub Colonial Collections](https://app.colonialcollections.nl/en), has an unusual rhythm. While most systems cradle their data as if it were irreplaceable, the Datahub starts fresh every single night. All datasets are reloaded, disentangled, and rebuilt as if the platform refuses to maintain a memory of its own.

Data you do not store, but rebuild again and again: it feels almost counterintuitive. In a sector where data tends to cling to the hands of whoever touches it, a disposable mindset is a radical choice. But that choice reveals something essential: a dataset that is not rebuilt from its source accumulates **power** - quietly and invisibly.

## Who’s the boss?

Our design choice for the Datahub was simple yet radical: we did not want a system that saw itself as the source of truth. **A dataset that cannot be fully reconstructed from the source is an aggregate.** And an aggregator carries power, whether you intend it or not. It turns you into a new source holder, a new authority, the new place where “truth” is established. Once that happens, you are no longer a service platform—you are a gatekeeper shaping colonial history.

And we did not want that.

That role belongs to the source holder and the communities of origin. Not to the service provider arranging the data.

## Aggregator versus cache

Many heritage professionals use the words “aggregator” and “cache” as if they were interchangeable. Yet they represent fundamentally different ideas about service platforms. You might even ask whether an aggregator truly qualifies as a service platform at all.

An **aggregator** collects whatever it can find, reshapes it, adds layers of meaning, and publishes a composite whole that often resembles a new universe more than the original source. The result is attractive, useful, and tidy—but also deceptive. With every copy, provenance fades. With every enrichment, the distance to the source grows. And with every new layer, the viewpoint shifts from the original institution to the party controlling the aggregation.

A **cache** does the exact opposite. It does not claim truth. It stores a temporary representation that may disappear at any moment. If the entire colonial dataset collapses tomorrow, we simply rebuild it. That ephemerality is not a flaw; it is protection against unwanted authority. A cache knows its place. Its humility is its strength.

For the Datahub, that distinction was crucial. We did not want to present a new truth, only to create a passage toward the real sources.

## The DERA and the discomfort around aggregation

When designing the Datahub, we first consulted the [DERA](https://dera.netwerkdigitaalerfgoed.nl/index.php/Hoofdpagina): the **Digital Heritage Reference Architecture**. The DERA is the kind of document you keep on your bedside table—to help you fall asleep. But anyone who reads it carefully will notice a striking tension in how it describes aggregators. The DERA acknowledges that aggregators exist, but it gives them no real place in the architecture. They are treated as temporary actors, not desirable roles.

On the [DERA website](https://dera.netwerkdigitaalerfgoed.nl/index.php/Aggregator#Status) we find:

> _Temporary pattern: through the Aggregator pattern, part of the DERA vision regarding finding heritage information across institutional boundaries can be realized on specific domains. In the intended SOLL situation, aggregation of heritage information on such domains is no longer necessary._

So, aggregation is not something we should strive for. The DERA is clear: in the SOLL situation, aggregation should no longer be needed. No nuance, no caveats: stay true to the source, prioritize provenance, and keep services separate from custodianship. A service may process, expose, or temporarily represent data, but it must not structurally take over the role of source holder. Once a service permanently stores, replicates, and enriches data, it slides toward aggregation.

## The risks of aggregation

Aggregation may sound efficient, but it creates a chain of structural problems.

It begins, in almost all aggregators, with the **loss of provenance**. Every copy weakens the link to the original dataset. Even with careful metadata handling, you inevitably create a new layer of interpretation, selection, and structuring. Over time, such a copy develops a life of its own, becoming the place where users search for truth—even if you faithfully mention the source.

As soon as an aggregator accumulates enough mass, a new center of gravity forms. Users stop searching the sources and start searching the aggregator’s reconstructed reality. We see this with major European and national platforms: aggregation creates **concentrations of power**. Even when aggregators do not seek power, they become the place where truth appears to reside.

Eventually, the aggregator becomes a **black box**. Who still questions the assumptions or biases behind its enrichments? Source holders possess the specialist knowledge needed for reflection and critique. Aggregators cannot apply that level of understanding to the thousands or millions of objects they ingest. They become places where the facts of the source merge with the interpretations of the aggregator, without any clear boundary between them. A black box does not appear overnight—it accumulates in layers, like sediment, until no one remembers where the bottom lies.

Enrichments within aggregators also prove remarkably persistent. They surface in research, get reproduced in policy documents, and are rarely challenged. The underlying source is consulted less and less.

A cache, by contrast, cannot create such problems because it stores nothing permanently. Everything in it is temporary and must always be traceable to the source. That goes far beyond “we link back to the source”—aggregators do that too. In a cache, it is inherent to the technology. The data infrastructure **must** return to the source for every datapoint, correction, or enhancement.

## The major aggregators in the heritage field

[Netherlands War Sources](https://www.oorlogsbronnen.nl), [Europeana](https://www.europeana.eu), and [Collectie Nederland](https://www.collectienederland.nl) are all impressive platforms that add significant value. They increase visibility, improve access, and support research. But they are also unmistakably aggregators. They publish copies, add one-off enrichments, normalize data, store it permanently, and construct a composite whole that appears more robust than the underlying sources justify.

These platforms combine the roles of service provider and source holder. That creates a tension that is difficult to resolve. Because they are not the source holders. It is not their data. We should not speak of “the Europeana dataset” or “the Collectie Nederland dataset.” Those do not exist. Europeana’s 59 million objects come from 3.500 collection-holding institutions, each with deeper expertise on its own material than Europeana could ever have. On the platform, users can hardly see what Europeana thinks, adds, or adjusts, versus what genuinely comes from the source. The underlying data model includes a mechanism for provenance accountability, but it is rarely used.

## Standing on the shoulders of giants

Am I against aggregators? It is understandable how we got here, but it is like asking whether I am against steamships. They are magnificent — but no longer fit for the present. We owe a great deal to aggregators. Without Europeana and Collectie Nederland, we would have far fewer digital heritage collections available. We stand on the shoulders of giants.

But maintaining aggregators removes the incentive for source holders to publish their own data, formalize enrichments, and contribute improvements directly. That is far more valuable than having an aggregator do it with limited knowledge—and without the ability to explain how the aggregated data relates to the source. That does not support scientific or journalistic research. And in a domain like colonial collections—sensitive to power imbalances and historical blind spots—it is especially untenable.

A cache prevents this. By making reproducibility central, every decision remains visible and accountable. The infrastructure mediates but does not decide.

## Collectie Nederland 2.0

In 2024, the RCE asked me to advise on the renewal of Collectie Nederland. Working with a team of RCE staff, we arrived at the central conclusion: **stop aggregating**. Help institutions publish their own data according to the open standards of the [Dutch Digital Heritage Network](https://netwerkdigitaalerfgoed.nl), but do not take the source holder’s chair.

There seemed to be momentum for that new direction, and during the six months we worked together, there was strong support. But in the market consultation of September 2025, the aggregator reappeared in the architectural diagrams — not as a small component, but as an entire infrastructural layer with traditional functions neatly separated. Good intentions seem to have gotten lost in the translation from domain expertise to IT, or from IT to procurement. I hope it is not too late to ensure that the market is not asked to deliver a platform with a role the DERA explicitly discourages.

Every opportunity to transform an aggregator into a true service platform is one we should seize.

## The only valid excuse for an aggregator

The only legitimate reason to remain an aggregator is having an outdated system you cannot yet afford to replace. There are no other excuses. It is surprisingly simple: **if you cannot reconstruct the data beneath your service platform from the source, you are an aggregator.**

You can wrap it in technical rationalizations,  
you can hide behind convenience,  
you can say “that’s just how it works,”  
or that source holders “are not ready yet.”

But in the end, it all comes down to reproducibility and accountability. A documentable, transparent, and repeatable data infrastructure makes scientific and journalistic research possible—and it is also the lock on the door against unintended power formation. A growing stack of copies does the opposite.

If you want to know how this works, and you do not feel like waiting for the next blogs in this series, feel free to get in touch.
