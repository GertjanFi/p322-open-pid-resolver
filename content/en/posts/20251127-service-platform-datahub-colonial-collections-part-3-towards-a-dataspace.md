---
pid: p322:blog:01J6E8F3PDQ7M2H4K9R8V1CW
layout: layouts/post.njk
lang: en
title: 'Service Platform Datahub Colonial Collections Part 3: from NDE Infrastructure to Dataspace'
onHomepage: true
date: 2025-11-27T00:00:00.000Z
category: Background
type: blog
authorKey: gertjan
image: /assets/images/knowledge/bird-of-prophecy-3.jpg
excerpt: 'The Datahub Colonial Collections automatically processes and publishes museum data according to NDE principles: technically correct, legally permitted, and transparently traceable. But when datasets include colonial-era objects or human remains, the question shifts from can we? to should we?<br/><br/>Responsible publication requires four frameworks: contextual, technical, legal, and ethical. In a European dataspace, these frameworks become enforceable protocols, enabling responsible and trustworthy data sharing with trust by design built into the infrastructure.'
teaser: The final part of the P-322 series on the Colonial Collections is live. See how the Datahub is transforming into a European dataspace and why that changes the way we share heritage datasets. Discover it now.
license:
  content: CC-BY-NC-SA-4.0
  representation:
    html: ARR
---

## The Datahub as a Service Platform – Part 3

In [Part 1](/en/posts/20251113-service-platform-datahub-colonial-collections-part-1-the-user-environment) we explored the user environment of the Datahub Colonial Collections. In [Part 2](/en/20251120-service-platform-datahub-colonial-collections-part-2-infrastructure-and-NDE-compliance) we examined its infrastructure and how it aligns with the NDE architecture.  
In this final part, we take the step toward Europe’s future: the dataspace.

{% cfStream "4a8c79adcb16a8c3791a294c44553c4c", { lang: page.lang, aspect: "16/9", start: "00:00:10" } %}

## From Automated Dataflows to Responsible Data Sharing

Every night, the Datahub automatically ingests public museum data. Technically, legally, and NDE-compliant, this works perfectly: source institutions retain control, transformations are traceable, and data is republished as linked data.

But precisely because of this success, the technology collides with a new reality. Among the automated inflows were also objects containing human remains from colonial contexts. Legally permitted, technically correct — but morally sensitive. An Indonesian researcher compiled a list: _specimens of our ancestors_. The question thus shifts from _can we?_ to _should we?_

## Four Frameworks

To publish responsibly, a service provider must be able to answer four questions using a dataset’s metadata:

1. **Contextual: should we make the data accessible?**  
   Does the dataset fit the service and societal context? For example, does it contain colonial-era objects from the relevant period?

2. **Technical: can we process the data?**  
   Are encoding, date formats, empty values, links, and models suitable for processing?

3. **Legal: are we allowed to publish the data?**  
   What do licenses, GDPR regulations, and access conditions say?

4. **Ethical: do we want to make the data accessible?**  
   Not all data that fits, can, and may be shared, should be visible to everyone. Consider conditional access for researchers or source communities, for instance to data about objects containing human remains.

## Toward a Dataspace

Moving toward a dataspace means that these four frameworks are no longer optional but become **enforceable through metadata agreements**. This goes beyond what NDE achieves through instruments like the dataset register. One essential layer is still missing: ethical metadata.

Source institutions could indicate that a dataset contains human remains and explicitly define access conditions, such as:

- access only for authorized researchers;
- access with consent from source communities;
- no processing outside specific jurisdictions.

In a dataspace, these are not paper agreements but protocols that automatically enforce access rules. The source institution thus retains control over how, by whom, and under which legal and ethical conditions its data is used. This is what Europe calls _trust by design_.

### Mutual Trust

A dataspace not only protects data providers. It also gives service operators assurance about the quality of enrichments within the network. This reduces the risk of vandalism, unreliable enrichments, or misinformation that could, for instance, disrupt relations between the Netherlands and Indonesia.

## What Does This Mean for the Datahub?

The Datahub Colonial Collections already meets three of the four pillars: technical, legal, and contextual. The automated ethical validation, however, is still missing. Within NDE, we currently apply this validation manually and voluntarily — the datahub is not yet compelled by protocols. Only then will the Datahub become not just a service platform but a dataspace: **responsibly discoverable heritage, with trust built into the infrastructure itself.**
