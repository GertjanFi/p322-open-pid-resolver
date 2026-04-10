---
title: "Outside the Dataset, Within the Community: Enrichments as Nanopublications"
date: "2025-12-11T00:00:00+00:00"
excerpt: "The second lesson from the Colonial Collections Datahub: enrichments must become independent, citable knowledge items.<br/><br/>The Datahub cannot store enrichments in its cache without losing them every night—nor without becoming an aggregator itself. Communities of origin also want their knowledge to exist outside Dutch infrastructure. This is why enrichments are published as standalone nanopublications: small, verifiable knowledge claims with their own provenance and licensing, distributed across an international network. The cache stays temporary, but the knowledge becomes durable, citable, and independent—exactly what reproducible and responsible infrastructure requires."
teaser: "The second P-322 lesson for service platforms is live. Discover why enrichments in the Datahub Colonial Collections are only sustainable and fair when published as independent, citable nanopublications: verifiable knowledge claims that exist outside Dutch infrastructure and are shared internationally."
isAutoTranslated: true
---

The first time a community of origin nasked why they should place _their_ knowledge in a Dutch database while the Netherlands already held the objects and museum information, it became clear that something fundamental was wrong. Communities no longer want their culture subordinated to the Netherlands—and rightly so.

So how should the [Colonial Collections Datahub](https://app.colonialcollections.nl/en) handle enrichments? The community descriptions, corrections, and contextual notes that users add to the data? And: how do we ensure we do not become an aggregator ourselves? As I wrote in the previous blog, “[Cache versus Copy and Aggregation](./20251204-cache-geen-kopie-tegen-aggregatie.md),” we want to be able to rebuild a reproducible dataset from the sources every night. Enrichments are _not_ suited to disappear into the cache. Rebuild the dataset the next night, and they are gone.

## Nanopublications: small, formal, but powerful

We needed something else. Something that would allow enrichments to exist outside Dutch infrastructure, remain globally accessible, and still stay linked to the objects they describe. Something stable, citable, and traceable back to its source: the community that holds the knowledge.

That solution is the _[Nanopublication](https://nanopub.net)_.

A nanopublication is the smallest publishable unit of information: a standalone, machine-readable statement, precise enough to say something meaningful about a single data point. Where a museum record might state `"Color": "Black"`, a nanopub can refer not only to the object but also to the attribute “color,” and then add the claim: “This object once had red pigment that has faded.”

When modelling enrichments, several worlds intersect. Museums provide **metadata**: factual collection information. Researchers and communities produce **annotations**: interpretations, context, discussion. But the Datahub needs something else to remain reproducible: **knowledge claims**. These are stabilized statements that must be traceable, verifiable, and citable.

Nanopublications fall exactly into this third category. They are not extra metadata or annotations with a semantic gloss, but standalone micro-publications with a formal role in the knowledge graph.

## The structure of a nanopublication

Each nanopublication consists of:

- an **assertion**: the claim itself;
- **provenance**: how the claim came into being—by whom, when, using which method;
- **publication info**: the publication conditions—license, identifier.

Because of this three-part structure, an enrichment becomes a first-class citizen in the dataset, equal to the information of the original data providers.

Nanopublications are stored on a nanopub server and replicated across a network of dozens of servers worldwide. This network has existed for over a decade, is widely used in scientific research, and ensures that nanopubs cannot be modified after publication. Their cryptographically verifiable identifiers guarantee that content remains authentic. This makes the knowledge more secure than many other datasets.

That international character also raises concerns. Especially in a domain like colonial collections, where interpretation, representation, and power relations weigh heavily. Not to mention the potential influence of **fake** claims by politically motivated opponents of restitution policy, or even by states such as China or Russia seeking to disrupt relations between the Netherlands and countries like Indonesia. Thanks to explicit provenance and publication info, such misuse and vandalism are mitigated.

Creating and using nanopubs is free. The Swiss company [Knowledge Pixels](https://knowledgepixels.com) provides services such as the [Nanopub Monitor](https://monitor.knowledgepixels.com), an overview of the infrastructure, as well as a SPARQL endpoint for retrieving nanopubs.

## Lightweight infrastructure

With nanopublications, the cache remains disposable while all added knowledge becomes durable. Every night, we retrieve collection data from the data providers via the [NDE Dataset Registry](https://datasetregister.netwerkdigitaalerfgoed.nl/?lang=en). We then query the SPARQL endpoint of Knowledge Pixels for all nanopubs linked to those objects.

This yields a simple but powerful reconstruction rule for the cache:

**source data + nanopubs = the complete, reproducible knowledge graph.**

Adding nanopublications usually happens within the Datahub environment, but it does not have to. If someone in South Africa, Sri Lanka, Suriname, or Indonesia creates a nanopub and links it to an identifier of an object in the Datahub, we receive it as well. It becomes its own independent source outside the Dutch heritage domain—exactly what communities asked for.

Because nanopubs always carry cryptographic provenance and publication info, the Datahub can filter enrichments without becoming a gatekeeper. For example, we can choose to display only nanopubs from registered community users. At the same time, the network remains open: anyone can publish, but no one can manipulate invisibly. Nanopubs combine openness with verifiability, without turning the Datahub into a central authority.

## Nanopublications and Web Annotations

You might ask: why not use an annotation system? For example, the [Scholarly Web Annotation (SWA) framework](https://clariah.github.io/scholarly-web-annotation/docs/about/) from [CLARIAH](https://clariah.nl), which builds on the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/). It allows annotations on text, images, or audio and video published on the web, without altering the source. SWA is ideal for the research process: comments, discussion, alternative interpretations, versioning.

But because SWA is designed for **knowledge in progress**, it is not the natural endpoint for enrichments that become part of a reproducible knowledge graph. Once an enrichment stabilizes—no longer a hypothesis but a confirmed knowledge claim—stricter requirements arise: durable publication, citability, verifiability, permanent identification.

A nanopublication is not an alternative to a Web Annotation but a **publication form**. You can even use a Web Annotation directly as the **assertion** in a nanopub: the content remains intact, while the nanopublication adds provenance, publication metadata, and verification.

SWA captures the thinking process and content; the nanopub gives the claim a formal, durable place in the knowledge graph. In a future version of the Datahub, SWA could become a natural complement.

## Alignment with the DERA

If we were to store enrichments ourselves, we would once again become an aggregator—precisely what the DERA argues against. In the description of the Aggregator role, the DERA states unambiguously:

> “In the intended target situation, aggregating heritage information in subdomains is no longer necessary.”  
> ([DERA, Aggregator Pattern](https://dera.netwerkdigitaalerfgoed.nl/index.php/Aggregator#Status))

Data providers remain responsible for their own data; service platforms must respect traceability and decentralized publication. By _not_ absorbing enrichments into the infrastructure but instead publishing them as standalone nanopublications, the Datahub avoids becoming the kind of aggregator the DERA warns about.

The infrastructure remains supportive—not controlling.

## What this delivers for the Datahub and the wider heritage domain

With nanopublications, the Datahub shifts from being a technical service provider to a facilitator of sustainable knowledge production, without becoming a data holder itself. Enrichments gain an independent existence, with their own metadata and traceability. This delivers:

- **scientific verifiability**: every claim is checkable and reproducible;
- **community voices**: communities of origin gain a formal place outside Dutch infrastructure;
- **modular reproducibility**: the graph consists of source data + nanopubs—nothing more;
- **intentional infrastructure**: the cache stays temporary, while knowledge remains durable and distributed.

For a domain shaped by sensitive power dynamics, complex provenance histories, and international interests, this is not a technical luxury but an ethical necessity.
