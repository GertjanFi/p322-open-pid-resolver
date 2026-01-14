---
pid: p322:blog:01J6E8F3PEM9H4Q7R2K8V1CW
layout: layouts/post.njk
lang: nl
title: 'Cache en geen kopie: een middel tegen aggregatie.'
onHomepage: true
date: 2025-12-04T00:00:00.000Z
category: Opinie
type: blog
authorKey: gertjan
image: /assets/images/knowledge/cache-geen-kopie-tegen-aggregatie.jpg
excerpt: 'Het eerste blog met lessen die we hebben geleerd uit de koloniale collecties als dienstplatform.<br/><br/>De Datahub leeft op het ritme van nachtelijke synchronisaties: elke dag wordt de volledige knowledge graph opnieuw opgebouwd. Niet om te bewaren, maar om bewust wegwerpbaar te blijven. Een dataset die je niet volledig kunt reconstrueren uit de bron is een aggregaat. Door volledig reproduceerbaar te blijven, voorkomt de Datahub dat het zelf autoriteit wordt en blijft de applicatie dienstverlener in plaats van gezagsdrager.'
teaser: Het eerste blog uit onze lessen voor dienstplatforms staat live. Ontdek waarom de Datahub Koloniale Collecties elke nacht volledig wordt herbouwd en hoe die radicale ‘wegwerpbaarheid’ voorkomt dat een dienstplatform zelf autoriteit wordt. Ontdek de kern van écht reproduceerbaar datadelen.
license:
  content: CC-BY-NC-SA-4.0
  representation:
    html: ARR
---

Ergens rond een uur of vijf in de ochtend, tussen de nachtelijke datasynchronisatie en mijn tweede pot thee bedacht ik dat onze dienst [Datahub Koloniale Collecties](https://app.colonialcollections.nl/en) een ongewoon ritme heeft. Terwijl de meeste systemen hun gegevens koesteren alsof ze onvervangbaar zijn, begint de Datahub elke nacht opnieuw. Alle datasets worden fris ingelezen, ontward en herbouwd, alsof het platform weigert een eigen geheugen op te bouwen.

Data die je niet bewaart, maar steeds opnieuw maakt: dat voelt bijna tegennatuurlijk. In een sector waar data graag blijft vastplakken aan de vingers van iedereen die het oppakt, is een wegwerpmentaliteit een radicale keuze. Maar juist die keuze onthult iets belangrijks: een dataset die je niet telkens opnieuw opbouwt, verzamelt **macht** zonder dat iemand het ziet.

## Who’s the boss?

Onze ontwerpkeuze voor de Datahub was daarom eenvoudig maar radicaal: we wilden geen systeem dat zichzelf zag als de bronhouder. **Een dataset die je niet volledig kunt reconstrueren uit de bron is een aggregaat.** En een aggregator heeft een machtspositie, of je dat nu wilt of niet. Het maakt je de nieuwe bronhouder, een nieuwe gezagsdrager, de nieuwe plek waar de "waarheid" wordt vastgesteld. Zodra dat gebeurt, ben je geen dienstplatform meer maar een autoriteit met structurele invloed op de interpretatie van koloniale geschiedenis.

En dat wilden we niet.

Die plaats is voor de bronhouder en de gemeenschap van herkomst. Niet voor de dienstverlener die het bij elkaar brengt.

## Aggregator versus cache

Veel erfgoedprofessionals gebruiken de woorden “aggregator” en “cache” alsof ze inwisselbaar zijn. Toch vertegenwoordigen ze verschillende ideeën over dienstplatformen. Je mag je zelfs afvragen of een aggregator wel een dienstplatform is.

Een **aggregator** verzamelt wat het kan vinden, giet alles in een nieuwe vorm, legt extra betekenislagen aan en publiceert vervolgens een samengesteld geheel dat vaak meer op een nieuw universum lijkt dan op de oorspronkelijke bron. Het resultaat is aantrekkelijk, bruikbaar en overzichtelijk, maar ook verraderlijk. Bij elke kopie vervaagt de herkomst. Bij elke verrijking groeit de afstand tot de bron. En bij elke nieuwe laag verschuift het perspectief van de oorspronkelijke instelling naar de partij die de aggregatie beheert.

Een **cache** doet precies het tegenovergestelde. Het claimt geen waarheid, maar bewaart een tijdelijke representatie die elk moment verloren mag gaan. Als de volledige koloniale dataset morgen instort, reconstrueren we die weer probleemloos. Die vergankelijkheid is geen tekortkoming, maar een bescherming tegen ongewenste autoriteit. Een cache weet dat het dienend is, en juist die nederigheid maakt het waardevol.

Voor de Datahub was dat cruciaal. We wilden geen nieuwe waarheid pretenderen te zijn, maar slechts een doorgang vormen naar de echte bronnen.

## De DERA en het ongemak rond aggregatie

Bij het ontwerpen van de Datahub keken we eerst naar de [DERA](https://dera.netwerkdigitaalerfgoed.nl/index.php/Hoofdpagina): de **Digitaal Erfgoed Referentie Architectuur**. De DERA is het soort document dat je op je nachtkastje legt om bij in slaap te vallen. Maar wie toch goed leest, merkt dat er een opvallende spanning zit in hoe het over aggregatoren spreekt. De DERA erkent dat aggregatoren bestaan, maar geeft ze geen volwaardige plek in de architectuur. Ze worden gezien als een tijdelijke speler, niet als een gewenste rol.

Op de [DERA-website lezen we over de Aggregator](https://dera.netwerkdigitaalerfgoed.nl/index.php/Aggregator#Status):

> _Tijdelijk patroon: via het Aggregator-patroon kan in ieder geval op deelgebieden een (thematisch/regionaal/sectoraal) deel van de DERA-visie ten aanzien van het vinden van erfgoedinformatie over instellingsgrenzen heen worden ingevuld. In de beoogde SOLL-situatie is het op deelgebieden aggregeren van erfgoedinformatie niet langer noodzakelijk._

Aggregatie willen we dus niet meer. De DERA is helder: in de SOLL-situatie hoort aggregatie niet nodig te zijn. Geen nuance, geen mitsen: wees trouw aan de bronnen, en stel herleidbaarheid en dienstgerichtheid centraal. Een dienst mag data verwerken, beschikbaar maken of tijdelijk representeren, maar moet zich verre houden van het structureel overnemen van de rol van bronhouder. Zodra een dienst blijvend data vasthoudt, repliceert en verrijkt, schuift het op naar aggregator.

## De risico’s van aggregatie

Aggregatie klinkt efficiënt, maar het creëert een soort ketting van structurele problemen.

Het begint bij vrijwel alle aggregatoren met het **verlies van herkomstinformatie**. Elke kopie verzwakt de band met de oorspronkelijke dataset. Zelfs wanneer je zorgvuldig metadata meeneemt, creëer je toch een nieuwe laag bovenop het geheel met interpretaties, selecties en ordening. Na verloop van tijd begint die kopie een eigen leven te leiden, en wordt de aggregator de plek waar gebruikers hun waarheid zoeken. Zelfs als je trouw de naam van de bronhouder blijft noemen.

Zodra een aggregator voldoende massa verzamelt, ontstaat een nieuw zwaartepunt. Gebruikers zoeken niet langer naar bronnen, maar naar de gereconstrueerde realiteit van de aggregator. Dat zien we bij grote Europese en nationale platforms: aggregatie leidt tot **machtsconcentratie**. Zelfs wanneer de aggregatoren dat niet bewust nastreven, worden ze de plek waar waarheid lijkt te ontstaan.

Daardoor wordt de aggregator uiteindelijk een **black box**. Wie toetst nog kritisch de aannames en bias onder de verrijkingen van de aggregator? Bronhouders hebben de specialistische onderzoekskennis voor zelfreflectie, kritiek, en doorontwikkeling van de eigen dataset. Aggregatoren kunnen dat niet voor alle dataobjecten die ze hebben verzamelt. Ze worden een plaats waar de feiten uit de brondata samenklonteren met de interpretaties van de aggregator zonder dat nog zichtbaar is waar de grens loopt en de grondslag ligt. Een black box ontstaat niet in één nacht. Het groeit in laagjes, als sediment, totdat niemand nog weet waar de bodem is.

En die verrijkingen van aggregatoren blijken hardnekkig. Ze duiken op in onderzoeken en worden overgenomen in beleidsdocumenten. Ze worden niet meer bevraagd en de bron waar ze op gebaseerd zijn nauwelijks nog geraadpleegd.

Een cache kent die problemen niet want het bewaart niets definitief. Alles wat erin zit, is tijdelijk en kan alleen maar uit de bron worden herleid. Dat gaat verder dan "we verwijzen mensen terug": dat doet een aggregator ook. Bij een cache is dat ingebakken in de technologie. De datainfrastructuur móet voor alle data, verrijkingen, correcties, en verbeteringen, steeds opnieuw terug naar de bron.

## De grote aggregatoren van het erfgoedveld

[Netwerk Oorlogsbronnen](https://www.oorlogsbronnen.nl), [Europeana](https://www.europeana.eu) en [Collectie Nederland](https://www.collectienederland.nl) zijn allemaal indrukwekkende platforms die veel waarde toevoegen. Ze vergroten zichtbaarheid, verbeteren toegang en ondersteunen onderzoek. Maar ze zijn ook onmiskenbare aggregatoren. Ze publiceren kopieën, voegen eenmalig verrijkingen toe, normaliseren gegevens, slaan die permanent op, en construeren zo een groot samengesteld geheel dat vaak veel steviger oogt dan de onderliggende brondata eigenlijk toestaat.

Deze platforms combineren de rol van dienstverlener en bronhouder in één. Dat creëert een spanning die moeilijk oplosbaar is. Want ze zijn de bronhouder niet: het is niet hun data. We moeten niet praten over dé "Europeana dataset" of dé "Collectie Nederland". Die bestaat niet. Voor Europeana zijn het 59 miljoen objecten van 3500 collectiehoudende instellingen die allemaal meer verstand van hun eigen objecten hebben dan Europeana. In het platform kan je als gebruiker amper zien wat Europeana vindt en heeft toegevoegd, en wat echt bij de bron vandaan komt. In de achterliggende data is wél de mogelijkheid ingebouwd voor verantwoording maar die is alleen zelden ingevuld.

## Op de schouders van reuzen

Ben ik dan tegen aggregatoren? Het is logisch dat dit zo gegroeid is, maar het is hetzelfde als vragen of ik tegen stoomschepen ben. Ze zijn schitterend maar niet meer van deze tijd. Zo hebben we ook heel veel aan aggregatoren te danken. Zonder Europeana en Collectie Nederland was er minder digitale erfgoeddata beschikbaar. We staan op de schouders van reuzen.

Maar aggregatoren instandhouden neemt de prikkel bij bronhouders weg om zélf hun data te ontsluiten, verrijkingen te formaliseren en toe te voegen. Daar hebben we veel meer aan dan een aggregator die dat met beperkte kennis doet, én die niet kan uitleggen hoe de geaggregeerde gegevens zich verhouden tot de bron. Zo ondersteun je geen wetenschappelijk of journalistiek onderzoek; en in een domein als koloniale collecties dat gevoelig is voor machtsongelijkheid en historische blindheid, is het al helemaal niet te rechtvaardigen.

Een cache voorkomt dat. Door reproduceerbaarheid centraal te stellen, blijft elke beslissing zichtbaar en controleerbaar. De infrastructuur bemiddelt slechts en bepaalt niets.

## Collectie Nederland 2.0

In 2024 vroeg de RCE mij om advies over de vernieuwing van Collectie Nederland. Met een team van RCE'ers trokken we samen de belangrijkste conclusie: **stop met aggregeren**. Help instellingen om data zélf volgens de open standaarden van het [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl) te publiceren, maar ga niet langer op de stoel van de bronhouder zitten.

Er leek ruimte voor die nieuwe richting en in het halfjaar dat we samenwerkten aan de inhoudelijke plannen was er flink draagvlak. Maar in de marktconsultatie van september 2025 was de aggregator in het architectuurplaatje van de infrastructuur ineens weer springlevend. Niet als een enkel blokje in een schema, maar als een volledige infrastructuurlaag waarin alle traditionele functies staan onderscheiden. Goede intenties lijken te stranden in de vertaling van inhoud naar IT, of van IT naar inkoop. Ik hoop dat het niet te laat is om te voorkomen dat de markt straks toch gevraagd wordt om een platform te leveren met een rol die ter discussie staat en waarvan de DERA zegt dat die zou moeten verdwijnen.

Iedere kans die we als digitaal erfgoedsector hebben om een aggregator in een echt dienstplatform om te zetten, moeten we met beide handen grijpen.

## Enige excuus voor een aggregator

De enige reden om nog een aggregator te zijn, is een verouderd systeem waarvoor je (nog) geen financiering hebt om het te vernieuwen. Andere excuses zijn er niet. Het is verrassend eenvoudig: **als je de data onder je dienstplatform niet kunt reconstrueren uit de bron, dan ben je een aggregator.**

Je kunt dat verpakken in technische rationalisaties,
je kunt je verschuilen achter gebruiksgemak,
je kunt zeggen dat het “nu eenmaal zo werkt”,
of dat de bronhouders "er nog niet aan toe zijn".

Maar uiteindelijk staat of valt het bij reproduceerbaarheid en het afleggen van verantwoording. De documenteerbare, transparante en herhaalbare datainfrastructuur van een cache maakt niet alleen wetenschappelijk & journalistiek onderzoek mogelijk, het is ook het slot op de deur tegen onbedoelde machtsvorming. Een groeiende stapel kopieën doet het tegenovergestelde.

Wil je weten hoe en heb je geen zin om deze blogs de komende tijd af te wachten? Je ben van harte welkom om alvast contact met ons op te nemen.
