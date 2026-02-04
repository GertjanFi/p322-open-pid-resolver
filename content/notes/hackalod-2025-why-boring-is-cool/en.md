---
pid: p322:blog:01J6E8F3P8M9R2H7V4KQ1CZWX
title: "The Day After the HackaLOD: Why Solid is the Foundation of Cool"
date: 2025-11-03T00:00:00.000Z
authorKey: gertjan
image: /assets/images/knowledge/hackalod-2025.jpg
excerpt: Building a complete, DERA-compliant data structure in 24 hours? During HackaLOD 2025, we proved it could be done.
category: Backgrounds
tagsLocal:
  - nde
  - Hackalod
---

It’s the day after. Yesterday and the day before, I took part for the first time in **#HackaLOD2025** by the Dutch Digital Heritage Network.  
After more than twenty years in the heritage sector, it was about time.  
And it was fantastic.

The Dutch Open Air Museum had given us the exceptional opportunity to spend the night on-site.  
**The Castle Farm** – a beautiful 17th-century building with more cables than cows – became a refuge for people with laptops, coffee/tea, and an enormous amount of enthusiasm.  
The atmosphere? Kindred nerds who just want to build something beautiful.

## Team Cool vs. Team Boring

Under the inspiring leadership of **Erwin Folmer** and **Wouter Beek**, we formed **Team Harnem** in the weeks before the event.  
We turned out to be a bit too large for the HackaLOD organisation — so we split into two subteams with fitting names: _Team Cool_ and _Team Boring_.

Team Cool did the visible things: a game, a geocaching podcast — in short, something with flair.  
Team Boring chose the quiet engine under the hood: data pipelines, robust infrastructure, sustainable assurance.  
Things you don’t win prizes for — but without them, nothing works at all.

Naturally, I was on Team Boring.  
Because **Boring makes Cool possible**.

## Who Won

Team Cool won the jury prize and eternal fame.

Team Boring went home with the feeling that we had helped to put the proverbial man on the moon.  
At least, that’s what you tell yourself afterward to explain why you chose the non-winning team ;)

No one cheated — and no, there weren’t secretly two teams working on the winning project.  
We did, however, share the same source dataset: a terrible Excel sheet that may one day become the subject of another boring blog — about how I turned it into workable triples.

We exposed the linked data via an API, which Team Cool could access.  
The ideas and the cool implementation were entirely theirs.

## What We Built

Team Boring (which soon renamed itself _Team Reliable_, and later _Team Solidly Reliable_) took on the challenge of building an entire NDE infrastructure — from raw source data to service platform — in just 24 hours, using only existing software.

The pipeline started with that infamous Excel sheet: cleaned up and converted to linked data with the new product Jauco Noordzij and I are developing.  
The triples then flowed into a triplestore — of course TriplyDB, since Wouter was on the team, though any linked database would have worked in principle.

We could have registered the dataset in the NDE Dataset Register and requested ARKs for persistent identification, but a hackathon team isn’t exactly a sustainable organisational form.

Next, we built a service that retrieves and presents the linked data in a user-friendly way, with an ElasticSearch cache underneath (for the nerds: yes, of course there’s a cache underneath).

For the interface, we reused the open-source code from the Datahub Colonial Collections project.  
We rebranded it as **datahub.harnem.nl** — with all the familiar features: open search, faceted filtering, multilingual support, and login via Clerk.

Users can leave comments, corrections, or extra context.  
We store that feedback as **nanopublications** — linked data that lives outside the hub.  
This keeps the cache clean and the infrastructure pure.  
Because a cache with enrichments is no longer a cache — that’s aggregation.  
And as some of you know, I have a deep aversion to that.

## Fully DERA-Compliant

And that’s the whole pipeline.  
The entire **Dutch Digital Heritage Network vision**.  
Completely **DERA-compliant**.  
In 24 hours.

For all the big organisations in the sector that haven’t managed that yet: you’re welcome to call 😁

**Boring is the new Cool**

Was it exciting? Not like a game or a podcast.  
But it _works_. And that, in the end, is the most beautiful result of all.

So kudos to **Team Cool** — Fabian Frank, Sander Maijers, Eva Koenders, Alet L., Walter Bolwerk, and Erwin Folmer — for the visible magic.  
And hats off to **Team Solidly Reliable** for the engine that runs — quietly but steadfastly.

⸻

## Epilogue

Innovation doesn’t begin with glitter, but with structure.  
Boring makes Cool possible.  
And whoever understands that, builds the future of digital heritage.
