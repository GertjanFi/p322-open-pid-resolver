---
pid: p322:blog:01J6E8F3PCM7H4Q2R9K8V1CW
layout: layouts/post.njk
lang: nl
title: "Dienstplatform Datahub Koloniale Collecties deel 2: Infrastructuur en NDE-compliance"
onHomepage: true
date: 2025-11-20
category: "Achtergronden"
type: "blog"
authorKey: gertjan
image: "/assets/images/knowledge/bird-of-prophecy-2.jpg"
excerpt: "In deel 2 van de datahub als dienstplatform dalen we af naar de infrastructuur onder de Koloniale Collecties. Niet de interface, maar de afspraken die bepalen wie welke data publiceert, hoe die blijft stromen en hoe dicht we bij de bron blijven. We volgen hoe musea hun eigen data publiceren volgens de NDE-architectuur, hoe de Datahub die gebruikt zonder te aggregeren, en waarom verrijkingen als zelfstandige kennis worden opgeslagen in plaats van verborgen in een tussenlaag."
---

## De datahub als dienstplatform – deel 2

In [deel 1 van deze serie](/nl/posts/20251113-dienstplatform-datahub-koloniale-collecties-deel-1-de-gebruikersomgeving) liepen we door de gebruikersomgeving van de Datahub Koloniale Collecties en volgden we de _Bird of Prophecy_ door het scherm. In deel 2 draaien we het perspectief om. We gaan naar de laag waar geen mooie afbeeldingen meer staan, maar waar wordt besloten welke data überhaupt in beeld kán komen: de infrastructuur.

Ook hier gaat het niet om techniek om de techniek. De vraag blijft hetzelfde: hoe zorg je dat musea, gemeenschappen van herkomst en onderzoek goed met elkaar kunnen werken, zonder hun zeggenschap over data kwijt te raken? Het antwoord begint bij de architectuur van het Netwerk Digitaal Erfgoed. In de video laat ik zien hoe de Datahub is opgebouwd op basis van het NDE-document “Afspraken voor erfgoedsites en apps”, een blauwdruk voor dienstplatformen waar ik zelf aan heb meegeschreven. Geen theoretisch plaatje, maar een schema dat één-op-één terug te vinden is in de draaiende omgeving.

Merk op dat deze presentatie is opgenomen voordat het nieuwe NDE-visie document op dienstplatformen werd gepubliceerd: '[Van Data naar Dienst](https://netwerkdigitaalerfgoed.nl/nieuws/van-maatwerk-naar-netwerk-samen-bouwen-aan-erfgoedplatformen/)'. De infrastructuur van de datahub staat ook in dit document beschreven.

{% cfStream "354a6afa8111744042ad52cc8f9bc3f9", { lang: page.lang, aspect: "16/9", start: "00:00:10" } %}

## De onderkant van de Datahub Koloniale Collecties

Onderin die architectuur staan de bronhouders: musea als het Wereldmuseum, Rijksmuseum, Bronbeek, RCE en NIOD, allemaal met hun eigen collectiemanagementsystemen en datamodellen. De eerste stap is niet “alles gelijk trekken”, maar de data in beweging brengen. Iedere nacht lezen transformatiepijplijnen de brondatabases uit en zetten ze om naar linked data in de vorm die NDE voorschrijft. Daarmee ontstaat een gestandaardiseerde publicatielaag, terwijl de verantwoordelijkheid voor inhoud en kwaliteit bij de musea zelf blijft.

Die gepubliceerde datasets worden geregistreerd in het datasetregister van NDE. Dat register bevat geen nieuwe kopie van de collecties, maar beschrijvingen en adressen. In de video laat ik zien hoe de Datahub als dienstplatform dat register bevraagt en een lijst met bronnen en URL’s ontvangt waar de data te vinden is. Pas dán gaat de Datahub ophalen, transformeren en presenteren. Dienstplatformen worden daarmee herbruikbare klanten van een gezamenlijke infrastructuur, in plaats van nieuwe silo’s.

## Geen aggregatoren

Cruciaal is het onderscheid tussen een cache en een aggregator. De Datahub slaat de opgehaalde data tijdelijk op in een cache die alleen bedoeld is om de applicatie snel en bruikbaar te houden. Valt die cache om, dan bouwen we hem opnieuw op uit de bron. We claimen geen “eigen” nieuwe masterdataset. Dat is een andere filosofie dan klassieke aggregatoren, die datasets verzamelen, verrijken en vervolgens als nieuwe, afgeleide bron aanbieden. Hoe meer aggregaten van aggregaten, hoe onduidelijker het wordt welke transformaties onderweg zijn toegepast en hoe lastiger het wordt om verantwoord onderzoek te doen op die data.

Die transparantie wordt extra belangrijk zodra je gaat verrijken. In de video bespreek ik hoe verrijkingen - zoals de handmatig toegevoegde narratieven door de gemeenschappen van herkomst - niet in de cache belanden, maar in aparte verrijkingsdatasets. Daarin leggen we vast welke extra kennis is toegevoegd, door wie, en hoe die terugwijst naar de oorspronkelijke bronrecords. Verrijkingen worden zo volwaardige bronnen met een eigen datasetomschrijving, in plaats van onzichtbare edits in een tussenlaag.

## Naar dataspaces

Deel 2 is daarmee geen rondleiding langs schermen, maar langs afspraken: wie is waarvoor verantwoordelijk, hoe blijf je zo dicht mogelijk bij de bron, en hoe bouw je een dienstplatform dat je later ook tegenover een onderzoeker, een gemeenschap of een rechter kunt verantwoorden. In deel 3 trek ik die lijn door naar de Europese dataspaces en laat ik zien hoe deze architectuur naadloos aansluit op de discussies die nu in Brussel worden gevoerd over een eerlijker digitaal speelveld voor cultuur en kennis.
