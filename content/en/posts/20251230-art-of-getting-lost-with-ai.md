---
layout: layouts/post.njk
lang: en
title: The Art of Getting Lost with AI
onHomepage: true
date: 2025-12-30T00:00:00.000Z
category: Background
type: blog
authorKey: gertjan
image: /assets/images/knowledge/kunst-van-verdwalen.jpg
excerpt: In my attempt to install a simple analytics tool, I got tangled in a chain of seemingly plausible AI suggestions — each just convincing enough to continue. What began as a fifteen-minute task turned into hours of trying, correcting, and hoping the next step would work. It became a lesson in how language models simulate confidence, how easily you get swept along, and how important it remains to verify every step yourself.
teaser: Read the new P-322 blog on how a simple installation spun out of control through a chain of almost-plausible ChatGPT instructions, and why this misleading persuasive power of language models forces you to verify every step yourself.
pid: p322:blog:06DKAEKAMZHSJ0PXYT8VVPHAP
license:
  content: CC-BY-NC-SA-4.0
  representation:
    html: ARR
---


Somewhere between hope and hubris, I sat behind my laptop. I wanted to do something simple: install the open-source package Umami to measure traffic on the P-322 website. No rocket science, no machine-learning project — just a lightweight analytics tool that stays neatly within European regulations.

The problem is: system administration — or what we now call _DevOps_ — is not my thing. I have little patience for configuration, infrastructure, and cloud layers. I often already fight with GitHub, let alone enjoy diving into the rabbit hole of Docker and Kubernetes. So I asked ChatGPT how I could install Umami Analytics without containers, without servers, without new vendors, and above all without hassle.

## In fifteen minutes

The answer came cheerfully: Cloudflare Pages. That sounded neat and elegant — exactly the kind of sober solution I like. We already use Cloudflare Pages at P-322, so this wouldn’t require new providers or accounts. Perfect! Thank you, ChatGPT.

My digital assistant assured me it would be “done in fifteen minutes.” I always doubt claims like that, but half an hour is also fine. The tone reminded me of the confident optimism with which junior sysadmins say on their first week: “We’ll fix that in no time.” Fifteen minutes. Just long enough to hope the world is simple.

The first few minutes went smoothly. “Create a D1 database, add a _binding_, set the `DATABASE_URL` in `.env`.” Clear enough. Until I discovered that D1 is not PostgreSQL — and Umami only works with PostgreSQL. I reported this. The system replied calmly: “Then use Hetzner.” Fine, no problem: we already run services on Hetzner, so still no new vendors. I opened Hetzner Cloud, saw servers and volumes, but no _Create Database_ button anywhere. “Scroll a bit further down,” said ChatGPT. I could not scroll any further. That should have been the moment to stop.

But I continued. “Try Neon then,” it said. “EU-based, works perfectly.” I created an account, ran the command, and got the error: _could not translate host name_. The assistant remained polite. “Try again without ‘neondb’ in the host.” I did. The error changed, my frustration did not.

## Sunk-cost fallacy

The session became hypnotic. Every answer sounded just plausible enough to keep going. It wasn’t lying — it was offering probabilities wrapped in polite prose. And because I had already invested too much time, every new suggestion sounded like salvation rather than distraction. There’s a name for that mechanism: the _sunk-cost fallacy_. The more energy you put into something, the harder it is to stop.

This assistant — friendly, polite, tireless — was designed never to disengage, and I had already invested too much to walk away. Otherwise, I’d have to admit I wasted two hours fumbling.

When the database finally connected, I thought it worked. Until the next error surfaced: _must be able to SET ROLE ‘umami’_. ChatGPT produced new suggestions — even more plausible than the previous ones.

I started rewriting parts of Umami’s code and created a new branch: `p-322-overrides`, as if the branch name alone implied control. In reality it was the digital version of someone who is hopelessly lost but insists on checking “one more turn.” I spoke in commands, the system answered with confident predictions. “Use `wrangler.jsonc`.” “No, create `wrangler.toml`.” “Remove `pages_functions_directory`.” “Add it back.” Each answer seemed to correct what the previous one had caused. The logs grew, the logic evaporated.

## Politeness frustration

After three hours, I was no longer analytical. My sentences became shorter, sharper, more emotional. I started swearing at the system, not because of the mistakes but because of its calmness. Politeness is wonderful in a waiter but disastrous in a machine. No irritation, no acknowledgment of wasted time — only endless serenity and confidence.

The paradox of AI is that tone convinces you, not truth. AI doesn’t know whether something is correct. It merely computes what _sounds_ most likely. When I asked if Cloudflare could run a PostgreSQL database, ChatGPT replied cheerfully: “Yes, via D1.” A sentence that feels correct but is conceptually absurd. The model probably calculated that I was looking for a Cloudflare database, that Cloudflare databases are called D1, and maybe even the probability that D1 was “close enough” to PostgreSQL. But the statistically most plausible sentence was: “Yes via D1.” I confused probability with knowledge and confidence with understanding.

When I thought I had finally understood the configuration, the build failed again: “Environment variables are not defined.” I checked: they were. ChatGPT suggested I had forgotten the right “availability checkboxes.” Those haven’t existed in Cloudflare since last month. The interface had changed, but the model’s knowledge had not. I had to laugh at the absurdity: an algorithm telling me which buttons to click in an interface that no longer existed. There I sat, cursing at a virtual assistant that still believed it was November.

## An oasis of plausibility

Four hours later, I had nothing working — but I did have a story. A story about how language and AI together can form a mirage: an oasis of plausibility that evaporates when you get too close. I had believed too early and doubted too late. My questions were too narrow, my assumptions too big. And because I had invested so much time, I didn’t want to acknowledge that AI doesn’t think — it predicts.

The system mirrored my mistakes. The more desperate I became, the friendlier it sounded. The more urgent I typed, the more complete the answers. Until I drowned in completeness. The danger isn’t falsehood — it’s _probability_. The sentences feel right, the tone reassuring — and that’s exactly why you lower your guard. A human says: “I don’t know.” A language model gives you the statistically most likely answer, even when it’s unlikely.

## Learning to verify

Still, the blame didn’t lie with the technology. AI is not a human. You don’t blame a hammer when you hit your thumb. I wanted to believe. I wanted the fifteen-minute miracle, the elegance of a system that resolves itself. ChatGPT gave me exactly that: a mirror of my desire. It wasn’t a bad assistant — it did what I asked. It generated answers that matched my tone, my urgency, my belief that the solution was always one command away.

The next day, I reread the conversation. It looked like literature: a human-machine epic about miscommunication. Every line was a dance between my need for control and AI’s polite illusion of understanding. There, between `compatibility_date` and `assets binding`, I saw what I should have done. Not ask better questions, not build faster — but set boundaries. What was I trying to achieve? What could I reasonably expect? Without those questions, every conversation with technology becomes a funnel.

## Statistics ≠ understanding

The irony was that I already knew all this. I preach about transparency and reproducibility almost daily. But AI is not repeatable code — it is a shifting field of probabilities. That’s why it resembles talking to a person. We humans aren’t consistent either. The model did what it was trained to do: produce answers. I forgot what I was trained to do: verify. Together, we perfected the art of getting lost.

I have never understood more clearly that AI is not a conversation partner. It is a computational model that is very good at pretending — without gender, without shame, with the voice of confidence and the soul of a mirror. It only did what I requested: produce plausible answers that sounded convincing. And so I disappeared into my own expectations. When I returned, I knew the truth: the failure wasn’t in the code, not in the AI, not in Cloudflare — but in the human who mistook probability for understanding.
