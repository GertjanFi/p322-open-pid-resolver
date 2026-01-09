---
layout: layouts/post.njk
lang: nl
pid: p322:blog:06DKAHGGB8D8Z5NYKP4J1AYCZ
title: "Namen die blijven: over persistent identifiers zonder eeuwigheidswaan."
onHomepage: true
date: 2026-01-07
category: "Achtergronden"
type: "blog"
authorKey: gertjan
image: "/assets/images/knowledge/namen-die-blijven.jpg"
excerpt: "Links voelen als beton, tot ze ineens zand blijken. In erfgoeddata is dat geen detail maar een risico: wat vandaag werkt, kan morgen verdwijnen door een nieuwe leverancier, een herstructurering, of een wisseling van bestuur. In dit blog laat ik zien waarom een URL geen belofte is, wat een PID wél doet, en hoe je met minimale, nuchtere infrastructuur vertrouwen bouwt - zonder eeuwigheidswaan. Als je collecties langer moeten leven dan je organisatie, wil je dit lezen."
teaser: "Persistente identifiers zijn beleid. Ontdek waarom échte digital-heritage-continuïteit begint bij afspraken, en niet bij Handle's of ARK's, en wat dat van organisaties vraagt."
---

Digitale infrastructuur zit vol tijdelijke oplossingen die zich voordoen als permanent. Internetadressen, softwarekoppelvlakken/APIs, dashboards: ze voelen betrouwbaar omdat ze vandaag werken. Maar erfgoed leeft langer dan een contract, een leverancier, een projectfase, en langer dan een organisatie. Wie dat serieus neemt, kan niet blijven doen alsof een link voldoende is.

Informatie op het internet is niets anders dan een toevallige ontmoeting op een druk perron. En als je eenmaal in het domein van digitale erfgoeddata werkt, dan voelt dat schraal. Erfgoed vraagt om namen die blijven bestaan ook wanneer de trein al lang is doorgereden naar het volgende station.

## De fata morgana

Voordat ik meer over persistente identificatie (pids) ga zeggen, moet me één ding van het hart:

**Technisch persistente data bestaat niet.**

Zo. Dat moest even.

Persistentie heeft alles met een belofte te maken: kunnen anderen erop vertrouwen dat jij je aan je belofte houdt om informatie beschikbaar te houden?

Deze blog gaat over de manier waarop je dat kunt inrichten, misschiens zelfs kan garanderen. Maar breek je die belofte, dan is er geen systeem dat je informatie persistent houdt.

## Waarom “persistent” een gevaarlijk woord is

Waarom die disclaimer? Omdat veel verhalen over persistente identificatie een beetje religieus zijn. “Persistent” klinkt bijna alsof je onsterfelijkheid belooft.

Maar ik werk in een startup die nog zo jong is dat we elke regel code bij naam kennen. Nadenken over eeuwige pids staat dus niet heel hoog op de prioriteitenlijst.

Dus waarom dan toch wel?

Omdat ik geloof in _practice what you preach_. Als we erfgoedinstellingen helpen met de NDE-richtlijnen, dan moeten we daar zelf ook aan voldoen. En goed beleid en infrastructuur invoeren als je nog jong, klein en flexibel bent, heeft ook zo zijn voordelen.

## Dit is geen technisch probleem

Pids zijn geen magische techniek waarmee je het internet verplicht om jouw document altijd vindbaar te houden. Dat zul je echt zelf moeten doen.

De kern is eenvoudig en tegelijk streng: persistente identificatie betekent bovenal dat jij belooft dat je de bron beschikbaar houdt met een stabiele naam, en dat je die naam niet laat meewaaien met elke reorganisatie van je instelling, iedere herstructurering van je website, je CMS, je folderstructuur of je volgende ingeving om "alles even netjes” opnieuw in te richten.

En ja, die belofte kun je doen op ieder willekeurig webadres:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

Maar hoe geloofwaardig is dat?

Vandaag hebben we onze website zo ingericht, maar dat kan over een jaar anders zijn. Kiezen we straks een ander CMS met een andere structuur dan gaan al die adressen op de schop. Wekt dat vertrouwen bij anderen om onze belofte van een permanent adres te geloven?

Vermoedelijk niet.

## Waar vertrouwen begint

Daarom is je eerste stap niet technisch: kies een eigen identifier die betekenis heeft los van je technologie. Techniek, en zeker digitale technologie, is vluchtig en wekt dus weinig vertrouwen.

Duurzame identificatie begint daarom bij een stukje tekst zoals:

`p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

Het heeft een vorm die zo lelijk is dat ik het persoonlijk geruststellend vind, omdat het laat zien dat het om structuur gaat en niet om marketing. Dat wekt vertrouwen.

We noemen `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` een _Uniform Resource Identifier_, URI voor vrienden. Ook URI is een term met een wat magische status. Er zijn nogal wat verschillende interpretaties terwijl er gewoon een standaard is waarin het ding gedefinieerd staat: [de RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986).

Een URI **identificeert** iets en niets meer dan dat.

Een URI hoeft niet uniek te zijn.
Een URI mag iedere inhoud hebben die je nodig vindt.
En een URI hoeft niets te zeggen over waar iets staat.

Natuurlijk: URIs mógen wel uniek zijn, en veel mensen gaan daar ook stiekem vanuit. Eén van de meest gebruikte URI voorbeelden is een ISBN. Daar zit een hele organisatie achter om die nummers wereldwijd uniek te houden. Dat is geweldig. Maar het moet niet. De meeste organisaties hebben geen behoefte aan een wereldwijde garantie. Het is handig als de identifier binnen de context van een systeem uniek is, maar ook daar laat de specificatie zich niet over uit.

## Semantiek in een URI

Bij mensen bestaat ook vaak het idee dat URI's willekeurige karakters moeten zijn zoals het stukje `01J6E8F3PFQ2H9R7M4K8V1CW`. Dat voelt "uniek". Ook dat hoeft niet. Als je betekenis aan een URI wilt geven dan ben je daar vrij in.

Er zijn regels over de manier waarop machines je URI interpreteren. Alles voor de eerste dubbele punt ':' noemen we een _scheme_ en dat kun je nog het beste uitleggen als de context van de identifier. Iedereen mag een scheme zelf kiezen. Je kunt het vastleggen en officieel registreren als standaard (bijvoorbeeld `mailto` of `urn` of `http`) of gewoon zelf iets bedenken.

`mailto:gertjan@p-322.com` is een URI. Dankzij de gestandaardiseerde `mailto:` scheme weten computers dat het een e-mailadres is en wat ze daarmee moeten doen.

`urn:isbn:9780140449136` is ook een URI. De `urn` scheme is strikt gedefinieerd en kent vastgelegde _namespaces_ zoals `isbn` die met een `:` van elkaar worden gescheiden. Iedere volgende dubbele punt na de eerste is namelijk gewoon een vrij karakter dat je binnen de URI zelf van betekenis mag voorzien. Binnen `urn` is het een scheidingsteken.

De formeel gegarandeerde URI van een boek heeft dus de vorm `urn:isbn:9780140449136` en niet `isbn:9780140449136`. Ook al is die laatste op zichzelf een prima URI die waarschijnlijk veel meer gebruikt wordt dan de `urn` versie. Maar dat is een sociaal en organisatorische effect; een conventie. Het beleid is gebouwd op `urn:isbn:9780140449136`.

Ik heb gekozen om semantische context in de P-322 URI's op te nemen. De `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` identifier zegt dat er binnen het zelf gekozen scheme `p322` namespaces als `blog` bestaan die van een willekeurige identifier zijn voorzien.

Dat gaat best-wel-heel-erg-ver voor een startup. Het zegt daarom waarschijnlijk meer over mij en mijn obsessie met datasystemen dan over die blogs.

Maar zelfs als je een URI dus niet kunt aanklikken, betekent het iets.

Dat is de laag van minimale persistentie: vertrouw me dat deze naam blijft bestaan, ook als de deur dichtgaat.

## Techniek als dienaar

Maar mensen willen wél klikken en systemen willen betrouwbaar doorsturen. Daar komt de technologie in beeld: een klein, sober stukje infrastructuur met maar één taak: het verpakt de minimale identifier op zo’n manier dat het op internet bereikbaar wordt. Dat doen we met een scheme en dan noemen we het een _Uniform Resource Locator_ oftewel een URL. Iedere URI die een toegangsmechanisme en locatie specificeert is een URL.

Dus: iedere URL is een URI, maar niet iedere URI is een URL.

Als toegangsmechanisme gebruiken we op het web vaak `http` en `https` die ik nu even voor het gemak op één hoop gooi.

Een webadres als:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

is dus een prima URL. Maar eentje die geen persistentie communiceert. Daarom gebruiken we bij onze startup het adres `https://pid.p-322.com/` met daarachter de identifier. Zo krijgen we:

`https://pid.p-322.com/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

en omdat niet alle systemen even goed met die dubbele punten overweg kunnen, werkt:

`https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`

ook.

## De portier

Op `https://pid.p-322.com/` draait dat sobere stukje software. Het zoekt in een tabel de identifier op met de daarbij horende plek waar het blog nu staat.

Verhuist die pagina van:

`https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`

naar:

`https://p-322.com/archief-met-meuk/gertjan-snapte-er-niets-van`

dan passen we die tabel aan.

Je hoeft dus geen ingewikkelde beheersorganisatie in te richten. Een simpele portier is voldoende die een tabel heeft van identifiers en locaties. Voor die taak gebruiken we de Engelse term _to resolve_. De portier heet daarom een _resolver_. In het Nederlands krijg je dan lelijke anglicismen als resolven of resolveren. Brrr.

## Wil de ware PID nu opstaan

Wat is dan de echte ware pid? Is dat de URL `https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW` waar mensen en computers ook echt iets kunnen vinden? Of de URI `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` waar we de garantie voor afgeven?

In mijn wereld is het de URL. We doen dit om toegang tot informatie te verschaffen, anders wordt het mij te abstract. Ons beleid is ingericht om te zorgen dat de URL `https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW` hetzelfde blijft terwijl de onderliggende bron mag verhuizen.

## Maar ARK, Handle en DOI dan?

Wie deze sector volgt, denkt nu waarschijnlijk: "Hoe kun je het in vredesnaam over pids hebben zonder ARK, Handle of DOI te noemen?"

Het antwoord is simpel en misschien verrassend: je hebt ze voor persistentie niet strikt nodig.

Je kunt het prima regelen op je eigen internetadres. Persistentie staat niet gelijk aan “een Handle of ARK hebben”. Sommige organisaties zoals een startup, móéten misschien wel zonder. Er hangen vaak nogal wat eisen aan. Andere instellingen zijn van zichzelf vrijwel onsterfelijk en hoeven gewoon niet.

Daardoor krijg je de grappige situatie dat onze startup persistentie op dezelfde manier als het Rijksmuseum regelt. Vergelijk: `https://pid.p-322.com/<identifier>` met:

- `https://id.rijksmuseum.nl/<nummer>` voor tastbare objecten
- `https://data.rijksmuseum.nl/<nummer>` voor digitale metadata

In geen velden of wegen een ARK of Handle te bekennen. Persistentie is vooral werken aan vertrouwen. Dat leg je vast in je persistentiebeleid. Dat heeft [het Rijksmuseum](https://data.rijksmuseum.nl/policy/) uiteraard tot in de puntjes geregeld. Wij denken dat we het ook goed hebben gedaan. Ons beleid [kun je hier vinden](/nl/policy/persistency/).

Maar het helpt natuurlijk wel als je Rijksmuseum heet en geen P-322. Ik ben daarom toch dieper in Handle, ARK, en DOI gedoken. In het blog van volgende week laat ik dat zien en de rol die ze vervullen. Dan zet ik de verschillen naast elkaar en ga ik er ook eentje proberen aan te vragen als startup. Wordt vervolgd.

## Persistentiebeleid

Met of zonder ARKs en Handles: vertrouwen in de persistentie van je data is dus een opeenstapeling van maatregelen en beloftes.

Je belooft een lijst bij te houden van identifiers. Je belooft dat je een stukje software hebt draaien die de identifier naar een locatie doorstuurt. Graag beloof je ook dat de betekenis van je identifier gedocumenteerd is; en dat de koppeling van pid naar locatie niet zit opgesloten in een obscure database, maar in een open en bruikbare bron.

Dat vastleggen in beleid is veel belangrijker dan die Handle of ARK aanvragen.

De beloftes krijgen kracht als ze zo zijn ingericht dat ze onafhankelijk zijn van het bestaan van je organisatie. Een museum of kennisinstelling zal daarvoor misschien bij een archief of [DANS](https://dans.knaw.nl/nl/) aankloppen. Voor een startup is dat lastig. Er zijn eigenlijk geen instellingen die je daarbij kunnen helpen. Wij hebben ons persistentiebeleid dus ingericht op basis van open depots op het web.

Als een soort compromis tussen idealisme en realiteit.

## Het compromis buiten de deur

We hebben de code van onze resolver open source gemaakt. De koppelingen zelf deponeren we als een simpel databestand. De repository waar het allemaal in staat, is de bron van waarheid, met versiegeschiedenis: wanneer veranderde een koppeling, en waarom?

We hebben dat met een duur woord een _Authoritative External Resolver Repository (AERR)_ genoemd. Dat is geen bestaande term in de pid-wereld, maar onze naam voor dit beleidsmodel van “garanties-buiten-de-deur”.

De AERR is te vinden op: [https://github.com/GertjanFi/p322-open-pid-resolver](https://github.com/GertjanFi/p322-open-pid-resolver)

Dat is mijn persoonlijke GitHub-account, maar het had overal kunnen staan behalve bij P-322. Het is immers een verzekering tegen de dag dat de startup niet meer bestaat.

Mochten we verdwijnen en stoppen met betalen voor `p-322.com`, dan kan iedereen nog steeds de repository kopiëren, de resolver uitrollen, het bestand met koppelingen laden, en de pids terugvinden.

De originele domeinnaam heb je dan misschien niet, maar de identifiers blijven bestaan en worden opnieuw interpreteerbaar. Dat is wat je uiteindelijk in erfgoedcontext nodig hebt: niet onze eeuwige aanwezigheid, maar het vermogen tot continuïteit door overdracht.

## De tijdscapsule

Een AERR is eigenlijk een tijdscapsule. Maar hoe vind je die terug na de ondergang, als een gebruiker alleen nog:

`https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`

heeft? Zonder `p-322.com` is dat immers een dode link.

Hier leveren ARK- en Handle-resolvers hun echte waarde. Maar zoals ik al eerder zei: daarover meer in het blog van volgende week.

Onze AERR staat nu al live. Telkens wanneer we nieuwe data met een persistentiebelofte toevoegen, wordt die ook in de AERR opgenomen. Dat gaat helemaal automatisch. Daar hoeven we niets meer voor te doen. Hangt er een pid aan: dan staat het óók in de AERR. Al vallen we morgen om, je kunt er altijd bij.

Nou ja, altijd? Daar komt mijn disclaimer weer om de hoek kijken. Technische persistentie bestaat niet. Je kunt erbij zolang GitHub bestaat, en zolang mijn persoonlijke account online is. Daarom beloven we ook een _best-effort_ inspanning om partnerorganisaties te benaderen om te zorgen dat onze AERR blijft bestaan.

## Terug bij de fata morgana

En daarmee zijn we terug bij de fata morgana.

Deze hele inrichting ligt vast in ons persistentiebeleid. Het doel? Vertrouwen creëren in onze links. Dit moet anderen helpen geloven dat wij er alles aan doen om te zorgen dat onze informatie betrouwbaar beschikbaar blijft.

Of dat is gelukt, is aan jou wanneer je naar onze pids durft te verwijzen. Want een technisch persistent systeem bestaat net zomin als de fontein van de eeuwige jeugd.
