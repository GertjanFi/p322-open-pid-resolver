---
pid: p322:blog:06EQ5EVK790C5T6AX7MKQSCY1
title: "Your data isn’t the problem. Why ‘improvements’ slowly erode your knowledge."
date: "2026-05-05T00:00:00+00:00"
excerpt: "As a collection manager, you know the feeling: your data is correct, rich, and carefully built — yet you keep hearing that it needs to be “better.” Standardize, clean up, adjust. But at what cost?<br/><br/>In this blog, I show why your most valuable knowledge is at risk of being lost in that drive for improvement. Not because you are doing anything wrong, but because computer systems are not designed for the richness of your knowledge.<br/><br/>If you work with collections and recognize how nuance disappears into generic terms, this is not a theoretical story but everyday practice. Read this if you want to understand what is really going wrong — and how it can be done differently without losing control of your work."
teaser: "Collection data is not the problem. How it is handled is. Why carefully built knowledge disappears in standardization — and how that can change without losing control."
isAutoTranslated: false
---

Twice this week I had conversations about data in the heritage sector. With completely different parties. And both times we arrived at exactly the same conclusion: the problem is not availability, but usability.

So why is the data poorly usable? Not because the data is poor, but because we treat richly described source data as if it should be directly usable in systems that demand standardization.

## Why it breaks down in practice

The first conversation was a meeting with the managers of a large service platform. The following was said: "There is plenty of linked data available, but we still have to do so much to it before we can include it in our platform. So much, in fact, that it hardly matters whether we start with linked data, or simply connect to an XML file, or receive a CSV file."

What needs to be done? Mainly standardization: dates, names, places, terms. And assigning meaning: which place or which person are we actually referring to?

The second conversation was with a major supplier of collection management platforms. A national acceleration scheme came up, and how it enables them to help clients generate linked data. They said: "Linked data is step one, after that quality has to improve, because as it stands, nobody can use it. And it doesn’t go down well when you tell your clients or source holders this: your data quality is insufficient, you’ve been using your own term lists. You should start using generally accepted thesauri like the [Getty AAT](https://www.getty.edu/research/tools/vocabularies/aat/), then you’re doing it properly."

You can imagine how that lands. How are my term lists not good? Who do you think you are? Who understands this collection better: us, as long-time custodians, or those people on the other side of the world?

It is never a good idea to question a specialist’s expertise.

Because collection managers are absolutely right. There is little wrong with the intent and richness of the data. It contains an extraordinary level of nuance.

And that is precisely the problem.

## This is not a quality problem

Objects are described in almost unique detail. The material field is not `oil paint`, not even `oil paint (linseed oil)`, or `oil paint (linseed oil, cold-pressed)`, but: `oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)`.

That is a top-quality description.

One that users cannot easily work with.

Try putting that into a data system. For example, a list of materials such as used in the [Colonial Collections datahub](https://app.colonialcollections.nl/en/objects?query=*).

A user who wants to make a selection from a collection of 1.1 million objects has no use for the term `oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)`.

Because it returns exactly one object. A very precisely and beautifully described object, but still just one.

Users do not search to find one object. If they do, they already know that object. There are other queries for that: enter the name, the inventory number, or another unique identifier, and you will find exactly that one object.

Terms are not descriptions. They need to be standardized so users can select multiple objects. They provide meaning: you retrieve all objects tagged with the material 'oil paint' according to the definition of, for example, the Getty AAT.

Thesauri are aggregation instruments.

At least, that is what we believe now.

## We have been “improving” data for over a hundred years

Fifty years ago, we did not think that. Back then, the card catalogue was digitized and someone spent a great deal of time and energy on: `oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)`.

A hundred years ago, we did not think so either: collectors described their collections in handwritten notebooks.

Twenty years ago, perhaps we did—but using a different descriptive method. Or a different thesaurus.

And in thirty years? I am convinced we will look back and think we are doing it completely “wrong” today. How did they ever decide in 2026 to standardize on the Getty AAT? Surely it was already clear that by 2043 things would change again.

## We discard source knowledge and call it improvement

As a collection manager, you can never really do it right. That may be reassuring. It is also somewhat arrogant to assume we now know better than colleagues who have described collections with dedication over decades. That we now know everything, and must overhaul it all.

Export the collection, load it into [Open Refine](https://openrefine.org) or Excel. Set up a project team to “improve” ten thousand objects, then import the result back into the collection system. Done. Replace previous insights with current standards. All your existing information overwritten by something we currently dare to call “better.”

Or worse.

We lack the capacity, so we hand our collection data over to others: a service platform, a heritage organization, the state, or an IT supplier. And we let them improve the data. People with a fraction of the knowledge our custodians possess effectively create a new source from our data.

If anything is wrong, it is this.

For collection management, this means loss of nuance. For management, new project costs. For service platforms, it still means a great deal of manual work. And for users, it means they either find too little, or exactly the wrong thing.

## Stop saying the data is bad

We need to stop saying that data quality must be improved.

Enriching: fine. Adding new insights: absolutely.

But stop saying that what we have now is bad and must be overwritten.

So what should we do instead? That was the same question faced by the RCE. Specialists at the collection center knew that existing descriptions no longer fit the current context. And that the data did not meet current national requirements.

But that does not make the data wrong or bad.

It makes the data _non-compliant_ with the standards we currently apply.

That is something else.

There is no need to overwrite the old with the new. You may well regret that when new insights emerge in the future.

## So what should you do instead?

As a national node, the RCE leadership decided that its own collection data should comply with current requirements. One option is to hire an external contractor: a programmer who transforms the data using Python code. A kind of Open Refine or Excel solution, but on steroids.

Ruben Schalk called me with the question: "Do you happen to know someone who can do that? But sustainably?"

I know plenty of people who can do it, but whether that is sustainable is doubtful. So I asked him: "What do your collection managers think about it?"

That led to an interesting conversation in which we identified three things:

### 1. Preserve what already exists

You do not make friends by replacing `Oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)` with [`http://vocab.getty.edu/page/aat/300015050`](http://vocab.getty.edu/page/aat/300015050) (which is "Oil paint" according to Getty). You lose a great deal of meaning.

Thesauri should add meaning, not destroy it.

You can add it alongside, as a support for search. Then it becomes enrichment.

But make sure you preserve the original. And document what you did with that original value, when, by whom, and how. We call this data provenance.

For example: "On January 17, 2026, Johnny processed the value `Oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)` by ignoring everything between parentheses '(...)', and sending the remainder of the field — in this case 'Oil paint' — to the API of the [Termennetwerk](https://termennetwerk.netwerkdigitaalerfgoed.nl/nl) to determine the best matching term in the Getty AAT. This resulted in the value `http://vocab.getty.edu/page/aat/300015050`."

You store this according to the W3C [PROV-O](https://www.w3.org/TR/prov-o/) standard so that anyone can later see what was changed.

In doing so, you respect not only the source but also the people who worked on it before you. More than that, you even help the specialists who come after you—when you, as a collection manager, have long since retired—and who will again want to adapt the data according to whatever standards apply at that time.

### 2. Make enrichment a process, not a project

It is useful to enrich your collection once with terms that meet current requirements. But collection managers must then continue doing so consistently. Otherwise it is not sustainable; it becomes an endless effort. And why would you ask collection managers to do extra work by adding more generic terms, or by lowering the precision of their current work?

Are you going to tell specialists that from now on they are no longer allowed to add `Oil paint (linseed oil, cold-pressed, with lead white as siccative, hand-ground pigment, local pigment source, irregular grain size)`? That `oil paint` is sufficient: `http://vocab.getty.edu/page/aat/300015050`.

Or: they may still add the detailed description, but they must also check the Getty AAT for a matching term, and if it is not there, check the [Cultural Heritage Thesaurus](https://kennis.cultureelerfgoed.nl/index.php/Thesauri_bij_de_RCE_-_Cultuurhistorische_Thesaurus), and if it is not there either, perhaps [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page), or submit a request to Getty or CHT to add the term.

I hope your collection system has integrated the Termennetwerk by now, because — _Ain't nobody got time for that_.

What you actually want is for specialists to continue describing as they always have. With all their knowledge. Without additional work. And for a system to enrich that data afterward with more generic terms. A system that periodically (for example at night) processes the newest additions in the source and assigns Getty AAT, CHT, or any thesaurus you choose.

That system then adds the data provenance itself. No longer does "Johnny" perform the transformation on January 17, 2026 — "Agent X" does.

### 3. Let the expert lead, not the technology

Perhaps the most important conclusion from that conversation: involve collection management.

Too often, data enrichment is the domain of technologists. Yes, they understand the method, but not the data. And that is exactly what matters here.

Instead of letting the domain expert lead, we ask them to transfer years of experience and knowledge in a single afternoon so that data engineers can implement the changes.

And when they are done?

Those engineers then have to explain what their algorithms did to the data about "cold-pressed oil paint with hand-ground pigment." These are peculiar sessions I have attended far too often: the listener does not understand what an algorithm is, and the presenter does not understand what “siccative” means.

That rarely ends well.

Meanwhile, management has exhausted the project budget because data engineers are expensive. Work has to continue. So we sign off on the data, hoping the enrichments do what everyone assumes, believes, or intends them to do.

What is the alternative? Enable collection managers to validate enrichments at the right moments. Without requiring them to understand algorithms, sort a column in Excel, or even create a new sheet. It is helpful if people can do those things, but it should not be necessary. Their expertise lies elsewhere.

## This is solvable

And yes, if this starts to sound like a solution, that is because it is. For exactly this problem we developed Tabulous: not to overwrite source data, but to make enrichment structural and verifiable.

With the RCE, we have implemented the first version.

Not as yet another project in which existing data is “improved,” but as a different way of working. One where you do not replace what is already there, but add to it. One where you do not clean once, but enrich continuously. And one where the outcome does not disappear into code, but remains visible to the people who know the collection.

That is where the difference lies.

Oh, and in our view, it also works more smoothly than Python, Open Refine, or Excel :)

In the next blog, I will show what this looks like in practice.
