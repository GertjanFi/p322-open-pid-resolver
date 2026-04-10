---
title: "Buiten de dataset, binnen de gemeenschap: verrijkingen als nanopublicaties"
date: "2025-12-11T00:00:00+00:00"
excerpt: "De tweede les uit de Datahub Koloniale Collecties: verrijkingen moeten zelfstandige, citeerbare kennisitems zijn.<br/><br/>De Datahub Koloniale Collecties kan verrijkingen niet in de cache opslaan zonder ze elke nacht te verliezen én zonder zelf een aggregator te worden. Herkomstgemeenschappen willen bovendien dat hun kennis buiten Nederlandse infrastructuur kan bestaan. Daarom worden verrijkingen gepubliceerd als zelfstandige nanopublicaties: kleine, verifieerbare kennisclaims met eigen provenance en licenties, gedistribueerd in een internationaal netwerk. Zo blijft de cache tijdelijk, maar de kennis duurzaam, citeerbaar en onafhankelijk — precies wat reproduceerbare en rechtvaardige infrastructuur vraagt."
teaser: "De tweede P-322 les voor dienstplatforms staat live. Ontdek waarom verrijkingen in de Datahub Koloniale Collecties alleen houdbaar en rechtvaardig zijn als zelfstandige, citeerbare nanopublicaties: verifieerbare kennisclaims die buiten de Nederlandse infrastructuur bestaan en internationaal worden gedeeld."
isAutoTranslated: false
---

De eerste keer dat een herkomstgemeenschap ons vroeg waarom zij hún kennis in een Nederlandse database moesten stoppen terwijl Nederland al de objecten en museale informatie had, voelde ik dat we iets fundamenteels verkeerd deden. Herkomstgemeenschappen willen niet langer dat hun cultuur onderworpen word aan Nederland. En terecht.

Hoe gaan we in de [Datahub Koloniale Collecties](https://app.colonialcollections.nl/en) dan om met de verrijkingen? De community-beschrijvingen, correcties en contextnotities die gebruikers toevoegen aan de data? En: hoe zorgen we er dan ook direct voor dat we geen aggregator worden? Zoals ik in het vorige blog "[Cache versus kopie en aggregatie](./20251204-cache-geen-kopie-tegen-aggregatie.md)" schreef: we willen steeds opnieuw een reproduceerbare dataset uit de bronnen kunnen opbouwen. Verrijkingen zijn níet geschikt om in de cache te verdwijnen. Reproduceer je de dataset de volgende nacht opnieuw, dan ben je ze kwijt.

## Nanopublicaties: klein, formeel, maar krachtig

We moesten dus iets anders. Iets waardoor verrijkingen buiten de Nederlandse infrastructuur kunnen bestaan, wereldwijd beschikbaar zijn, en tóch gekoppeld blijven aan de objecten die ze beschrijven. Iets dat blijft, citeerbaar is, en herleidbaar naar de bron: de gemeenschap die de kennis bezit.

Dat is de _[Nanopublication](https://nanopub.net)_.

Een nanopublicatie is de kleinste eenheid van publiceerbare informatie: een zelfstandige, machineleesbare stelling, precies genoeg om iets over een datapunt te zeggen. Waar de museale registratie bij een object misschien `"Kleur": "Zwart"` vermeldt, kan een nanopub niet alleen naar het object maar ook naar het attribuut ‘kleur’ verwijzen, en daarna de claim toevoegen: “Dit object had ooit rood pigment dat is verkleurd.”

Bij het modelleren van verrijkingen lopen verschillende werelden door elkaar. Musea leveren **metadata**: feitelijke collectie-informatie. Onderzoekers en gemeenschappen maken **annotaties**: interpretaties, context, discussie. Maar de Datahub heeft iets anders nodig om reproduceerbaar te blijven: **kennisclaims**. Dat zijn gestabiliseerde uitspraken die herleidbaar, verifieerbaar en citeerbaar moeten zijn.

Nanopublicaties zitten precies in die derde categorie. Ze zijn geen extra metadata of een annotatie met een likje semantiek, maar zelfstandige micro-publicaties die een formele rol spelen in de knowledge graph.

## De structuur van een nanopublicatie

Elke nanopublicatie bestaat uit:

- een **assertion**: de claim zelf;
- **provenance**: hoe die claim tot stand kwam - door wie, wanneer, met welke methode;
- **publication info**: wat zijn de publicatievoorwaarden - licentie, identifier.

Door die driedeling wordt een verrijking een eerste-klas burger die gelijkwaardig is aan de informatie van de bronhouders in de dataset.

De publicaties worden opgeslagen op een nanopub-server en vervolgens gedupliceerd in een netwerk van tientallen servers wereldwijd. Dat netwerk bestaat al ruim tien jaar, wordt veel gebruikt in wetenschappelijk onderzoek, en zorgt ervoor dat nanopubs na publicatie niet meer kunnen worden aangepast. De cryptografisch verifieerbare identifiers garanderen dat de inhoud authentiek blijft. De kennis is daarmee veiliger dan veel andere datasets.

Dat internationale karakter maakt elke verrijking wel bedenkelijk. Zeker in een domein als koloniale collecties, waar interpretaties, representatie en machtsrelaties zwaar wegen. Om maar te zwijgen over de mogelijke invloed van _fake_ claims door politiek gedreven tegenstanders van restitutiebeleid, of nog erger: landen als China of Rusland die belang hebben bij het verstoren van de relaties tussen Nederland en bijvoorbeeld Indonesië. Dankzij de expliciete provenance en publicatie-info wordt zulk misbruik en vandalisme voorkomen.

Het aanmaken van nanopubs en gebruik van het netwerk is gratis. Het Zwitserse bedrijf [Knowledge Pixels](https://knowledgepixels.com) levert diensten zoals de [Nanopub Monitor](https://monitor.knowledgepixels.com), een overzicht van de infrastructuur, en een SPARQL-endpoint voor het terugvinden van nanopubs.

## Lichte infrastructuur

Met nanopublicaties blijft de cache wegwerpbaar en alle toegevoegde kennis duurzaam. Iedere nacht halen we via het [NDE datasetregister](https://datasetregister.netwerkdigitaalerfgoed.nl/?lang=en) de collectiedata opnieuw op bij de bronhouders. Vervolgens vragen we het SPARQL-endpoint van Knowledge Pixels om alle nanopubs die aan deze objecten zijn gekoppeld.

Hiermee ontstaat een eenvoudige maar krachtige reconstructieregel van de cache:

**brondata + nanopubs = de volledige, reproduceerbare knowledge graph.**

Het toevoegen van nanopublicaties gebeurt meestal binnen de Datahub-omgeving, maar dat hoeft niet. Als iemand in Zuid-Afrika, Sri Lanka, Suriname of Indonesië een nanopub maakt en die koppelt aan de identifier van een object in de Datahub, dan ontvangen we die ook. Het is een eigen, onafhankelijke bron buiten het Nederlandse erfgoeddomein - precies wat herkomstgemeenschappen vroegen.

Omdat nanopubs altijd cryptografische provenance en publication info meenemen, kan de Datahub verrijkingen filteren zonder poortwachter te worden. We kunnen bijvoorbeeld alleen nanopubs tonen van geregistreerde community-gebruikers. Tegelijk blijft het netwerk open: iedereen kan publiceren, maar niemand kan onzichtbaar manipuleren. Nanopubs combineren openheid met controleerbaarheid, zonder dat de Datahub een centrale macht wordt.

## Nanopublicaties en Web Annotations

Je zou kunnen denken: waarom gebruiken we geen annotatiesysteem? Bijvoorbeeld het [Scholarly Web Annotation (SWA)-framework](https://clariah.github.io/scholarly-web-annotation/docs/about/) van [CLARIAH](https://clariah.nl) dat voortbouwt op het [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/). Daarmee kun je aantekeningen maken op teksten, afbeeldingen of audio en videobestanden die op het web zijn gepubliceerd, zonder de bron te wijzigen. SWA is ideaal voor het onderzoekende proces: opmerkingen, discussies, alternatieve interpretaties, versiebeheer.

Maar juist omdat SWA ontworpen is voor **kennis in wording**, is het niet vanzelf het eindstation voor verrijkingen die onderdeel worden van een reproduceerbare knowledge graph. Zodra een verrijking stabiel wordt - geen hypothese meer, maar een bevestigde kennisclaim - ontstaan strengere eisen: duurzaam publiceerbaar, citeerbaar, verifieerbaar, permanent identificeerbaar.

Een nanopublicatie is niet bedoeld als alternatief voor een Web Annotation, maar als **publicatievorm**. Je kunt een Web Annotation zelfs direct als de **assertion** van een nanopub gebruiken: de inhoud wordt overgenomen, terwijl de nanopublicatie er provenance, publicatie-metadata en verificatie aan toevoegt.

SWA beschrijft het denkproces en de inhoud; de nanopub geeft de claim een formele, duurzame plek in de knowledge graph. In een toekomstige versie van de Datahub zou SWA een natuurlijke aanvulling kunnen zijn.

## Aansluiting bij de DERA

Als we verrijkingen zelf opslaan, worden we toch weer een aggregator, precies wat de DERA nou net niet wil. In de beschrijving van de Aggregator-rol stelt de DERA ondubbelzinnig:

> _“In de beoogde SOLL-situatie is het op deelgebieden aggregeren van erfgoedinformatie niet langer noodzakelijk.”_  
> ([DERA, Aggregator-patroon](https://dera.netwerkdigitaalerfgoed.nl/index.php/Aggregator#Status))

Bronhouders blijven verantwoordelijk voor hun eigen data; dienstplatformen moeten herleidbaarheid en decentrale publicatie respecteren. Door verrijkingen níet in de infrastructuur te absorberen maar als zelfstandige nanopublicaties te publiceren, voorkomt de Datahub dat het een nieuwe aggregator wordt waar de DERA tegen waarschuwt.

De infrastructuur blijft dienend - niet bepalend.

## Wat dit oplevert voor de Datahub en het brede erfgoeddomein

Met nanopublicaties tilt de Datahub haar rol op van technische dienstverlener naar facilitator van duurzame kennisproductie, zonder zelf bronhouder te worden. Verrijkingen krijgen een eigen bestaan, met eigen metadata en eigen traceerbaarheid. Dat levert:

- **wetenschappelijke verifieerbaarheid**: elke claim is controleerbaar en reproduceerbaar;
- **gemeenschapsstemmen**: herkomstgemeenschappen krijgen een formele plek buiten Nederlandse infrastructuur;
- **modulaire reproduceerbaarheid**: de graph bestaat uit brondata + nanopubs - meer niet;
- **bewuste infrastructuur**: de cache blijft tijdelijk, terwijl kennis duurzaam en gedistribueerd blijft.

Voor een domein met gevoelige machtsverhoudingen, complexe herkomstgeschiedenis en internationale belangen is dit geen technische luxe, maar een ethische voorwaarde.
