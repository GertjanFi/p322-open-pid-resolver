---
title: "Wat zoeken we eigenlijk? Dataset Discovery in het NDE Datasetregister op weg naar een dataspace."
date: "2025-12-18T00:00:00+00:00"
excerpt: "De derde <em>lesson-learned</em> van het datahub koloniale collecties dienstplatform.<br/><br/>Het NDE Datasetregister is nu vooral een technische ingang naar endpoints, maar voor een dienstplatform als de Datahub Koloniale Collecties is dat niet genoeg. We moeten weten wat we werkelijk binnenhalen: de inhoud, de technische kwaliteit, de juridische voorwaarden en de ethische gevoeligheden. Door discovery te verbreden naar deze vier kaders wordt het datasetregister een betekenisvol instrument dat bronhouders helpt verantwoord te publiceren en dienstplatformen voorbereidt op een dataspace-logica."
teaser: "Een dataset vinden is niet hetzelfde als begrijpen wat je binnenhaalt. Waarom het NDE Datasetregister pas écht waarde krijgt als discovery verder kijkt dan techniek — en hoe vier kaders de weg openen naar een dataspace."
---

Wanneer je werkt aan een dienstplatform zoals de [Datahub Koloniale Collecties](https://app.colonialcollections.nl/en), ontdek je vroeg of laat een moment waarop techniek botst op inhoud. Deze derde _lesson-learned_ is daarom deels les en deels hoopvolle verwachting.

In het [laatste deel van de vlogs](https://www.p-322.com/nl/posts/20251127-dienstplatform-datahub-koloniale-collecties-deel-3-naar-dataspace/) waarin ik de achtergronden van de datahub demonstreerde, liet ik zien dat tussen onschuldige objectmetadata ineens een dataset opdook die menselijke resten bleek te bevatten. Op zo’n moment voel je dat een technisch juist geïmporteerd endpoint nog niet betekent dat je begrijpt wat je binnenhaalt. Je hebt een ingang nodig die je helpt om datasets te lezen zoals je archieven leest: met context, met aandacht en waar je de juiste vragen aan kan stellen.

Het [NDE Datasetregister](https://datasetregister.netwerkdigitaalerfgoed.nl) is daarvoor een fantastische toegangspoort, want het bevat de gepubliceerde beschrijvingen van datasets die erfgoedinstellingen aanmelden. Toch is het in zijn huidige vorm vooral een technisch instrument dat antwoord geeft op de vraag welke endpoints bestaan, niet welke dataset je werkelijk aanraakt. Daarom is het tijd om opnieuw naar _discovery_ te kijken, niet als een technische lijst maar als een instrument dat datasets op vier kaders beschrijft: inhoudelijk, technisch, juridisch en ethisch.

## Wat het datasetregister nu doet

Het datasetregister verzamelt datasetomschrijvingen van instellingen die hun metadata publiceren volgens de standaarden van [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl). De software maakt gebruik van datasetbeschrijvingen die bronhouders publiceren in lijn met de specificaties van de _[Requirements for Datasets](https://docs.nde.nl/requirements-datasets/)_. Het register zelf is open-source beschikbaar via [GitHub](https://github.com/netwerk-digitaal-erfgoed/dataset-register) en wordt doorlopend bijgewerkt door zowel instellingen als ontwikkelaars.

Iedere datasetbeschrijving verwijst naar distributies zoals datadumps, OAI-PMH-feeds, SPARQL en andere API-endpoints, en geeft informatie over licentie, maker, taal, omvang, versie en updatefrequentie. Het [Nationaal Archief](https://www.nationaalarchief.nl) schrijft in zijn beheerinformatie dat het register inmiddels meer dan tienduizend datasetbeschrijvingen bevat waarmee het een nationale basis vormt voor zoekmachines, ontwikkelaars en onderzoekers.

Voor de datahub Koloniale Collecties werkt het register nu als volgt: we hebben een lijst van datasets, daarvan halen we de adressen op uit de catalogus waarna we alle endpoints die actief en geldig zijn bezoeken en daar de data ophalen. Het register vertelt dus waar iets staat, maar nauwelijks wat het is, hoe gevoelig het is, voor wie het bedoeld is of onder welke voorwaarden het gebruikt mag worden.

## Een knowledge graph van datasetomschrijvingen

De datahub zou enorm geholpen zijn met een datasetregister als discovery-dienst: een knowledge graph van datasetbeschrijvingen. Door middel van een geformaliseerde zoekvraag zou de datahub dan automatisch de relevante en geschikte datasets kunnen vinden. Een bronhouder die wil bijdragen aan de dienst kijkt naar de query en zorgt dat de omschrijving binnen de kaders valt als er een match is.

Als dienstplatform zijn er vier categorieën waar we op willen toetsen: de inhoudelijke, technische, juridische, en ethische kaders.

## Inhoudelijk kader

Het eerste kader gaat over wat er ín een dataset zit. Een dienstplatform kan niet alleen leunen op technische kenmerken, maar moet de context van de dataset kennen: binnen welke tijdvakken hij valt, welke geografische reikwijdte hij heeft en welk type materiaal erin beschreven wordt. Een dataset kan culturele objecten bevatten, archieven, foto’s, natuurhistorische objecten, etc. In al deze gevallen horen herkomst, datering en materiële en immateriële context tot de informatie die discovery zou moeten ontsluiten. Ook de relatie met andere belangengroepen hoort hier zichtbaar te worden. Wie hebben er bijgedragen aan de dataset? Hoe zijn de herkomstrelaties? etc.

Bijvoorbeeld - voor de informatie in de datahub koloniale collecties is het volgende inhoudelijke kader gedefinieerd (zie: [welke informatie zit er in de datahub?](https://www.colonialcollections.nl/datahub/)). Het gaat om objecten met een koloniale context als:

- Ze zijn vervaardigd en/of verworven in Nederlandse handelsposten en koloniën;
- Ze zijn vervaardigd en/of verworven in handelsposten, koloniën en mandaatgebieden van andere moderne koloniale mogendheden;
- Ze zijn verworven buiten bovengenoemde gebieden maar in een context of als gevolg van koloniaal ongelijkwaardige machtsverhoudingen;
- Ze zijn verworven na de formele dekolonisatie, maar met een vermoedelijke eerdere geschiedenis van vervaardiging en/of verwerving in een koloniale context.

Door dit soort inhoudelijke metadata in de discovery te betrekken ontstaat ruimte om datasets te vinden op basis van betekenis en niet alleen hun technisch bestaan.

## Technisch kader

Het tweede kader is het terrein waarop het datasetregister nu het sterkst is. Het beschrijft de manier waarop data beschikbaar is: via welke formats, end-points of dumps, met welke updatefrequentie en met welke semantische structuur. De _Requirements for Datasets_ geven hiervoor duidelijke richtlijnen die aangeven hoe distributies beschreven moeten worden, welke metadata verplicht is en welke optioneel.

Maar ook voor technische discovery hebben we meer nodig dan alleen registratie door de bronhouder. Het zou geweldig zijn wanneer het datasetregister kan aangeven of een endpoint stabiel is, of een SPARQL- of OAI-PMH-feed betrouwbaar reageert, hoe vaak de data ververst wordt en of de dataset daadwerkelijk compatible is met een door NDE voorgeschreven datamodel (generiek [Schema.org](https://schema.org), of domeinmodellen zoals [Linked Art](https://linked.art), [RiC-O](https://ica-egad.github.io/RiC-O/), etc. ). Als dienstplatform wil je immers weten of de infrastructuur van de bronhouder een toekomstvaste bouwsteen is waar je veilig en reproduceerbaar mee kan werken.

## Juridisch kader

Het derde kader draait om rechten, licenties en toegangscategorieën. Iedere datasetbeschrijving bevat licentie-informatie, maar in de praktijk zegt een label als CC0 of CC-BY weinig over de feitelijke gebruiksvoorwaarden, zeker niet als het gaat om gevoelige of persoonsgebonden data. Bij discovery moet je daarom kunnen zien welke rechten van toepassing zijn, wie de data-eigenaar is, welke AVG-classificatie relevant is en of er beperkingen gelden voor toegang of hergebruik. Dat geldt dubbel bij koloniale data: gebruikers moeten weten of een dataset vrij herbruikbaar is, of alleen beschikbaar voor onderzoekers, of misschien zelfs uitsluitend voor gemeenschappen van herkomst. Juridisch kader is geen formaliteit maar een veiligheidsvoorziening, die voorkomt dat datasets ongewenst of onrechtmatig worden verwerkt.

Als NDE zich naar een toekomstige dataspace ontwikkelt dan gaan de juridische kaders een belangrijke rol spelen. De Europese Unie voert een beleid gericht op data soevereiniteit. Daardoor kunnen bronhouders gaan vereisen dat data enkel op servers onder EU jurisdictie verwerkt mogen worden, of door partijen die zich commiteren aan het Europese sanctieregime. Je mag dan alleen data verwerken als die niet ten gunste komt van landen als bijvoorbeeld Rusland of Iran.

Tot slot valt ook de in het erfgoed breed gekoesterde wens tot beperking van toegang tot data voor verwerking door grote AI-platforms onder de juridische kaders.

Geen van deze eisen valt op dit moment zonder technische dataspace implementatie te handhaven. Maar het is wel belangrijk dat welwillende dienstplatforms op juridische kaders kunnen selecteren, en dat het duidelijk is dat partijen die zich er niet aan houden op de hoogte hadden moeten zijn. Daarmee stel je een bronhouder in staat om rechtsgang te overwegen.

## Ethisch kader

Het vierde kader is het moeilijkste, en misschien wel belangrijkste. Datasets zijn geen neutrale containers, zeker niet wanneer ze gevoeligheden raken rond koloniale geschiedenis, representatie, menselijke resten of cultureel beladen objecten. Discovery moet daarom zichtbaar maken of een dataset zulke culturele of historische gevoeligheden heeft, welke afspraken de bronhouder met gemeenschappen heeft gemaakt en hoe die in metadata tot uitdrukking komen.

Daarbij kunnen mechanismen zoals [Local Contexts](https://localcontexts.org) helpen richting geven. In deze kenmerken kunnen de culturele rechten van inheemse volken worden vastgelegd waardoor duidelijk is welke community-tags, protocollen of beperkingen gelden. Verder zou het dienstplatformen helpen wanneer de bronhouder aangeeft of de aangeboden dataset materiaal bevat met menselijke resten. Dat kunnen foto's of video's zijn gemaakt tijdens gewapende conflicten of natuurrampen, maar ook culturele of natuurhistorische objecten uit een koloniale context. Met ethische discovery laat je niet alleen zien wat mag, maar vooral ook wat past, en het helpt voorkomen dat technische toegankelijkheid wordt verward met morele vanzelfsprekendheid.

Een andere kant van het ethisch kader is de ecologische duurzaamheid. Hoe 'groen' is de dataset? Het zou helpen wanneer bronhouders bijvoorbeeld inzage geven in energieverbruik, en groene IT-principes. Ik zou graag de discussie meemaken waarin het consortium koloniale collecties het toevoegen van een dataset afweegt: wat doe je met een dataset die koloniale objecten bevat maar waarvan de bronhouder gekozen heeft voor de goedkoopste technische oplossing en daardoor een zeer nadelige ecologische footprint heeft? Ontsluit je niet, als prikkel naar de bronhouder om te vergroenen? Of ontsluit je wel en weegt het belang van de herkomstgemeenschappen zwaarder?

## Hoe discovery op vier kaders eruitziet

Wanneer het datasetregister niet langer een lijst van endpoints is maar een Knowledge Graph van betekenisvolle datasetbeschrijvingen, dan verandert de manier van zoeken radicaal. De datahub kan dan vragen stellen die vandaag onmogelijk zijn:

- geef alle datasets die binnen de gedefinieerde koloniale context passen;
- én die minimaal een CC-BY-licentie hebben zonder gegevens die onder de AVG vallen;
- én, wanneer er menselijke resten in zitten, een extra transformatiestap start waarin die worden opgezocht en gemarkeert als 'enkel toegankelijk voor ingelogde bezoekers'.

Discovery wordt dan niet meer het technisch raadplegen van de oude Gouden Gids (voor iedereen geboren na 2000: [klik deze link met uitleg](https://nl.wikipedia.org/wiki/Gouden_Gids)), maar een contextbewuste afweging. De datahub zou in dat geval ook geen vaste lijst met ontsloten 'bronhouders' meer hebben, maar dynamisch data verwerken die via het datasetregister aangemeld wordt. Het zou bronhouders bovendien uitnodigen om vóór publicatie na te denken over inhoudelijke, technische, juridische en ethische implicaties. Daarmee wordt het datasetregister de motor voor metadata-gedreven governance, precies de stap die nodig is om naar een dataspace te bewegen.
