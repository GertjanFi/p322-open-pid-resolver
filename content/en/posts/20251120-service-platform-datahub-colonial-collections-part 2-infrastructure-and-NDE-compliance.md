---
pid: p322:blog:01J6E8F3PCM7H4Q2R9K8V1CW
layout: layouts/post.njk
lang: en
title: "Service Platform Datahub Colonial Collections Part 2: Infrastructure and NDE Compliance"
onHomepage: true
date: 2025-11-20
category: "Background"
type: "blog"
authorKey: gertjan
image: "/assets/images/knowledge/bird-of-prophecy-2.jpg"
excerpt: "In part 2 of the datahub as a service platform, we descend into the infrastructure beneath the Colonial Collections. Not the interface, but the agreements that determine who publishes which data, how it keeps flowing, and how close we stay to the source. We follow how museums publish their own data according to the NDE architecture, how the Datahub uses it without aggregating, and why enrichments are stored as independent knowledge instead of being hidden in an intermediate layer."
---

## The datahub as a service platform – part 2

In [part 1 of this series](/en/posts/20251113-service-platform-datahub-colonial-collections-part-1-the-user-environment), we explored the user environment of the Datahub Colonial Collections and followed the _Bird of Prophecy_ across the screen. In part 2, we reverse the perspective. We look at the layer where no visuals remain, but where it is decided which data can appear in the interface at all: the infrastructure.

Again, the focus is not technology for its own sake. The question remains: how do we ensure that museums, communities of origin, and researchers can collaborate without losing control over their data? The answer begins with the architecture of the Dutch Digital Heritage Network (NDE). In the video, I show how the Datahub is built on the NDE blueprint _“Afspraken voor erfgoedsites en apps”_, which I helped author. Not a theoretical model, but a diagram that exists one-to-one in the live environment.

Note: this presentation was recorded before the new NDE vision document on service platforms was published: “[From Data to Service](https://netwerkdigitaalerfgoed.nl/nieuws/van-maatwerk-naar-netwerk-samen-bouwen-aan-erfgoedplatformen/)” (document available in Dutch only). The infrastructure of the datahub is also described in that publication.

{% cfStream "354a6afa8111744042ad52cc8f9bc3f9", { lang: page.lang, aspect: "16/9", start: "00:00:10" } %}

## The lower layer of the Datahub Colonial Collections

At the bottom of this architecture are the source holders: museums such as the Wereldmuseum, Rijksmuseum, Bronbeek, RCE, and NIOD, each with their own collection management systems and data models. The first step is not “making everything uniform”, but getting the data to flow. Every night, transformation pipelines read the source databases and convert them into linked data according to NDE requirements. This creates a standardized publication layer, while content and quality remain the responsibility of the museums.

These published datasets are then registered in the NDE dataset register. This register does not store new copies of the collections, but descriptions and addresses. In the video, I show how the Datahub queries this register and receives a list of sources and URLs where the data can be found. Only then does the Datahub fetch, transform, and present it. Service platforms become reusable clients of a shared infrastructure rather than new silos.

## Not aggregators

A crucial distinction is that between a cache and an aggregator. The Datahub temporarily stores retrieved data in a cache solely to keep the application functional and responsive. Should that cache fail, we rebuild it from the source. We do not claim a new “master dataset.” This is fundamentally different from classical aggregators, which collect datasets, enrich them, and republish them as new derived sources. The more aggregates of aggregates, the harder it becomes to trace transformations, and the less reliable the data becomes for research.

This transparency becomes even more important when enriching data. In the video, I explain how enrichments — including narratives manually added by communities of origin — are not stored in the cache, but in separate enrichment datasets. These record what knowledge has been added, by whom, and how it links back to the original source records. Enrichments become full-fledged sources with their own dataset descriptions, instead of invisible edits in an intermediate layer.

## Towards dataspaces

Part 2 is therefore not a tour of screens, but of agreements: who carries which responsibility, how we remain as close as possible to the source, and how to build a service platform we can later defend to researchers, communities, or even a court. In part 3, I extend this line towards European dataspaces and show how this architecture aligns with current discussions in Brussels on a fairer digital landscape for culture and knowledge.
