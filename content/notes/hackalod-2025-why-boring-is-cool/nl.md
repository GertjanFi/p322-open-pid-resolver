---
title: "De dag na de HackaLOD: waarom degelijk de basis is van cool"
date: "2025-11-03T00:00:00+00:00"
excerpt: "Binnen 24 uur een complete, DERA-conforme datastructuur opbouwen? Tijdens de HackaLOD 2025 bewezen we dat het kon."
isAutoTranslated: false
---

Het is de day after. Gisteren en afgelopen vrijdag deed ik voor het eerst mee aan de **#HackaLOD2025** van Netwerk Digitaal Erfgoed. Na ruim twintig jaar in de erfgoedsector moest het er een keer van komen.
En het was fantastisch.

Het Nederlands Openluchtmuseum had ons de uitzonderlijke ruimte gegeven om op het park de nacht door te halen. **De Kasteelboerderij** – een schitterend 17de-eeuws gebouw met meer kabels dan koeien – was een toevluchtsoord voor mensen met laptops, koffie/thee en een enorme hoeveelheid enthousiasme. De sfeer? Gelijkgestemde nerds die iets moois willen bouwen.

## Team Cool vs. Team Saai

Onder bezielende leiding van **Erwin Folmer** en **Wouter Beek** vormden we in de weken ervoor **Team Harnem**.
We bleken voor de HackaLOD-organisatie een maatje te groot — daarom splitsten we ons op in twee subteams met bijpassende namen: _Team Cool_ en _Team Saai_.

Team Cool deed de zichtbare dingen: een game, een geocaching-podcast, kortom — iets met glans.
Team Saai koos voor de stille motor onder de motorkap: data-pijplijnen, robuuste infrastructuur, duurzame borging. Dingen waar je geen prijzen voor wint — maar zonder werkt er überhaupt niets.

Natuurlijk zat ik bij Team Saai.
Want **Saai maakt Cool mogelijk**.

## Wie won

Team Cool heeft de juryprijs en eeuwige roem gewonnen.

Team Saai ging met het gevoel naar huis: we hebben geholpen de spreekwoordelijke man op de maan te zetten. Althans, dat vertel je jezelf na afloop om uit te leggen waarom je voor het niet-winnende team hebt gekozen ;)

Niemand heeft valsgespeeld — er werkten ook niet stiekem twee teams aan het winnende project. We hebben wel dezelfde brondataset gedeeld: een verschrikkelijke Excel-sheet waar misschien ooit nog een saai blog over komt, hoe ik die heb omgezet naar werkbare triples.

De linked data hebben we via een API ontsloten, en daar kon Team Cool bij. De ideeën en de coole uitwerking zijn verder echt helemaal van hen.

## Wat wij bouwden

Team Saai (dat zichzelf al snel omdoopte tot _Team Degelijk_, en later _Team Weldegelijk_) ging de uitdaging aan om in 24 uur een hele NDE-infrastructuur — van ruwe brondata tot dienstplatform — op te bouwen met alleen bestaande software.

De pijplijn begon bij die beruchte Excel: opgeschoond en omgezet naar linked data met het nieuwe product waar Jauco Noordzij en ik aan werken. De triples stroomden daarna een triplestore in — uiteraard TriplyDB, met Wouter in het team, maar in principe werkt elke linked-database.

We hadden de dataset kunnen aanmelden in het NDE Dataset Register en een iets van ARKS kunnen aanvragen voor persistente identificatie; maar een hackathon-team is niet bepaald een duurzame organisatievorm.

Vervolgens bouwden we een dienst die de linked data ophaalt en gebruikersvriendelijk ontsluit, met daaronder een ElasticSearch-cache (voor de nerds: ja, natuurlijk zit er een cache onder).

Voor de interface grepen we terug op de open-source code van de Datahub Koloniale Collecties. Die hebben we omgekat tot datahub.harnem.nl — met alle bekende functionaliteit: open search, facetted filtering, meertaligheid, en login via Clerk.

Gebruikers kunnen daar commentaar, correcties of extra context achterlaten.
Die feedback slaan we op als **nanopublicaties**: linked data die buiten de hub leeft.
Zo blijft de cache schoon en de infrastructuur zuiver. Want een cache met verrijkingen is geen cache meer — dat is aggregatie. En daar heb ik, zoals sommigen weten, een grondige afkeer van.

## Helemaal DERA-compliant

En dat is dus de hele pijplijn.
De hele **Netwerk Digitaal Erfgoed-visie**.
Helemaal **DERA-compliant**.
In 24 uur.

Voor alle grote organisaties die dat in de sector niet voor elkaar krijgen: jullie mogen bellen 😁

Saai is het nieuwe cool

Was het spannend? Niet zoals een game of een podcast.
Maar het _werkt_. En dat is uiteindelijk het mooiste resultaat van allemaal.

Dus hulde aan **Team Cool** — Fabian Frank, Sander Maijers, Eva Koenders, Alet L., Walter Bolwerk en Erwin Folmer — voor de zichtbare magie.
En hulde aan Team Weldegelijk voor de motor die draait, stil maar standvastig.

⸻

## Epiloog

Innovatie begint niet bij glitter, maar bij structuur.
Saai maakt Cool mogelijk.
En wie dat begrijpt, bouwt de toekomst van digitaal erfgoed.
