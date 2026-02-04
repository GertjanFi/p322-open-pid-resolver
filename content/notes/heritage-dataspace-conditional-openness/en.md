---
pid: p322:blog:06E095M5FA08MZ664KEXDKT7W
title: "Is a heritage dataspace still an open data infrastructure?"
date: 2026-02-04T00:00:00.000Z
authorKey: gertjan
image: /assets/images/knowledge/afsluitdijk-3.jpg
excerpt: "Open data sounds simple, but in practice it rarely is. Anyone who shares heritage data inevitably runs into legal limits, technical constraints, ethical considerations, and geopolitical reality. Ahead of publishing my fourth dataspace experiment next week, this blog pauses on a more fundamental question: what does it really mean to set access conditions within an infrastructure that calls itself “open data”? When is “open” no longer unconditional? And how do you translate policy, trust, and responsibility into technology? This post explores where openness starts to chafe, where control becomes unavoidable, and why that is exactly where dataspaces show their value."
teaser: "What happens when “open” is no longer unconditional? This blog explores where openness starts to chafe—and what that means for heritage data, policy, and dataspaces."
category: Backgrounds
tagsLocal:
  - dataspaces
  - open-data
  - governance
---

Open data sounds like a promise. But more and more it feels like a risk. Not because institutions want to be less open, but because the world in which that data circulates has fundamentally changed. Legal claims, privacy, geopolitics, AI training, commercial extraction, hybrid threats: these are no longer edge cases, but daily reality for anyone responsible for data. Heritage data included.

So the uncomfortable question is no longer: how do we make more data open?  
The question is: how do we keep data open without being naïve about abuse, power relations, and responsibility?

In a world where openness is no longer innocent, access policy is not a technical side issue but a governance question at the core. And that is exactly where the idea of a heritage dataspace rubs against classic open data thinking.

## Open is not unconditional

In this series on dataspaces I showed in [the first blog](/nl/posts/20260121-erfgoed-en-de-dataspace-een-experiment) what a dataspace is and which problem it tries to solve. In [the second blog](/nl/posts/20260128-erfgoed-en-de-dataspace-experiment-2-en-3) I expanded that setup with multiple parties and concrete transactions.

Before moving on to new experiments, I want to ask a more fundamental question: what do access conditions mean for an infrastructure that calls itself “open data”? What happens to openness once you take legal, ethical, technical, and geopolitical constraints seriously?

[You can find the earlier experiments in the P-322 GitHub dataspace-experiments repository](https://github.com/p-322/dataspace-experiments).

## How open is “open”?

I framed that tension in an earlier blog like this:

> More control over access to data. With as little erosion as possible of the open character of heritage and society.  
> That is a real challenge.
>
> Maybe a dataspace is therefore about making open infrastructure resilient.

It may feel unnatural to talk about access policy in an open ecosystem. Yet it is something we have been doing for a long time. We publish a lot under conditions and still call it “open”. We write text, produce audio and video, and attach a Creative Commons licence to it; and in software we support open source licences in the public sector.

All licences set conditions.

Even with the most open Creative Commons licence—[CC0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed.nl)—there remain (under Dutch law) conditions that, as a creator, you cannot waive. These are moral rights you always have as a person. For example: the right to attribution, protection against serious mutilation of the work, misleading attribution, or harm to your honour and reputation. With CC0 you are essentially promising that you will not exercise these “moral rights”.

But if it comes down to it and someone abuses your work, you can still invoke those rights.

Open has never been unconditional.

## Access restrictions

If open has never been unconditional, something practical follows: data holders must make choices about access. Not as an exception, but as a structural part of their responsibilities.

Those choices are not only about legal duties or technical necessity. They also touch funding, scalability, ethics, reputation, social responsibility and, yes, geopolitical reality. In other words: access conditions are rarely an ideological statement against openness. They are usually an attempt to keep openness workable.

In practice you see institutions impose conditions on access for various reasons—often several at once. Below I work through the main ones. Not to justify or condemn them, but to make visible the governance and technical force field behind “open data”.

### No data without payment

Data holders have different reasons to implement an access policy. The most obvious is financial exploitation of data. An archive that commissions photographs of documents can agree with the photographer that the right to sell those images lies with them. Taking photographs costs money. For managers, a new revenue stream can be attractive because it reduces dependence on subsidies.

Yet in our sector we do this relatively little. Not only because it requires organisation—because that can be arranged—but also because it does not seem to fit the culture. For many people, open data and infrastructure mean “without payment”.

I do not have a fixed opinion on this, but I do wonder whether it is a conscious choice.

In the Netherlands we are perfectly used to paying for a museum or theatre visit. We also pay tuition fees to study at a university. But an archive or library, in our intuition, should often be free.

I understand these are not comparable in a simple way—but we are used to paying for public services. Where do data and infrastructure sit on that spectrum?

Elsewhere in the (semi-)public sector you can find organisations that operate the data and infrastructure entrusted to them in order to cover part of their costs: the [Kadaster](https://www.kadaster.nl), the [Dutch Chamber of Commerce](https://www.kvk.nl), [Logius](https://www.logius.nl), and [SURF](https://www.surf.nl) are examples.

You can certainly think of arguments for doing something similar in heritage. Delivering stable data infrastructure that third parties rely on costs money—money that has to be paid somewhere. Those costs now tend to remain with the data holder.

A dataspace allows you to make that choice.

### No data because legally it is not (always) allowed

Even if “open” means “free”, it still cannot mean unconditional. There is data that we legally may not share with everyone.

There are restrictions in the **Dutch Archives Act** that mean information cannot (yet) be published without robust access policy. For users this currently means a physical visit to the archive; and a complex path for scholars and journalists who want to do research digitally.

Another restriction applies to data protected by **copyright law**. When I was a director at the KNAW, I supported a group of researchers who used language technology to study modern Dutch literature. Those books are under copyright. You cannot simply share them openly.

Finally, the elephant we all think of immediately: the **General Data Protection Regulation (GDPR)**. If personal data is (or may be) included, the data cannot simply be made openly available.

Few people will have missed the controversy around the [Central Archive of Special Jurisdiction (CABR)](https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/centraal-archief-bijzondere-rechtspleging-cabr) held at the National Archives in The Hague. CABR contains the case files of people investigated after the Second World War on suspicion of collaboration.

Not all of those files concern people who were prosecuted, and not everyone prosecuted was convicted. The files contain a great deal of personal information—not only about suspects, but also about family, neighbours, friends, witnesses, and others. The archive is crucial for dealing with the past, for researchers and for descendants alike.

But it cannot be ruled out that the files mention young children who may still be alive today.

The [Dutch Data Protection Authority issued a formal warning](https://www.autoriteitpersoonsgegevens.nl/documenten/formele-waarschuwing-nationaal-archief) to the minister and the National Archives to halt the planned online publication. As a result, the archive had to take the long route: the caretaker minister of Education, Culture and Science is now trying to [push an amendment to the Archives Act through parliament](https://nos.nl/artikel/2599380-kabinet-oorlogsarchief-zo-snel-mogelijk-digitaal-te-raadplegen) so that publication can still go ahead.

You do not want to have to arrange that for every collection.

None of this means the data may not be available at all. The law simply sets strict conditions. And that often means it cannot be done with existing data infrastructure.

A dataspace allows you to translate strict access policy into technology.

An archive could make closed data available to journalists under conditions through a dataspace.  
A publisher or library could share copyrighted works with selected researchers, for example.  
And the physical access policy of the CABR reading room at the National Archives could be translated into digital policy.

### No data because technically it cannot cope

Then there are technical conditions. It is obvious, but: the capacity of data infrastructure is determined by available budget. Not only do CPU, memory and storage cost money; acquiring the expertise to build scalable infrastructure is also expensive.

The problem with data infrastructure is that it is rarely used continuously. But when multiple users hit it at the same time, load can spike quickly.

A common complaint in the sector is the “unreliability of SPARQL”.

This is that problem: SPARQL endpoints are not inherently unreliable. But multiple users—who may not write efficient queries—and sending those queries to your server can create such a heavy load that the endpoint goes down.

SPARQL may be somewhat more sensitive here, but the issue applies to infrastructure in general.

It is a devilish dilemma. What do you choose? Heavy machinery to handle multiple inefficient requests simultaneously? That costs money. While that capacity may sit idle most of the day. Or light, cheap servers that fall over as soon as data is requested?

I am exaggerating, but this is the core of the problem.

And yes, you can build infrastructure that flexes capacity when needed and shuts down when there is no demand—but that mainly dampens the impact of the choice. You build in more margin. We call that scalable infrastructure, and it is not free. It requires serious IT expertise, and you pay for that too.

A dataspace allows you to manage access to open servers.

You can implement flexible policy by setting up a queue, for example. A user may receive a key, but it is only valid for a time window. The request must be sent within that window, and the server has planned capacity to process it.

Or you can configure your dataspace connector so that the data systems of the data holder work through the queue at the available capacity. Once a request has been processed, the system contacts the user so they can retrieve the data.

These mechanisms are not a default setting of a dataspace, but they align closely with the transaction and contract model on which dataspaces are based. They require a conscious architecture choice, not a deviation from the principle.

### No data because we want to do the “right thing”

In earlier blogs I have discussed the ethical and moral aspects associated with sharing heritage data.

We quickly think of images of victims of war violence, persecution, or natural disasters. Or museum objects I encountered in the Colonial Collections project that contain human remains.

But what do you do with photos of objects from other cultures that, for religious reasons, should not be shown?  
What if that restriction applies only to women?  
Or only to pregnant women?  
Where do you draw the line?

Different data holders make different choices here. And we should keep it that way. Some will favour radically open data policy and place responsibility with the user. Others choose to make certain data available only under conditions.

A dataspace does not make the choice so black-and-white: openly available or completely inaccessible. It enables each data holder to formulate their own access policy.

In a dataspace, a data holder could even choose to give everyone access, but only after accepting a “warning”. That is comparable to what news broadcasters do with certain videos: “Warning—these images may be disturbing”.

Consuming systems can anticipate such warnings and decide how to present them to users.

### No data—for now: the data embargo

In academia you often hear: “Of course my data is open, but only after my research has been published.”

The problem is that a dataset is often not tied to a single publication. Some datasets sustain an entire scientific career, or underpin the work of a research group whose (financial) survival depends on it.

In short: a data embargo exists.

But an embargo does not automatically mean closed data. By definition, an embargo is temporary and includes a planned opening. But yes: thirty years is also temporary.

You also cannot simply say this conflicts with the scientific FAIR principles (_Findable_, _Accessible_, _Interoperable_, _Reusable_). FAIR does not say much about openness. FAIR is about good technical stewardship of data.

For openness, people therefore often point—next to FAIR—to Open Science policy as formulated in European research funding programmes such as Horizon Europe.

> **What is open science?** Open science is an approach to research based on open cooperative work that emphasizes the sharing of knowledge, results and tools as early and widely as possible. It is mandatory under Horizon Europe, and it operates on the principle of being ‘as open as possible, as closed as necessary’.
>
> — European Commission, Open Science policy ([link](https://rea.ec.europa.eu/open-science_en))

So Open Science is not the same as unconditional openness either.

In a dataspace, universities and heritage partners can translate their own data policy into technical access conditions that make it possible to exchange embargoed data.

### No data because we say so (the middle finger to big tech)

Managers and policymakers usually have few objections to the principle of open data.

Of course you have to weigh costs, technology, compliance, ethics, and embargoes—but those are frameworks within which data is open.

But sometimes the reasons become irrational as to why we want data to be open, but not **completely** open.

What George Orwell wrote about animals—_“All animals are equal, but some animals are more equal than others”_—applies to users as well. Not all users are equal.

**No problem:** a domestic SME that builds collection software and wants access to your institution’s data.  
**No problem:** a large company that, under a public framework agreement, uses your data to build a heritage data service platform.  
**No problem:** a multinational that trains specialised scanning software on it.

**But over my dead body:** a big tech giant with annual revenue roughly comparable to a mid-sized European economy coming to train AI.

It is an honest sentiment I have heard in many policy rooms in which I have been able to sit as an adviser over the past two years. It feels unprofessional—and at the same time completely understandable. And that is fine. Emotion belongs in the room, too. Normally you try to move from observations to policy. With AI, the discussion was often: we simply do not want this, and how do we translate that into a rational decision that is also workable?

Now I think: with a dataspace you could solve it. You set testable conditions on the data transaction that disrupt this kind of activity.

### No data because we are not friends (anymore)

The world is shifting fast. I am writing this blog on 26 January 2026. Last week we were focused on threats directed at Greenland. A week earlier there was a one-sided “peace framework” (I hesitate to call it an agreement) for Ukraine, and the week before that we watched Venezuela with open mouths. We have stopped talking about Gaza. And by the time this text is published in February, we will probably be two geopolitical crises further on.

It is time to stand on our own European feet. It is time for the EU to be a bloc of real significance in a world of great powers.

We still have to actually do that.

Dataspaces may play their biggest role here. A transaction in a dataspace is not modelled on a contract negotiation within a common market by accident. Access to that market is Europe’s greatest strategic asset. You could see dataspaces as the build-out of a European digital market. It is no longer only the free movement of people, goods and services, but also the free movement of data—including scientific, public, and heritage data.

That data space must be governed and protected against influences from within and from outside. A dataspace makes our data resilient.

I have spoken before about the relationship between the Netherlands and former colonies such as Indonesia and Suriname. The restitution of heritage objects to those countries is not only a moral obligation; it is also an excellent way to strengthen relationships and build closer (trade) ties.

But with fabricated claims and misinformation about colonial objects, those relationships can be damaged easily, or unrest can be caused within Dutch society. That is a textbook example of hybrid warfare—and one our sector is not prepared for at all.

It is not hard to imagine who would benefit.

This does not only apply to colonial heritage. I can imagine similar threats around data from the Second World War, the CABR, Jewish heritage, Islamic heritage, and Dutch folk culture. There are actors who benefit from polarisation and love to inflame the debate around Black Pete, the removal of statues, or any other discussion about identity.

With a dataspace you build a wall around your data—and as a data holder you decide what “open” means, for whom, and from where.

## What do access conditions mean for open data?

If open data is not unconditional, something uncomfortable follows: openness is no longer a property of a dataset, but of an agreement. It is no longer enough to say that data is “open”. We have to make explicit under what circumstances, for whom, and for what purpose that openness applies. Open data shifts from an ideal to a form of governance responsibility.

Access conditions make openness concrete. They force institutions to articulate their assumptions. Who may use this data? For what type of use? Within which legal, ethical and geopolitical frameworks? What used to remain implicit becomes a matter of policy. That is not a dilution of openness but a more mature version of it. Openness becomes not an all-or-nothing choice, but a scale on which institutions take deliberate positions.

That shift is not neutral. Once you set conditions, you acknowledge that open data also involves power relations. Whoever formulates conditions determines who does and does not participate. That makes access policy inevitably political, even when it is packaged as something technical. Which is precisely why those conditions should not be hidden away in technology or contracts, but should remain a visible part of the public conversation about heritage, knowledge, and infrastructure.

For heritage institutions this means that open data is no longer only about making data available, but also about protecting, weighing, and accounting for consequences. Openness as a form of care: care for people, communities, historical contexts, and societal impacts. A way to create room without being naïve about misuse, pressure, and reality.

In that light, access conditions are not a limitation of open data, but a way to sustain openness in a world that has become less open. In the next blog I will show how these governance choices are translated in a dataspace into identities, policies, and contract negotiation—not to roll back openness, but to make it resilient.
