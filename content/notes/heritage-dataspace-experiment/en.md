---
title: "Heritage and data spaces: experiment 1"
date: "2026-01-21T00:00:00+00:00"
excerpt: "data spaces are showing up more and more in heritage policy, but what do they actually mean technically? In this first experiment I build a working data space transaction using European open-source technology: no diagrams, but real software you can run locally. Step by step I show how providers and consumers negotiate, wait, and ultimately exchange data under explicit conditions. No abstract policy talk, but a concrete sign of life beneath the words ‘data space’."
teaser: "What happens when heritage data is not simply open, but shared through agreements? A hands-on data space experiment, from gate to key."
isAutoTranslated: true
---

In digital heritage, you occasionally hear the term _data space_ (in Dutch: _dataruimte_). Over the past year it suddenly started popping up — just enough to make you wonder: what does it actually mean? And more importantly: what can it really do? Is it a new term for policymakers, or is there concrete technology underneath it? Out of curiosity, in late December 2025 I started digging. In a series of experiments I looked at what it is, how it works, and whether I could build a data space myself. You need something to do between the Christmas dinner and the New Year’s doughnuts. And by “build”, I really mean: working code for a real data space transaction. Something you can install yourself. On your own computer.

[You can find the first experiment in the P-322 GitHub data space-experiments repository](https://github.com/p-322/dataspace-experiments).

This is the first blog post about those experiments. I will do my best to keep it accessible. But: data spaces are still just servers talking to each other. To show how that works, I cannot avoid some technical detail and sharing code. For the more technical readers it may not go deep enough, but for them I’m happy to point to the repository, where you can find all the code and container configuration.

## Reading guide — choose your route

This is a long article because I am doing **two things at once**:

1. explaining what a data space is, and
2. showing how a data space actually works, with a concrete experiment.
   You do not have to read it all in one sitting. Feel free to choose a route:

- **🕐 ±5 minutes — Concept & context**  
   What is a data space, why does it show up in heritage policy, and what makes it different from “old wine in new bottles”?  
  → Read: [A data space: what is it, really?](#the-data space-and-the-national-digital-heritage-strategy)
- **🕒 ±15 minutes — Deeper insight without code**  
  A general explanation of the problem a data space tries to solve, plus an overview of concepts, terms, and roles.  
  → Read: [Why a data space? And what does it look like?](#why-a-data space-and-what-does-it-look-like)
- **🧠 Full — The complete experiment including code**  
  All steps, code fragments, and the experimental demo.  
  → Read: [Step by step through the data space experiment](#step-by-step-through-the-data space-experiment)

## A data space — what is it, really?

### The data space and the National Digital Heritage Strategy

A little over a year ago, the dedicated people at the [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl) were working hard on the new [National Digital Heritage Strategy](https://zenodo.org/records/14760720) for 2025–2028. Around that time, I had a few conversations in which they explained that one important component would be the “data space” (_dataruimte_). And indeed: “Towards a data space for cultural heritage for the whole kingdom” is the first of the four strategic goals.

From the digital strategy:

> "Interoperability and the ability to exchange data effectively is one of the primary objectives of EU data policy. The EU’s 2020 data strategy calls for the development of ‘data spaces’ to make it easier to exchange data within and across sectors. For the cultural sector, the European Commission initiated the common European data space for cultural heritage, where heritage information from all EU member states is made findable and reuseable."
> That did not mean much to me until, in October 2025, NDE invited me to speak at the event _From data to blueprint_. [Europeana](https://www.europeana.eu/en) and the [Jewish Heritage Network](https://jhn.ngo) are working on the [European Memory Data Space](https://blueprint.memorydata space.eu) with the aim of bringing Holocaust-related material together.

### Old wine in new bottles?

At that event, I spoke with a specialist from a think tank that, among other things, works on the implementation of data spaces in the Netherlands.

I asked her, honestly.

“Is a data space actually something new? As in real technology? Or did we just give ideas we have been funding for fifteen years a new name for the next generation of funders and policymakers?”

She started with the usual nuance.

“That depends on who you ask. There are multiple sides.”

Then she paused for a moment and said:

“Honestly, for most people it’s mainly policy. The need to exchange data in a manageable way within a chain or network of departments and organisations. If you want that and you’re working on it, then it’s already a data space.”

I frowned.

“By that standard, the Netwerk Digitaal Erfgoed has been a data space for a long time… as has the Colonial Collections consortium. And NWO projects like CLARIAH and ODISSEI.”

She nodded, but immediately added something.

“For the technical people in our community, that often does not go far enough. They say: you only have a data space if you also implement the technology.”

I have to admit that made sense to me. But then: which technology?

### A data space between the New Year’s doughnuts

Between Christmas and New Year’s I thought: “Well, if there is technology… could I do it too? Build a data space?” So I took the first steps. You are going to see my learning path here. I will do things that others might look at and think: “But why??” Or: “How can you do that / miss that?”

I am writing this blog to help. Maybe it means you won’t have to make the same mistakes.

> A data space at its smallest is two parties that want to exchange data: a _provider_ and a _consumer_. In NDE terms, that is closest to _Bronhouder_ and _Gebruiker/Dienstplatform_. The consumer is in any case not an end user, but a party that wants to process the data further via an app, website, or other infrastructure.

## Why a data space? And what does it look like?

### What is the current situation?

Within NDE, data holders and users already exchange data via the web. Heritage data lives on a data holder’s server and is openly available through an API. Think of that as a web address intended not for humans, but for machines.

The user’s software calls that web API, asks for data, and gets it back. Simple.

That means the data holder has zero control. It is open data, so an open web API. Anyone can ask for data, and everyone gets it.

### What problem should a data space solve?

As a data holder/provider, you do not know who is requesting the data and what they will do with it.

And as a user/consumer, you do not know what is in the data.

That is a problem.

Even in an open landscape like heritage.

Over the past year and a half, I have thought multiple times: if only we had a solution for this.

For example, when we started making Colonial Collections data available about objects containing human remains. Ethically, you may not want to show that to the entire world. Sometimes, as a data holder, you want to share certain data openly only with researchers.

Or that time I had a conversation at an NDE hub about publishing data openly — just not for training AI models.

Or the realisation that more control over access is a consequence of a changing and polarising world. We can no longer naïvely make everything available to everyone. There are groups and countries that do not have our best interests at heart. For example, actors who benefit from sabotaging the relationship between the Netherlands and Indonesia. Or extremists who want to misuse information: to promote a particular image of our culture — or to destroy it.

More grip on access to data, with as little damage as possible to the open character of heritage and society.

That is a major challenge.

> Maybe a data space is, in fact, about making open infrastructure resilient.

### The data space Connector

Just like in the current situation, in a data space the consumer and provider still communicate directly. The basis remains a _peer-to-peer_ system without a central authority that manages, validates, and controls everything.

The difference is that consumer and provider talk through an infrastructure layer: the [Eclipse data space Connector](https://projects.eclipse.org/projects/technology.edc). The older technical readers who once programmed Java may frown for a second — because Eclipse was that programming environment, right? Yes: that Eclipse. But from it emerged a French foundation that maintains open-source software.

And that matters: the EDC layer is open and anyone can implement it freely. That means the technology beneath a data space does not belong to an EU institution, a company, or a country. It is also not a short-term solution tied to a temporarily funded project. The EDC is inherently open and, so to speak, _here to stay_.

EDC handles publishing and discovery, negotiation, evaluation, and the controlled execution of the data transfer between provider and consumer. Without EDC, there is no data space.

### The data holder (Provider)

In a data space, the provider registers a dataset (an _Asset_) in its catalogue. That might sound like the dataset register, except it is not central. It is not a network service. The provider publishes the catalogue itself via its own EDC. It is therefore more comparable to publishing the dataset description — which, according to DERA, also sits with the data holder.

A provider catalogue does not contain the data, and it is not direct access to the web API where the data lives. In a data space catalogue, you register a proposal (an _Offer_): under these conditions, a consumer may approach me to obtain access to the data.

The provider does this via the Provider Management API of the EDC implementation running on its server.

### The catalogue

How does a consumer know which assets are offered within the data space? Because it is a peer-to-peer system, there cannot be a mandatory central truth where “all provider offers” live. That is a deliberate design choice.

A data space has no central authority.

No _single point of failure_.

No implicit requirement to index everything.

The consumer knows (through configuration, governance, or an onboarding process) certain providers, and maintains its own list of provider endpoints. For each known provider, the consumer requests a catalogue. Gathering the offers from those catalogues is then done locally by the consumer. That gives the consumer maximum sovereignty — but I am afraid it does not scale at all. This may work for pilots, closed consortia, and an experiment like mine, but not for large networks with 100+ providers.

Even though a central index is not required, that does not mean it cannot exist. In practice, in a data space there will be one or more parties offering a federated catalogue. This is the place where, intuitively, the NDE dataset register fits for me.

A federated catalogue is a service that iterates over provider endpoints and fetches the metadata from their catalogues. Like the dataset register, it plays a role in dataset _discovery_. It does not contain the data itself. It is not an authority. And it does not negotiate between consumer and provider. The federated catalogue sits alongside the data space.

In larger data spaces there will likely be multiple thematic or domain-specific catalogues. In the NDE context, that could be a register for colonial datasets or WWII datasets; or catalogues specifically for libraries, museums, or archives.

Just like within NDE, providers publish dataset descriptions in the form of Offers — only now via their EDC catalogue. In an offer, the provider determines what can be retrieved, by whom, and under which conditions.

### User/Service platform (Consumer)

To start a data transaction, the consumer always approaches the provider. It does not matter whether the consumer consulted a federated catalogue first.

To contact a provider, the consumer uses the Consumer Management API of its own EDC server.

> **Important**: every participant in a data space has its own server running an EDC data space connector. Depending on whether you act as provider or consumer, you use the Provider or Consumer Management API of your own EDC. In conversations I met people who thought a broker or intermediary “provides” the EDC. That is not the case. There is no middle party that facilitates the EDC. A data space is still a peer-to-peer network.
> The EDCs of participants in the data space communicate using the [data space Protocol (DSP)](https://eclipse-data space-protocol-base.github.io/data spaceProtocol/2025-1-err1/).
> The consumer contacts the provider’s catalogue. If there is an interesting offer for a dataset, the consumer asks the provider whether an agreement can be made about the use of that data. In data space terms, a _Contract Negotiation_ is initiated.
> The provider can express requirements in such a way that the EDC can automatically evaluate them. That does require a trustworthy party capable of attesting to the consumer’s claims. If, for instance, the provider wants to grant access only to researchers, someone needs to be able to guarantee that the consumer really is a researcher. Behind that sits a complex world of infrastructure and organisational arrangements.
> Fortunately, the data space specifications leave open how conditions are verified. The provider can also formulate conditions more generally and then manually verify afterwards whether the consumer complied. That is comparable to licenses such as CC-BY-SA or GPL. In both cases, you accept the conditions attached to the license. Ultimately, if you break those conditions, the other party has grounds to take legal action afterwards.
> Once the consumer’s EDC accepts the conditions, the provider’s EDC makes a _Contract Agreement_ available that forms the basis for the _Transfer Process_. This is the point where a formal agreement becomes operational access.
> To redeem access to the data, the Consumer EDC retrieves a key called an _Endpoint Data Reference_ (EDR). This key is linked to a contract agreement, a transfer process, and a specific asset. The key is only valid for a limited time. After it expires, the consumer must start contract negotiations again.
> With the EDR, the consumer goes to the provider’s data EDC endpoint. With a valid EDR, the consumer obtains access to the data.

### Contract negotiation and data transfer

A complete data space transaction consists of two processes: contract negotiation and the transfer process. In EDC terms, these are the _Control Plane_ and the _Data Plane_.

The **Control Plane** establishes agreements and governs. It does not move data. The control plane handles catalogue exchange, contract negotiation, policy evaluation, identity and trust checks, and the initiation and monitoring of transfer processes. The output of the control plane is permission and instruction: who gets access to which data representation, under which conditions. The control plane is about trust, agreements, and legitimacy.

The **Data Plane** executes the actual data transfer based on an existing agreement. The data plane receives an EDR from the control plane, validates the associated credentials, retrieves the data from the source, and delivers it to the consumer. The data plane does not decide anything about access or policy; it merely executes what has already been contractually allowed. The data plane is about transport, security, and execution.

## Step by step through the data space experiment

### Data server

In the experiment, I started by building a basic server with an API that exposes data at `http://localhost:7070/hello`. It is not even 20 lines of code.

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/server.ts
lang: ts
start: 1
end: 19
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/server.ts
  label: server.ts
```

When you call that address, you get back:

```p322:jsonblock
start: 1
value: |
  {
    "message": "Hello, dataspace",
    "ts": "2026-01-07T14:47:50.462Z",
    "dataset": [
      {
        "id": "a1",
        "title": "Example record",
        "license": "CC0"
      }
    ]
  }
```

Not a thrilling dataset, but good enough for now.

### Provider and Consumer EDCs

In the current situation, all traffic goes to that basic server to retrieve data. In a data space, we do not want that anymore. In a data space, there is a DSP connection from the edc-consumer to the edc-provider. So we need to set that up.

You can implement EDC from scratch based on the [connector code on GitHub](https://github.com/eclipse-edc). But that sounds like a lot of work. I was told it is a rather _low-level_ codebase where you have to do a lot yourself: configure, wire, and manage. I was warned there is a pretty steep _learning curve_. Not where you want to start for a first experiment.

By now, there are a few vendors that offer _higher-level_ EDC implementations with extra features that make configuration easier and reduce complexity in handling connections. One of them is the German company [Sovity](https://sovity.de/en/sovity-en/). In addition to their enterprise offering, they provide a [Sovity Community Edition](https://github.com/sovity/edc-ce) that you can run yourself. That is what I used to start these experiments.

Since I have not tested other implementations, this is not the moment to compare different EDC solutions. If there is a need for that, do let me know.

To use EDC, you need a place to store state. Sovity CE requires a PostgreSQL database. The provider stores, for example, which assets and offers are available, and the conditions attached.

For the experiment we need two EDCs: one for the provider that sits in front of the basic web server, and one for the consumer that wants to retrieve data from the provider. To spin up all moving parts, I use five Docker containers:

- api: the basic web server with the actual data
- provider-db
- consumer-db
- edc-provider
- edc-consumer

### The data space transaction

I implemented the data space transaction in TypeScript and run it with Node. The transaction steps are modelled separately, and in the experiment they are executed sequentially.

```p322:stream
provider: cloudflare
uid: 7c94c1bb7b0a1dd58abefca85cbdeab0
aspect: 16/9
start: 00:00:00
```

### 1. Provider: ensure asset (Control Plane)

_As a Provider, you are essentially building a wall around your basic web server. In that wall, you open a gate where you control access._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/01-ensure-asset.ts
lang: ts
start: 1
end: 117
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/01-ensure-asset.ts
  label: 01-ensure-asset.ts
```

Step 1 is fundamental: the provider declares that there is something to negotiate about. An asset is registered in the Provider Management API, including a reference to the actual source data. This creates neither access nor publication, but it does create an anchor point: a named object that can later become visible in the data space through conditions and contracts. Without this step there is nothing to offer; without a contract definition the offer remains invisible. So this is not publication, but a preparatory promise: “this data exists, and I am willing to make it available under conditions.”

The implementation is deliberately transparent. The code starts with a check: does the `asset-id` already exist in the provider catalogue? If it does, nothing is changed. But each time you run my experiment, all containers and data are destroyed and rebuilt, so most of the time this step will register a new asset. Assets have minimal metadata and a _DataAddress_ of type `HttpData` for now. That DataAddress points to the internal container URL (`http://localhost:7070/hello`), which is where the EDC will later grant consumer access.

After registration, the experiment includes an explicit verification moment. The data is fetched from the data server directly, outside of EDC. That path is intentional: once open as usual, and later via the city gate. The difference is not in the bytes, but in the promise around them. This allows us to verify that the data exists and that we receive the same content once we later approach the gate. This part is therefore not part of the data space transaction.

For experiment 1, there is only one protocol, one endpoint, and one asset, with minimal metadata.

### 2. Provider: ensure contract-definition (Control Plane)

_The provider can, like a medieval city council, define conditions that the guards at the gate must enforce._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/02-ensure-contract-definition.ts
lang: ts
start: 1
end: 106
lines: 20
source:
  url: https://github.com/p-322/datapace-experiments/blob/main/exp-01/src/dataspace-process/steps/02-ensure-contract-definition.ts
  label: 02-ensure-contract-definition.ts
```

This is where an asset stops being a quiet promise and becomes an offer. With a contract definition, the provider specifies under which policy rules an asset is negotiable. Only at this point does something emerge that can appear in a catalogue: not data, but an offer. The contract definition ties a selection of assets to one or more conditions (policies) and thereby says not who may enter, but when a negotiation is meaningful at all. Without this step, the catalogue remains empty, no matter how rich the underlying data is.

The code is set up as a management action you can run repeatedly without thinking. First, a contract definition is built with a fixed id, explicit references to both an access policy and a contract policy, and a simple selector that points to exactly one asset based on its id. Then we query the Provider Management API to see whether this definition already exists. If it does, nothing changes. If it does not, the offer is created.

My logging takes the time to explain what is happening. The policy used here is called “`always-true`”, but that name is semantic, not an evaluation. The data does not suddenly become freely accessible. Access still requires a successful contract negotiation and an explicit transfer process. “Always-true” only makes clear that there are no deliberate blockers in negotiation or transfer.

For experiment 1, this is deliberately cut down. There is exactly one asset, one selector, and one policy, used as both access policy and contract policy. There is no versioning, no variation in conditions, and no semantics beyond the absolute minimum.

### 3. Consumer: fetch catalog (Control Plane)

_Now the consumer goes out to see who is selling what at the market._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/03-fetch-catalog.ts
lang: ts
start: 1
end: 108
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/03-fetch-catalog.ts
  label: 03-fetch-catalog.ts
```

For the first time, the consumer looks outward. Not to retrieve data, but to discover what is being offered and under which conditions. Through a catalogue request, the consumer asks its own connector to — on its behalf — inquire with the provider which datasets and offers are available. What comes back is not a list of files, but an overview of negotiable proposals: datasets coupled to policies. This step is pure _discovery_. It marks the transition from internal preparation (steps 1 and 2) to interaction within the data space.

The implementation makes that explicit. Via its own Management API, the consumer sends a `CatalogRequest` that fixes the provider address and the protocol used. The edc-provider builds a response, which is received and interpreted by the edc-consumer. From that response, three things are distilled: the provider’s `participant-id`, the available dataset, and the corresponding offer policy. That offer is essential; without a policy there is nothing to negotiate. Because catalogue offers in this experimental practice can sometimes be incomplete, a normalisation step follows. Missing fields are explicitly filled so that the next step — submitting a `ContractRequest` — does not fail due to implicit assumptions in the management API. What happens here is therefore less “reading” than “preparing to respond”.

For experiment 1, the simplifications are intentionally rough. Exactly one (the first) dataset is chosen, without filtering or pagination. Missing participant ids get fixed defaults. The catalogue is not fully validated; only what is strictly required for negotiation is touched.

### 4. Consumer: negotiate contract (Control Plane)

_The consumer knows there is an interesting trader at the market and decides to show up at the city gate._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
lang: ts
start: 1
end: 119
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
  label: 04-negotiate-contract.ts
```

In EDC terms, this is the formal act of knocking. The consumer turns a catalogue offer into an explicit request to the provider: may I use this asset under the conditions you have published? This is not a technical data transfer, but a legal and semantic action. If successful, the negotiation results in a contract agreement that binds both connectors. Only from this point onward does a shared reality exist in which “access” has meaning within the data space.

The code makes this step tangible. Based on the previously fetched catalogue information, a `ContractRequest` is constructed in JSON-LD form, explicitly stating provider and consumer, the protocol in use, and the policy that functions as the offer. Because EDC is strict here, the offer is normalised again: missing fields such as _target_, _assigner_, and _assignee_ are explicitly set to avoid ambiguity. The request is then submitted via the Consumer Management API, after which the negotiation proceeds asynchronously. The code does not wait blindly; it polls deliberately until the negotiation reaches the `FINALIZED` state. At that point, the contract `agreementId` is extracted and stored as the legal foundation for everything that follows.

For experiment 1, this is stripped down. The negotiation uses a single fixed protocol, without alternatives or fallback. Status handling is binary: success or failure. There are no events, no retries, and no semantic error handling. Offer normalisation is a pragmatic intervention, not an ideal conditions model. The goal is not completeness, but visibility of the mechanism.

### 5. Consumer: start transfer (Control Plane)

We are now approaching the end of the metaphor’s shelf life…

_A small hatch opens in the gate through which the gatekeeper will soon hand over a key that allows the visitor to open the gate themselves._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/05-start-transfer.ts
lang: ts
start: 1
end: 103
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/05-start-transfer.ts
  label: 05-start-transfer.ts
```

An abstract agreement becomes tangible in this step. The contract from the previous step exists, but as long as no transfer process has been started, it remains a “paper” reality. Here, the consumer asks the provider to turn the agreed right into operational access. No data flows yet, but the infrastructure is prepared: the guards receive instructions. This is the transition from legal permission to technical possibility — a crucial link between negotiation and use.

The code makes this transition explicit and verifiable. Based on the previously obtained contract `agreementId`, a `TransferRequest` is built. It specifies which contract is in force, which protocol is used, and that this is an active pull by the consumer. The request is submitted via the Consumer Management API, after which both connectors orchestrate the transfer process together. The consumer does not wait blindly; it tracks status until the process reaches `STARTED`. That moment matters: the provider has accepted the transfer and prepared everything internally to grant access. The logging emphasises that this is not data traffic yet, but a prepared possibility.

For experiment 1, clear simplifications were made. Only a pull variant is used and only one fixed protocol is supported. The `TransferRequest` is deliberately not fully JSON-LD compliant, but adapted to the expectations of the EDC implementation used. The `STARTED` status is treated as sufficient; completion and error paths remain out of scope. The goal is insight, not completeness.

### 6. Consumer: fetch EDR (Control Plane)

_The key is handed over._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/06-fetch-edr.ts
lang: ts
start: 1
end: 109
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/06-fetch-edr.ts
  label: 06-fetch-edr.ts
```

At this point, the data space stops being abstract. The transfer has started, the conditions have been accepted, and now the EDR appears: the _Endpoint Data Reference_. It is a temporary right to use the existing gate. The EDR combines two things that strictly belong together: a data endpoint and an authorisation code (a token). Together they form the concrete translation — the operationalisation — of the contract and transfer into an executable action. Without an EDR, access remains a promise; with an EDR, it becomes actionable.

The code treats this as a patient moment of negotiation with its own connector. Via the Consumer Management API, the consumer repeatedly asks the provider whether a data address is already available for the given transfer process. Because the provider does not always issue this immediately, the code polls until an object appears that contains both an endpoint and an authorisation token. Once that combination is present, it is made explicit what has been received: a short-lived token, strictly linked to this contract and this transfer.

Because the experiment runs locally and not on a network, the endpoint returned by the provider is rewritten to a host address. This rewrite is purely practical; conceptually it remains the same gate guarded by the edc-provider. In earlier steps this distinction does not matter, because the consumer never calls a provider endpoint directly; it always does so via its EDC. Only once the EDR is issued do we leave the Control Plane and enter the Data Plane.

For experiment 1, the assumptions are simple. We assume exactly one EDR with a straightforward token model. Polling is coarse and time-bound, without nuance or error feedback. Endpoint rewriting is hardcoded and context dependent. The goal is not robustness, but to show where the key comes from and what exactly it opens.

### 7. Consumer: data access (Data Plane)

_Through the gate._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/07-data-access.ts
lang: ts
start: 1
end: 78
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/07-data-access.ts
  label: 07-data-access.ts
```

This is where everything comes together. The contract negotiation has been finalised, the transfer has started, and the EDR has been retrieved. Now the consumer actually accesses the protected data. This happens outside the EDC Management APIs, via a regular HTTP request to the provider’s public data endpoint. So this is not the `localhost:7070/hello` endpoint — that remains safely behind the provider’s public data endpoint.

The difference from a normal API call is not the protocol — we are now using plain HTTP instead of DSP — but the context: this access works only because a valid contract and an associated transfer process exist. This is where data space logic translates into actual bytes.

The code makes that transition explicit. Based on the previously obtained EDR, an HTTP `Authorization` header is constructed, either as a raw token value or as a Bearer token. Then a request is made to the provider’s public data endpoint. No EDC API is called anymore; technically, this call is no different from a standard `fetch`. The provider validates the token, links it to the correct contract, and retrieves the underlying data from `localhost:7070/hello` on behalf of the consumer. The response is checked for status and content, after which the body — if possible — is parsed as JSON. What comes back is the same data that was fetched directly in step 1, but now delivered through an explicit, enforceable agreement within a data space.

> Yay! Experiment 1 succeeded: we built a working data space transaction!
> For experiment 1, this step is deliberately minimal. The root endpoint is always called, without distinguishing assets or representations. Authentication is simplified to a single header variant and there is no retry or error strategy. Content negotiation is entirely absent. The goal is not to build a robust client, but to show where the data space ends and the regular web begins again.

## What can break in experiment 1?

First: this is an experiment, not production code. So yes, it can break — and I certainly will not have seen everything on my Mac. The biggest issue is probably race conditions, which I kept running into during the experiment. I had to make a few adjustments to address them in at least two places: (1) containers start asynchronously, and sometimes the experiment wanted to begin before all required APIs were available. In the `start-containers.sh` script — which performs initialisation — there are checks that keep waiting and polling until everything is up.

```p322:codefile
path: lab/dataspace-experiments/exp-01/scripts/start-containers.sh
lang: sh
start: 91
end: 104
lines: 15
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/scripts/start-containers.sh
  label: start-containers.sh
```

In addition, (2) the experiment itself is the interaction between two EDC servers via the DSP data space protocol. That communication is, of course, asynchronous too, and sometimes the two must wait for each other.

For example, in step 4 during contract negotiation:

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
lang: ts
start: 85
end: 92
lines: 8
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
  label: 04-negotiate-contract.ts
```

I added the `waitForState` function, which in this case waits 60 seconds until a timeout. That is already quite a lot, but if, when repeating this experiment, you notice communication issues between consumer and provider, one possible remedy is simply to wait longer.

And in any case: if you run into problems, or just have questions and comments, do not hesitate to contact me — and we can look at it together.

## What next?

I put this experiment together fairly quickly, and it left me wanting more. In the next experiment, I made the code from experiment 1 more robust and structured it for what follows. I also introduce a second consumer. That does not differ much from experiment 1, but it sets the stage for experiment 3, where I will explore what happens if consumer-2 tries to hijack consumer-1’s contract negotiation, the start of the transfer, or the EDR key.

In experiments 4 and 5 I will really dig into the policy conditions a provider can attach to an offer, and how those can be evaluated automatically. Right now I use `Always-true`, and that is obviously not a real condition.

This is what I have lined up.

After that, I have a list of follow-up steps I want to explore — but please do send me a message if you have ideas for other data space experiments.

The experiments will not necessarily appear one right after the other, so keep following this blog for updates!
