---
pid: p322:blog:01J6E8F3PGH7M9Q2R4K8V1CW
layout: layouts/post.njk
lang: en
title: What Are We Really Looking For? Dataset Discovery in the NDE Dataset Register on the Road to a Dataspace.
onHomepage: true
date: 2025-12-18T00:00:00.000Z
category: Opinion
type: blog
authorKey: gertjan
image: /assets/images/knowledge/wat-zoeken-we-dataset-discovery-in-nde-datasetregister-naar-dataspace.jpg
excerpt: 'The third <em>lesson learned</em> from the Datahub Colonial Collections service platform.<br/><br/>The NDE Dataset Register is currently mainly a technical entry point to endpoints, but for a service platform like the Datahub Colonial Collections that is not enough. We need to understand what we are actually ingesting: the content, the technical quality, the legal conditions and the ethical sensitivities. By broadening discovery to these four lenses, the dataset register becomes a meaningful instrument that helps data providers publish responsibly and prepares service platforms for a dataspace logic.'
teaser: Finding a dataset is not the same as understanding what you are taking in. Why the NDE Dataset Register only gains real value when discovery looks beyond technology — and how four frameworks open the path toward a dataspace.
license:
  content: CC-BY-NC-SA-4.0
  representation:
    html: ARR
---

When you work on a service platform such as the [Datahub Colonial Collections](https://app.colonialcollections.nl/en), you inevitably encounter a moment where technology collides with meaning. This third _lesson learned_ is therefore partly a lesson and partly a hopeful expectation.

In the [final episode of the vlog series](https://www.p-322.com/nl/posts/20251127-dienstplatform-datahub-koloniale-collecties-deel-3-naar-dataspace/), in which I demonstrated the background of the datahub, I showed how a dataset containing human remains surfaced unexpectedly among innocent-looking object metadata. Moments like these make it clear that a technically correct endpoint import does not mean you understand what you are bringing into your system. You need an entry point that helps you read datasets the way you read archival records: with context, with attention, and with the ability to ask the right questions.

The [NDE Dataset Register](https://datasetregister.netwerkdigitaalerfgoed.nl) is an excellent gateway for this, as it contains the published descriptions of datasets that heritage institutions register. Yet in its current form it is mostly a technical tool that answers the question of which endpoints exist, not which dataset you are actually touching. It is therefore time to revisit _discovery_, not as a technical listing but as an instrument that describes datasets through four lenses: content, technical characteristics, legal conditions and ethical considerations.

## What the Dataset Register does today

The dataset register collects dataset descriptions from institutions that publish their metadata according to the standards of [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl). The software uses dataset descriptions published by data providers in line with the specifications of the _[Requirements for Datasets](https://docs.nde.nl/requirements-datasets/)_. The register itself is open source and available on [GitHub](https://github.com/netwerk-digitaal-erfgoed/dataset-register), and it is continuously maintained by both institutions and developers.

Each dataset description refers to distributions such as data dumps, OAI-PMH feeds, SPARQL endpoints and other APIs, and includes information about licence, creator, language, size, version and update frequency. According to the [National Archives of the Netherlands](https://www.nationaalarchief.nl), the register now contains more than ten thousand dataset descriptions, forming a national foundation for search engines, developers and researchers.

For the Datahub Colonial Collections, the register currently works as follows: we maintain a list of datasets, retrieve their addresses from the catalogue, visit all active and valid endpoints, and collect the data. The register therefore tells us where something is located, but hardly what it is, how sensitive it may be, whom it is intended for, or under which conditions it may be used.

## A knowledge graph of dataset descriptions

The datahub would greatly benefit from a dataset register that functions as a discovery service: effectively a knowledge graph of dataset descriptions. Through a formalised query, the datahub could automatically find relevant and appropriate datasets. A data provider who wishes to contribute can inspect the query and ensure that their dataset description fits within the specified criteria.

As a service platform, there are four categories we want to evaluate: the content lens, the technical lens, the legal lens and the ethical lens.

## Content lens

The first lens concerns what is _inside_ a dataset. A service platform cannot rely solely on technical characteristics; it must understand the context of the dataset: the periods it covers, the geographical scope and the types of materials described. A dataset may contain cultural objects, archival materials, photographs, natural history specimens, and much more. For all of these, provenance, dating, material and immaterial context must be discoverable. Relationships with stakeholder groups should be visible as well. Who contributed to the dataset? What are the provenance relations?

For example, for the information in the Datahub Colonial Collections, the following content criteria were defined (see: [What information is in the datahub?](https://www.colonialcollections.nl/datahub/)). Objects fall within colonial context when:

- They were created and/or acquired in Dutch trading posts or colonies;
- They were created and/or acquired in trading posts, colonies or mandate territories of other modern colonial powers;
- They were acquired outside those areas but in a context of or as a result of unequal colonial power relations;
- They were acquired after formal decolonisation but have a likely earlier history of creation and/or acquisition in a colonial context.

By including such content-rich metadata in discovery, datasets can be found based on relevance and meaning rather than just technical existence.

## Technical lens

The second lens is where the dataset register currently performs strongest. It describes how data is provided: through which formats, endpoints or dumps, with which update frequency and with which semantic structure. The _Requirements for Datasets_ provide detailed guidance on how distributions must be described and which metadata is mandatory or optional.

But technical discovery needs more than provider-supplied descriptions. It would be incredibly helpful if the dataset register could indicate whether an endpoint is stable, whether a SPARQL or OAI-PMH feed responds reliably, how frequently the data is refreshed, and whether the dataset is compatible with an NDE-endorsed data model (generic [Schema.org](https://schema.org), or domain models such as [Linked Art](https://linked.art), [RiC-O](https://ica-egad.github.io/RiC-O/), etc.). As a service platform, you need to know whether a provider’s infrastructure is a future-proof building block that can be used safely and reproducibly.

## Legal lens

The third lens concerns rights, licences and access categories. Every dataset description contains licence information, but in practice a label such as CC0 or CC-BY reveals little about the actual conditions of use, especially for sensitive or personal data. Discovery must therefore show which rights apply, who the data owner is, which GDPR classification is relevant and whether there are limitations on access or reuse. This is doubly important for colonial data: users need to know whether a dataset is freely reusable, restricted to researchers, or accessible only to communities of origin.

As NDE evolves towards a future dataspace, legal conditions will take on an even more central role. The European Union increasingly emphasises data sovereignty. Data providers may require that data be processed only on servers under EU jurisdiction, or by parties committed to the EU sanctions regime. In such cases, datasets may not be used in ways that benefit states such as Russia or Iran.

Finally, the heritage sector’s widely shared desire to limit unrestricted harvesting by major AI platforms also belongs under the legal lens.

None of these requirements can currently be enforced without dataspace-level technical infrastructure. But it is crucial that responsible service platforms can filter and select based on legal criteria—and equally crucial that providers can demonstrate that parties who misuse data were adequately informed. This establishes the basis for legal recourse.

## Ethical lens

The fourth lens is the most challenging, and perhaps the most important. Datasets are not neutral containers, particularly when they touch on colonial history, representation, human remains or culturally sensitive materials. Discovery must reveal whether a dataset contains such sensitivities, which agreements have been made with communities, and how these agreements appear in metadata.

Mechanisms such as [Local Contexts](https://localcontexts.org) can support this. They make it possible to record cultural rights, community protocols and restrictions. It would also help service platforms if data providers indicated whether their dataset includes material containing human remains. These can include photographs or videos made during conflict or disaster, or cultural and natural history objects collected in a colonial setting. Ethical discovery shows not only what is allowed, but what is appropriate, and helps prevent the assumption that technical accessibility equals moral acceptability.

Another aspect of the ethical lens is ecological sustainability. How “green” is the dataset? It would be helpful if data providers offered insight into energy consumption and their green IT practices. I can imagine the consortium debating whether to ingest a dataset that contains important colonial objects but is hosted on infrastructure with a deeply problematic environmental footprint. Do we refrain from ingesting it to nudge the provider toward greener practices? Or do we ingest it because community interests outweigh sustainability concerns?

## What discovery through four lenses looks like

When the dataset register is no longer a list of endpoints but a knowledge graph of meaningful dataset descriptions, the way we search changes fundamentally. The datahub will be able to ask questions that are impossible today:

- return all datasets that meet the defined colonial context criteria;
- and that have at least a CC-BY licence and contain no GDPR-governed data;
- and, if they include human remains, trigger an additional transformation step in which those are flagged and restricted to authenticated users.

Discovery then becomes something very different from consulting the old Yellow Pages (for readers born after 2000: [this link explains it](https://nl.wikipedia.org/wiki/Gouden_Gids)). It becomes a context-sensitive decision process. The datahub would no longer operate with a static list of registered data providers, but would dynamically ingest datasets that are registered and discovered through the dataset register.

This approach gives data providers the opportunity to reflect—_before_ publication—on the content, technical quality, legal conditions and ethical implications of their datasets. In doing so, the dataset register becomes the engine of metadata-driven governance: precisely the shift required as we move toward a dataspace architecture.
