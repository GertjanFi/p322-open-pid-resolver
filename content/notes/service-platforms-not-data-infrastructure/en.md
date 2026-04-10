---
title: "Service Platforms Are Not Data Layers — Time to Acknowledge That"
date: "2025-11-18T00:00:00+00:00"
excerpt: "Service platforms brim with creativity and improvisation, much like jazz musicians. But even in jazz, there is always a bass line holding everything together. In my response to the report 'Van Data naar Dienst', I explain why that role in our digital heritage infrastructure belongs to the broker. When we take that position seriously, platforms regain the freedom to do what they are best at."
isAutoTranslated: true
---

Last week, I read the NDE report _'Van Data naar Dienst'_, which presents a vision for developing connected digital service platforms. The authors regularly refer to the Colonial Collections datahub as an example. That’s wonderful, but there is something I learned in that project. Not in a single moment, but in a series of small insights that only later revealed a pattern.

Each time we brought data together, enriched it, normalized it, published it, and had to update it again, we did the same thing: almost without noticing, I kept shifting more responsibilities toward the service platform. Not because it was logical, but because it felt practical. And this report suggests we now want to make that shift structural.

## Data Layer and Presentation Layer

The central argument in the report is the split between a clearly separated presentation layer and data layer within the platform infrastructure, connected through open standards. Clear separation with standardized open interfaces? Excellent idea — let’s do that. But should that responsibility sit with the service platform? Maybe we should think about that a bit longer.

I understand why we describe it this way — I made the same choice in the datahub — but that also taught me why we need to organize things differently.

The datahub already sits close to that explicit split: a data layer of transformations, enrichments, and remodelings that end up in a _knowledge graph_. That Colonial Collections graph communicates via an open interface (in our case [Next.js](https://nextjs.org) + [ElasticSearch](https://www.elastic.co/elasticsearch)) with the presentation layer — the user-facing website. For reuse, we even registered the graph in the dataset registry.

While building this, I often thought: “This is necessary for now, otherwise we can’t deliver. But this isn’t how it should be.” The Colonial Collections datahub is temporary and transient. As with nearly all service platforms, it is supported by a consortium with project-based funding that ends — in this case in 2026. It is not the right place to manage a data layer that others must be able to build upon.

And the irony is: the DERA already provides the answer. The broker. The role I keep forgetting.

## Why Service Platforms Are Strong — As Long As They Are Not Overloaded

I love service platforms. I’ve built them, advised on them, rebuilt them, and occasionally buried them. They are creative, exciting, and wonderfully ephemeral. They are the jazz musicians of the heritage sector: lots of improvisation, little archiving. They must be light, fast, and focused on audiences and imagination. They are not places for sustainable data integration.

That’s not an insult but a healthy observation. Service platforms survive because of their flexibility. They are almost by definition temporary, project-based, and thematic. You do not want long-term semantic consistency to depend on the project lead of the service platform _“Jenever Jazz Jams.”_

Ephemerality is built into a service platform. The question nearly all service providers ask themselves is: “How do we secure this temporary funding opportunity?” Because at the end of every project, there is always a tail of remaining user wishes.

I’ve entertained the thought: perhaps a foundation will help; perhaps it convinces someone to fund it further. But honestly, that only postpones the real question: what here is structural, and what is not? And most of the time it never becomes a foundation — institutions merely promise “to take responsibility after the project ends,” smile politely, and return to business as usual.

And that’s fine. Not everything has to be eternal. If a service provides value to users, it will find a way to continue. If the value disappears, the platform disappears too.

But that also means you should not embed an entire data layer — harvesting, transformations, knowledge graphs, indexes — in a place that is by nature temporary. Especially not if others need to rely on it.

## The DERA Triangle

The [DERA](https://dera.netwerkdigitaalerfgoed.nl) — our Digital Heritage Reference Architecture — is clear about the roles in the infrastructure. For this discussion, the most important roles are [Data Holder](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Bronhouder), [Broker](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Makelaar), and [Service Provider](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Dienstverlener). They form a triangle that is simpler than it sometimes appears.

As a service provider, it is tempting to take on more responsibility: I have a delivery obligation, no one else will do it, so I’ll just handle it myself.

- Enrichment of a dataset using the Termennetwerk? Easy to do inside the service platform.
- Automated improvements and transformations? We already have a pipeline — add it there.
- A knowledge graph where everything comes together? Great, attach persistent identifiers while we’re at it…
- An API for the presentation layer? Perfect.

You want to implement everything inside the project you’re already working on.

But each time, a voice in the back of my mind said: this doesn’t belong with the service provider. This belongs with the broker. The role that isn’t hidden away in an attic, but clearly documented on the DERA website.

## And What About the Data Holder?

The data holder sits on the opposite end of the durability spectrum. Where the service provider is a travelling musician improvising in different ensembles, the data holder is a well-established orchestra that has been playing the same repertoire for decades: not very innovative, not very flexible, but extremely reliable for safeguarding information across centuries. Those strengths become weaknesses when you need to respond quickly to new trends.

Page 22 of the _Van Data naar Dienst_ report states that data holders should provide customized datasets — for example all objects tagged with a WW2 term, or all objects whose creator matches a specific RKDartists identifier. Platforms like Oorlogsbronnen or Van Gogh Worldwide can then process this more easily.

I know very few data holders who can do this, and the ones who can usually say — correctly — that this is not their job. Data holders publish generic information for everyone to use. That is what they are funded to do. Asking them to detect trends and prepare made-to-measure selections forces them into taking specific positions.

Data holders must remain free to decide _whether_ and _how_ they take a stance — especially on topics such as looted art or the legacy of slavery. Not every institution wants to take such positions, and those who do will rarely make the same choices.

Imagine we expect every data holder to prepare a customized dataset of “objects with a colonial history” for the datahub. Then each data holder must also decide what belongs in that selection. This effectively means Dutch institutions determine what may or may not qualify for restitution.

Ah, but then we can record the definition centrally, in a registry? Perhaps — though I dislike centralised mandates — but the _execution_ remains with the data holder. And definitions always require interpretation.

The infrastructure must guarantee that a service platform can create its own selections — for instance, when the RCE and a Surinamese stakeholder disagree on an object’s colonial context.

Selection is not a task for the data holder. Service providers must make independent choices in order to serve their users.

## So Where Should It Happen? With the Broker

If the service provider is too transient, and the data holder should not handle these tasks, where should they go?

With the broker.

A broker provides infrastructure that allows parties to decide:

- which data from data holders is processed (selection),
- how that data is processed (transformation),
- how the result is published (distribution), optionally enriched.

A broker provides processing pipelines. All processing must be documented and logged for audits (algorithm X transformed A → B at time Y for party Z), and results must be available in different models.

The data layer disappears from the service platform and finds a home with the broker. The service provider becomes a consumer of these pipelines and builds the user interface on top.

Data holders can also use the broker — for example, for a pipeline that cleans collection data and writes it back into a new import file. This continuously improves data quality without manual steps, unmaintainable scripts, or dependency on system vendors.

## Towards European Data Spaces

The [National Digital Heritage Strategy 2025–2028](https://www.rijksoverheid.nl/documenten/beleidsnotas/2024/11/30/nationale-strategie-digitaal-erfgoed-2025-2028) states that the Netherlands intends to build a data space for cultural heritage. Page 10 links this to the European ambition for a _common European data space for cultural heritage_.

Within that European model, the broker is also essential. Europe calls this role a _Data Intermediary_ or _Federated Broker_, but the function is the same: someone must process data and determine who may access what, and why. And that cannot be organized project by project.

Brokers check, using the rules set by data holders, which consumers may view which data. Because although cultural heritage data is relatively open, we still face significant constraints.

A broker must, for example:

- guarantee that no GDPR-sensitive data appears in processed datasets (legal constraints),
- ensure no objects containing human remains appear on the platform (ethical constraints),
- filter out malicious or manipulative third-party enrichments that could damage international relations (content constraints).

These were all challenges we encountered in the datahub.

Implementing such processes cannot rely on temporary project funding and does not belong with the data holder. It is specialized work — the work of the broker.

## The Broker as the Bass That Holds the Jazz Together

The broker is not spectacular. He doesn’t shine. He doesn’t appear on homepages and rarely receives applause. But he protects continuity. He keeps enrichments together. He ensures that data published today remains meaningful tomorrow. He prevents us from having to start over each time, prevents data holders from chasing every trend, and prevents service providers from building their own mini-infrastructures.

But his work is so steady that we collectively forget that the bassist is the one carrying us. In the _Van Data naar Dienst_ report, the broker is not mentioned once. And I experienced the same dynamic in the datahub: I overlooked the role precisely when I needed it most.

I think that is the key insight:

_A data space only emerges when the broker receives his proper place. Not hidden within a service platform. Not reinvented with each grant. Not placed on the plate of the data holder. But exactly where he belongs: between the presentation layer and the source data._

It is a structural layer described in the DERA, and one that the National Strategy needs to fulfill European ambitions.

A service provider is transient.

A data holder is durable.

The broker is stable: connecting, stabilizing, anchoring.
