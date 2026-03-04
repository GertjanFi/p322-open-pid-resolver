---
title: "Heritage and data spaces: experiments 2 & 3"
date: "2026-01-28T00:00:00+00:00"
excerpt: "Data spaces sound abstract until you take them apart and look at what actually happens when multiple parties try to access data at the same time. In this blog I walk through experiments 2 and 3, where a single provider is approached by multiple consumers — including a malicious one. What happens to contracts, keys, and access when the architecture is put under pressure? And where does responsibility really lie: with the provider, or with the party holding the key?<br/><br/>Using working code, I show why roles, transactions, and infrastructure layers matter, and what a data space does — and explicitly does not — promise when it comes to security. No policy talk, but concrete technical observations from experiments that are allowed to break."
teaser: "What happens when multiple consumers request data from a data space at the same time? And what if one of them misbehaves? In this blog I test data spaces not on paper, but through working experiments. You’ll see how transactions are structured, where responsibility lies, and what happens when a key falls into the wrong hands. No abstract promises, but concrete observations from code that is allowed to break."
---

In digital heritage, you occasionally hear the term _data space_. But what does it actually mean? And more importantly: what can it really do? Is it just a new term for policymakers? Or is there concrete technology underneath it? Out of curiosity, I decided to investigate.

[You can find the first experiments in the P-322 GitHub data space-experiments repository](https://github.com/p-322/dataspace-experiments).

In [the first blog](note:heritage-dataspace-experiment) I explained what a data space is, which problem it tries to solve, and I gave an overview of the concepts, terms, and roles. That post also contains a working experimental data space transaction.

## On the road to testable access conditions

My personal interest lies in designing access policies in an open data environment. It only really makes sense to start testing those once multiple consumers begin approaching a provider with interest in an offer.

That is why, in this experiment, I want to explore how multiple consumers relate to one another. To do so, the code from experiment 1 needs to be reworked. At the moment, it is little more than a procedural script that executes a fixed sequence of steps for a single provider and a single consumer. It needs to become more generic and reusable, so that adding new ideas later becomes easier.

## Experiment 2

The goal is to support multiple data space transactions. Different consumers request data from what is, for now, a single provider. Of course, after completing the first transaction, we could configure the steps from experiment 1 again for a second consumer and run them sequentially — but that does not scale. Tomorrow, it might be a third or fourth user.

That is why I split the steps from experiment 1 into two parts. In steps 1 and 2, I initialize the provider’s asset and offer. In steps 3 through 7, the consumer and provider go through the contract negotiation process and the data transfer. Steps 1 and 2 happen only once; steps 3–7 need to be repeated every time.

### Consumer – Provider

We therefore shift the code from a process-oriented perspective to a role-oriented one. In the provider role, you should be able to register assets and create offers. As a consumer, you should be able to query the catalog, start a contract negotiation, initiate the transfer, retrieve an EDR, and pull in the data.

That leads to two objects: `Provider` and `Consumer`, in which the different transaction steps reside. Steps 1 and 2 belong to the provider as a role, not to an interaction. An asset and an offer exist independently of whoever comes along to inspect them. They are a promise to the world — or at least to the data space. You create them once, and after that they are ready. That makes the provider the logical home for these steps: they describe what the provider _is_ and _offers_, not what happens at a specific moment in time.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/provider.ts
lang: ts
start: 1
end: 101
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/provider.ts
  label: provider.ts
```

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/consumer.ts
lang: ts
start: 1
end: 25
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/consumer.ts
  label: consumer.ts
```

### Transaction

Steps 3 through 7 are of a different nature. These are not properties, but events. Together, they form a temporary process between consumer and provider. Negotiation takes place, decisions are made, access is granted or denied, and eventually data is transferred.

That process has a life of its own: it has a beginning, a progression, a possible failure, and an end. It is also repeatable. A consumer might later respond to a different offer from the same provider, or start a transaction with an entirely new party.

If you keep embedding all of this directly into the consumer, you need to track state with extreme care. The risk that a consumer accidentally asks provider A for an offer from provider B is very real — and undesirable.

In addition, we can already see that a consumer may want to run multiple transactions in parallel, or retry a failed one later. That is simply not possible if all steps live inside the consumer.

That is why steps 3 through 7 are placed in an `EdcTransaction` object. This gives the transaction itself some weight. It becomes something you can follow, log, repeat, or compare. The consumer initiates transactions, but the transactions themselves carry their own story. And that is exactly the story I want to understand, test, and question.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/edcTransaction.ts
lang: ts
start: 1
end: 355
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/edcTransaction.ts
  label: edcTransaction.ts
```

Note: with `EdcTransaction` we are already anticipating future needs. In experiment 2, each consumer still has only a single transaction, and I could technically have kept those steps — just like with the provider — inside the consumer.

### ManagementClient

In a data space, not everything is a conversation. Some things are simply administration. Registering assets, creating offers, tracking contracts, monitoring transfers — all of that happens via the participants’ management interfaces. These are not public conversations between parties, but internal actions through which an organization controls its own data space role. The EDC Management API is exactly that: the control panel of a participant.

As we saw in experiment 1, there is both a Consumer Management API and a Provider Management API.

The `EdcManagementClient` object is my first, minimal translation of that control panel into code. No clever logic, no policy decisions — just a reliable hand that handles API requests, reads data, renders errors intelligible, and occasionally waits patiently for everything to catch up.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/edcManagementClient.ts
lang: ts
start: 1
end: 81
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/edcManagementClient.ts
  label: edcManagementClient.ts
```

What matters most is what this client does _not_ do. It does not negotiate, does not choose offers, and does not make decisions. That is the work of consumers, providers, and transactions. The management client merely ensures that those roles can talk to their own EDC infrastructure in a consistent way. In that sense, it is an adapter: small, boring, and therefore essential.

### The result

Although we have restructured all the code, experiment 2 does not actually do much more than experiment 1. What it provides is a sturdier foundation for the next steps.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/experiment.ts
lang: ts
start: 1
end: 116
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/experiment.ts
  label: exp-02/src/experiment.ts
```

After initialization — starting all containers — we configure the experiment by creating the provider and the consumers. The provider starts first and creates an asset and an offer. Then we run a loop over all consumers. For each consumer, we create a data space transaction and execute it.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/experiment.ts
lang: ts
start: 93
end: 105
lines: 12
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/experiment.ts
  label: exp-02/src/experiment.ts
```

Twice (for consumer-1 and consumer-2), the source data appears:

```p322:jsonblock
start: 1
value: |
  {
    "message": "Hello, Data space",
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

In both transactions, however, the `agreementId` and the EDR token differ. Each consumer has completed its own contract negotiation, received access approval from the provider, and been issued a unique key.

Not very exciting — but the experiment succeeded. Hooray.

## Experiment 3

After a restructuring like the one in experiment 2, the most interesting question you can ask is: how do we break this?

Although I am eager to start working on provider-side access conditions, I was curious enough about the behavior of the EDC itself to add a small third experiment. What happens if a malicious consumer tries to use the `agreementId` or EDR token of another consumer?

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 1
end: 247
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

For this experiment, we introduce consumer-3, who plays the role of the villain. Thanks to the refactored code, this is now pleasantly easy to do.

### Can a villain retrieve another consumer’s key from the provider?

The first question is what happens when villain/consumer-3 asks the provider for the EDR token of consumer-2 using that consumer’s `agreementId`. This is step 6 in these experiments. Ideally, the provider should not respond, because the agreement and token are tied to a different consumer identity.

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 150
end: 166
lines: 16
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

The answer is:

```p322:jsonblock
start: 1
value: |
  [
    {
      "message": "Object of type EndpointDataReferenceEntry with ID=019bb7a9-c6cf-7806-ae4b-4bcfbdb3e94c was not found",
      "type": "ObjectNotFound",
      "path": null,
      "invalidValue": null
    }
  ]
```

Good. That does not work. The provider simply reports that no keys were found.

### Can a villain convince the provider to create a key using someone else’s agreement?

Next, I want to know whether our villain can intervene earlier and convince the provider to start a transfer using an `agreementId`, thereby creating an EDR. This is step 5 in the experiments.

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 167
end: 196
lines: 29
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

The provider responds as follows:

```p322:jsonblock
start: 1
value: |
  [
    {
      "message": "Contract agreement with id 019bb7a9-c1f6-7faf-951e-b270df39ec10 not found",
      "type": "InvalidRequest",
      "path": null,
      "invalidValue": null
    }
  ]
```

Such requests are blocked during the negotiation process. For consumer-3, the `agreementId` does not exist — exactly as intended.

### Can a villain retrieve data using another consumer’s key?

The final question may be the most interesting one. Suppose our villain has intercepted the network traffic between the provider and consumer-2 and obtained the EDR token. What happens in step 7 of these experiments, when the data is actually retrieved?

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 197
end: 237
lines: 40
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

In experiment 1, I explained that a transaction between consumer and provider runs across two layers. The Control Plane handles the contract negotiation and issues a key to the consumer. The Data Plane then deals exclusively with transporting the information. If a valid key exists, the Data Plane gets to work and no longer performs checks.

I therefore suspected that the transport would succeed, and that the villain would gain access to the data.

```p322:jsonblock
start: 1
value: |
  {
    "message": "Hello, Data space",
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

Indeed, that is what happens. The key is valid, the Data Plane no longer checks, and if consumer-3 has the EDR token, access is granted.

Is that strange? Well… no. Not really. It is the responsibility of consumer-2 to keep the key safe — not the provider’s. This is also why EDR tokens typically have a limited lifetime.

## Where are we now?

In experiment 1, I tested the process of a data space transaction. Those steps have now landed in a robust structure and are ready for further experimentation.

In the next experiments, I will finally look at the access conditions that a provider can attach to an offer, and how those conditions might be evaluated automatically. I also have a list of follow-up ideas, but feel free to send me a message if you have suggestions for other data space experiments.

The experiments will not necessarily appear in quick succession, so keep following this blog for updates.
