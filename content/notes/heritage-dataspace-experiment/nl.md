---
title: "Erfgoed en dataspaces: experiment 1"
date: "2026-01-21T00:00:00+00:00"
excerpt: "Dataspaces duiken steeds vaker op in erfgoedbeleid, maar wat betekenen ze technisch eigenlijk? In dit eerste experiment bouw ik een werkende dataspace-transactie met Europese open-source technologie: geen diagrammen, maar echte software die je lokaal kunt draaien. Stap voor stap laat ik zien hoe providers en consumers onderhandelen, wachten, en uiteindelijk data uitwisselen onder expliciete voorwaarden. Geen abstract beleid, maar een concreet teken van leven onder het woord ‘dataspace’."
teaser: "Wat gebeurt er als erfgoeddata niet zomaar open staat, maar via afspraken wordt gedeeld? Een hands-on experiment met dataspaces, van poort tot sleutel."
isAutoTranslated: false
---

In het digitaal erfgoed hoor je zo nu en dan de term: _dataspace_ oftewel dataruimte. Afgelopen jaar stak het ineens de kop op. Net genoeg om je af te vragen: wat betekent dat eigenlijk? En belangrijker: wat kan het echt? Is het een nieuwe term voor beleidsmakers? Of hangt er concrete technologie onder? Uit nieuwsgierigheid ben ik eind december 2025 op onderzoek uitgegaan. In een aantal experimenten heb ik gekeken wat het is, hoe het werkt en of ik een eigen dataspace kon bouwen. Je moet immers wat tussen het kerstdiner en de oliebollen. En met "bouwen", bedoel ik dus: werkende code voor een echte dataspace-transactie. Die je zelf ook kunt installeren. Op je computer.

[Je vindt het eerste experiment in de P-322 Github dataspace-experiments repository](https://github.com/p-322/dataspace-experiments).

Dit is het eerste blog over die experimenten. Ik ga mijn best doen om het toegankelijk te houden. Maar: dataspaces zijn wel gewoon servers die tegen elkaar aanpraten. Om te laten zien hoe dat werkt, ontkom ik niet aan techniek en het delen van code. Voor techneuten zal dat misschien niet diep genoeg gaan, maar die verwijs ik graag door naar de repository waar je alle code en container configuratie terug kunt vinden.

## Leeswijzer – kies je route

Dit is een lang artikel omdat ik **twee dingen tegelijk doe**:

1. uitleggen wat een dataspace is, en
2. laten zien hoe een dataspace daadwerkelijk werkt, met een concreet experiment.
   Je hoeft niet alles in één keer te lezen. Kies gerust een route:

- **🕐 ±5 minuten – Begrip & context**  
   Wat is een dataspace, waarom duikt het op in erfgoedbeleid, en wat maakt het anders dan “oude wijn in nieuwe zakken”?  
  → Lees: [Een dataspace: wat is dat eigenlijk?](#een-dataspace-wat-is-dat-eigenlijk)

- **🕒 ±15 minuten – Diepere inzichten zonder techniek**  
  Een algemene uitleg van het probleem dat een dataspace probeert op te lossen; en een overzicht van de begrippen, termen, en rollen.  
  → Lees: [Waarom een dataspace? En hoe ziet dat er dan uit?](#waarom-een-dataspace-en-hoe-ziet-dat-er-dan-uit)

- **🧠 Volledig – Het complete experiment inclusief code**  
  Alle stappen, codefragmenten, en experimentele demo.  
  → Lees: [Stap voor stap door het dataspace experiment](#stap-voor-stap-door-het-dataspace-experiment)

## Een dataspace wat is dat eigenlijk?

### De dataruimte en de nationale strategie digitaal erfgoed

Ruim een jaar geleden werkten de bevlogen mensen van het [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl) keihard aan de nieuwe [Nationale Strategie Digitaal Erfgoed](https://zenodo.org/records/14237069) voor 2025-2028. Ik had toen een aantal gesprekken waarin ze me uitlegden dat een belangrijk onderdeel de "dataruimte" zou zijn. En inderdaad: "Naar een dataruimte voor cultureel erfgoed voor het hele koninkrijk" is het eerste van de vier strategische doelen.

Uit de digitale strategie:

> "Uitwisselbaarheid van data is ook een belangrijke doelstelling van het Europese databeleid. De Europese datastrategie uit 2020 zet in op de ontwikkeling van zogenaamde ‘dataruimten’ (dataspaces), die het makkelijker moeten maken om gegevens uit te wisselen binnen en tussen sectoren. Voor de cultuursector streeft de Europese Commissie een common European dataspace for cultural heritage na, waarin erfgoedinformatie uit alle lidstaten vindbaar en toegankelijk is."

Dat betekende eigenlijk niet zoveel voor me totdat ik in oktober 2025 door NDE werd uitgenodigd om te spreken op de bijeenkomst _From data to blueprint_. [Europeana](https://www.europeana.eu/en) en het [Jewish Heritage Network](https://jhn.ngo) werken aan de [European Memory Data Space](https://blueprint.memorydataspace.eu) met als doel om Holocaust gerelateerd materiaal bij elkaar te brengen.

### Oude wijn in nieuwe zakken?

Tijdens die bijeenkomst sprak ik een specialist van een denktank die zich onder andere bezighoudt met de implementatie van dataspaces in Nederland.

Ik vroeg haar eerlijk.

“Is een dataspace nou iets nieuws? Als in echte technologie? Of hebben we ideeën die we al een jaar of vijftien financieren een nieuwe naam gegeven voor een volgende generatie subsidieverstrekkers en beleidsmakers?”

Ze begon met de gebruikelijke nuance.

“Dat hangt ervan af wie je het vraagt. Er zijn meerdere kanten.”

Daarna pauzeerde ze even, en zei toen:

“Eerlijk gezegd is het voor de meeste mensen vooral beleid. De behoefte om binnen een keten of netwerk van afdelingen en organisaties beheersbaar data met elkaar uit te wisselen. Als je dat wil en je bent daarmee bezig, dan is het al een dataspace.”

Ik fronste.

“Langs die lat is het Netwerk Digitaal Erfgoed al lang een dataspace... Net als het consortium Koloniale Collecties. En NWO-projecten als CLARIAH en ODISSEI.”

Ze knikte, maar voegde er meteen iets aan toe.

“Dat gaat voor de techneuten in onze community vaak niet ver genoeg. Die zeggen: je bent pas een dataspace als je ook de technologie implementeert.”

Ik zal bekennen dat ik me daar wel wat bij kon voorstellen. Maar ja, welke technologie dan?

### Dataspace tussen de oliebollen

Tussen kerst en oud & nieuw dacht ik daarom: "Goh, als er technologie is? Zou ik dat dan ook kunnen? Een dataspace maken?". Ik ben dus de eerste stappen gaan zetten. Je gaat hier mijn leertraject zien. Ik ga dingen doen waarvan anderen zich misschien afvragen: "Maar waarom??" Of: "Hoe kun je dat nou doen/missen?"

Ik schrijf dit blog om te helpen, misschien dat je daarom mijn fouten niet meer hoeft te maken.

> Een dataspace op zijn kleinst zijn twee partijen die data willen uitwisselen. Een _provider_ en een _consumer_. In NDE termen zit dat het dichtste bij Bronhouder en Gebruiker/Dienstplatform. De consumer is in ieder geval geen eindgebruiker maar een partij die via een app, website, of andere infrastructuur de data verder wil verwerken.

## Waarom een dataspace? En hoe ziet dat er dan uit?

### Wat is de bestaande situatie?

Binnen NDE wisselen bronhouders en gebruikers nu al data uit via het web. Op een server van de bronhouder staan erfgoedgegevens en die zijn open beschikbaar via een zogenaamde API. Zie dat maar als een webadres dat niet voor mensen maar voor machines is bedoeld.

De software van de gebruiker gaat naar de webAPI, vraagt om data, en krijgt die opgestuurd. Simpel.

Dat betekent dat de bronhouder nul controle heeft. Het is open data, dus een open webAPI. Iedereen kan om data vragen, en iedereen krijgt die data.

### Welk probleem moet een dataspace oplossen?

Als bronhouder/provider weet je niet wie de data vraagt en wat diegene ermee gaat doen.

En als gebruiker/consumer weet je niet wat er in de data zit.

Dat is een probleem.

Ook in een open landschap als het erfgoed.

In het afgelopen anderhalf jaar dacht ik verschillende keren: hadden we hier maar een oplossing voor.

Bijvoorbeeld toen we voor de Koloniale Collecties gegevens beschikbaar gingen maken over objecten waarin menselijke resten zijn verwerkt. Vanuit een ethisch oogpunt moet je die misschien niet aan de hele wereld tonen. Soms wil je als bronhouder bepaalde data alleen open delen met onderzoekers.

En die keer dat ik bij een NDE knooppunt het gesprek voerde over het open beschikbaar stellen van gegevens - alleen niet om AI mee te trainen.

Of de realisatie dat meer controle op toegang een consequentie is van een veranderende en polariserende wereld. We kunnen niet meer naïef alles zomaar beschikbaar stellen. Er zijn groepen en landen die niet het beste met ons voor hebben. Die bijvoorbeeld belang hebben bij het saboteren van de relatie tussen Nederland en Indonesië. Of vanuit extremistische overtuiging informatie willen misbruiken. Om een bepaald beeld op onze cultuur te promoten, of juist te vernielen.

Meer grip op de toegang tot data. Met zo min mogelijk afbreuk aan het open karakter van erfgoed en samenleving.

Dat is een hele uitdaging.

> Misschien is een dataspace daarom wel het weerbaar maken van open infrastructuur.

### De Dataspace Connector

Net als in de huidige situatie praten in een dataspace de consumer en de provider nog steeds direct met elkaar. De basis blijft een _peer-to-peer_ systeem zonder centrale macht die alles regelt, toetst, en controleert.

Het verschil is dat consumer en provider via een laag infrastructuur met elkaar praten: de [Eclipse Dataspace Connector](https://projects.eclipse.org/projects/technology.edc). De wat oudere techneuten die vroeger Java programmeerden, zullen even fronsen: want Eclipse dat was toch die programmeeromgeving? Ja inderdaad: díe Eclipse. Maar daaruit is een Franse stichting ontstaan die open source software beheerd.

En dat is belangrijk: die EDC-laag is dus open en kan iedereen vrij implementeren. Daarmee is de technologie onder de dataspace niet van een EU instelling, of een bedrijf, of een land. Het is ook geen korte termijn oplossing in een tijdelijk gefinancierd project. De EDC is van nature open en _here-to-stay_ zeg maar.

De EDC regelt het publiceren en ontdekken van data, de onderhandeling, evaluatie, en de gecontroleerde uitvoering van de dataoverdracht tussen provider en consumer. Zonder de EDC is er geen dataspace.

### De bronhouder (Provider)

In een dataspace meldt de provider de dataset (een _Asset_) aan in zijn catalogus. Dat klinkt misschien als het datasetregister met dat verschil dat het niet centraal is. Het is geen netwerkdienst. De catalogus publiceert de provider zélf via zijn eigen EDC. Het is daarom beter vergelijkbaar met de publicatie van de datasetomschrijving: ook die staat volgens de DERA bij de bronhouder.

In de catalogus van de provider staat niet de data en het is ook geen toegang tot de webAPI waar de data is te vinden. In een dataspacecatalogus registreer je een voorstel (een _Offer_): onder deze voorwaarden mag een consumer zich bij mij melden om toegang tot de data te krijgen.

De provider doet dat via de Provider Management API van de EDC implementatie op zijn server.

### De catalogus

Hoe weet een consumer welke assets er binnen de dataspace worden aangeboden? Omdat het een peer-to-peer systeem is, kan er geen sprake zijn van een verplichte centrale waarheid waarin "alle offers" van providers staan. Dat is een bewuste ontwerpkeuze.

Een dataspace heeft geen centrale macht.

Geen _single point of failure_.

Geen impliciete noodzaak om alles te indexeren.

De consumer kent (via configuratie, governance, of een onboarding traject) bepaalde providers. En houdt een eigen lijst van provider-endpoints bij. Bij iedere bekende provider vraagt de consumer een catalogus op. Het verzamelen van de offers in die catalogi doet de consumer daarna lokaal zelf. Daardoor heeft de consumer maximale soevereiniteit, maar ik ben wel bang dat het voor geen meter schaalt. Dit werkt misschien voor pilots, gesloten consortia, en een experiment zoals dat van mij - maar niet bij grote netwerken van 100+ providers.

Ook al is er geen vereiste centrale index: dat betekent gelukkig niet dat het niet kan. In de praktijk zullen er in een dataspace één of meer partijen zijn die een gefedereerde catalogus aanbieden. Dit is de plek waar voor mij intuïtief het NDE datasetregister zit.

Een federatieve catalogus is een dienst die de provider endpoints afloopt en de metadata uit hun catalogi ophaalt. Net als het datasetregister heeft de catalogus een rol in de _discovery_ van datasets. Het bevat niet de data zelf. Het is geen autoriteit. En het onderhandelt ook niet tussen consumer en provider. De gefedereerde catalogus staat er volledig naast.

In grotere dataspaces zullen er waarschijnlijk meerdere thematisches, of domeinspecifieke catalogi zijn. Binnen de NDE context zou dat een register met koloniale datasets kunnen zijn of WO2-datasets; of datasetregisters speciaal voor het bibliotheekdomein, voor musea of archieven.

Net als bij NDE publiceren providers datasetomschrijvingen in de vorm van Offers - alleen nu via hun EDC-catalogus. In de offer bepaalt de provider zelf wát er opgehaald mag worden, door wie, en onder welke voorwaarden.

### Gebruiker/Dienstplatform (Consumer)

Om een datatransactie te starten meldt de consumer zich altijd bij de provider. Het maakt niet uit of de consumer eerst een federatieve catalogus heeft geraadpleegt of niet.

Om contact met een provider te zoeken, gebruikt de consumer de Consumer Management API van zijn eigen EDC-server.

> **Belangrijk**: iedere deelnemer aan een dataspace heeft dus een eigen server met een EDC dataspace connector. Afhankelijk of je als provider of consumer handelt, gebruik je de Provider of Consumer Management API van die eigen EDC. In gesprekken kwam ik mensen tegen die dachten dat een makelaar of broker de EDC leverde. Dat is niet het geval! Er is geen tussenpartij die de EDC faciliteert. Een dataspace is nog steeds een peer-to-peer netwerk.

De EDC's van de deelnemers in de dataspace communiceren onderling door middel van het [Dataspace Protocol (DSP)](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/).

De consumer meldt zich bij de catalogus van de provider. Als er een interessant offer is met een dataset dan vraagt de consumer aan de provider of er een afspraak over het gebruik van die data gemaakt kan worden. In dataspace termen wordt dan een _Contract Negotiation_ in gang gezet.

De provider kan de eisen zo aanbieden dat de EDC die automatisch toetst. Dat vergt wel dat er een betrouwbare partij is die de claim van de consumer kan borgen. Stel de provider wil alleen onderzoekers toegang geven, dan moet iemand kunnen garanderen dat de consumer ook echt een onderzoeker is. Daar zit een complexe wereld aan infrastructuur en organisatie achter.

Gelukkig laten de dataspace specificaties in het midden hoe de voorwaarden worden gecontroleerd. De provider kan de voorwaarden ook algemener formuleren en achteraf handmatig nagaan of de consumer zich er aan heeft gehouden. Dat is vergelijkbaar met bijvoorbeeld een CC-BY-SA, of een GPL licentie. In beide gevallen accepteer je de voorwaarden die aan de licenties verbonden zijn. In ultimo betekent dat wanneer je die voorwaarden breekt, de andere partij achteraf een grondslag heeft om te procederen.

Zodra de consumer EDC de voorwaarden accepteert, stelt de provider EDC een _Contract Agreement_ beschikbaar dat de basis vormt voor het _Transfer Process_. Dit is het moment waarop een formeel akkoord wordt omgezet naar operationele toegang.

Om de toegang tot de data te verzilveren haalt de Consumer EDC een sleutel op die we de _Endpoint Data Reference_ (EDR) noemen. Deze sleutel is gekoppeld aan een contractafspraak, een transferproces, en een bepaalde asset. De sleutel blijft maar een beperkte tijd geldig. Na het verlopen van de sleutel moet de consumer opnieuw contractonderhandelingen starten.

Met de EDR gaat de consumer naar het data EDC endpoint van de provider. Met een geldige EDR verkrijgt de consumer daar toegang tot de data.

### Contractonderhandeling en data transfer

De hele dataspace-transactie bestaat uit twee processen: de contractonderhandeling, en het transferproces. In EDC-termen noemen we dat de _Control Plane_ en de _Data Plane_.

De **Control Plane** brengt overeenkomsten tot stand en bestuurt. Het verplaatst geen data. De control plane verzorgt catalogusuitwisseling, contractonderhandeling, policy-evaluatie, identiteits- en trustchecks, en het initiëren en monitoren van transferprocessen. Het resultaat van de control plane is toestemming en instructie: wie krijgt onder welke voorwaarden toegang tot welke datarepresentatie. De control plane gaat over vertrouwen, afspraken en legitimiteit.

De **Data Plane** voert de daadwerkelijke dataoverdracht uit op basis van een bestaande overeenkomst. De data plane ontvangt een EDR van de control plane, valideert de bijbehorende credentials, haalt de data op bij de bron, en levert die door aan de consumer. De data plane beslist niets over toegang of beleid; het voert uitsluitend uit wat contractueel al is toegestaan. De data plane gaat over transport, beveiliging en uitvoering.

## Stap voor stap door het dataspace experiment

### Data server

In het experiment ben ik begonnen met het maken van een basale server met een API die op `http://localhost:7070/hello` data beschikbaar stelt. Het ding is nog geen 20 regels code.

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/server.ts
lang: ts
start: 1
end: 19
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/server.ts
  label: server.ts
```

Wanneer je dat adres aanroept dan krijg je terug:

```p322:jsonblock
start: 1
value: |
  {
    "message": "Hello, Dataspace",
    "ts": "2026-01-07T14:47:50.462Z",
    "dataset": [
      {
        "id": "a1",
        "title": "Example record",
        "license": "CC0"
      }
    ]
  }
```

Geen spannende dataset, maar voor nu voldoende.

### Provider en Consumer EDC's

In de huidige situatie komt al het verkeer naar die basale server om data op te halen. Dat willen we in een dataspace niet meer. In een dataspace loopt er een DSP-verbinding van de edc-consumer naar de edc-provider. Die moeten we dus opzetten.

Je kunt van de grond af EDC implementeren op basis van de [Connector code op Github](https://github.com/eclipse-edc). Maar dat lijkt nogal een gedoe. Het schijnt een _low-level_ codebase te zijn waarin je veel zelf moet doen, instellen, en regelen. Ik werd gewaarschuwd dat er een behoorlijk stevige _learning curve_ is. Niet waar je wil starten als je een eerste experiment doet.

Er zijn inmiddels een paar leveranciers die _higher level_ EDC implementaties bieden met extra features die configuraties makkelijker maken en complexiteit in het afhandelen van verbindingen vereenvoudigen. Daar is het Duitse [Sovity](https://sovity.de/en/sovity-en/) er één van. Zij leveren naast hun Enterprise dienst ook een [Sovity Community Edition](https://github.com/sovity/edc-ce) waarmee je zelf het één en ander kan. Voor deze experimenten ben ik daarmee begonnen.

Omdat ik verder geen andere implementaties heb getest, is dit niet het moment om verschillende EDC oplossingen met elkaar te vergelijken. Mocht daar wel behoefte aan zijn, laat me dat dan vooral weten.

Om EDC te gebruiken heb je een plek nodig om gegevens op te slaan. Sovity CE vereist een PostgreSQL-database. De Provider slaat daar bijvoorbeeld op welke Assets en Offers er beschikbaar zijn, en de voorwaarden.

Voor het experiment hebben we twee EDC's nodig: eentje voor de provider die vóór de basis webserver komt te staan, en eentje voor de consumer die data bij de provider wil ophalen. Om al deze bewegende delen van het experiment op te zetten, maak ik gebruik van vijf Docker containers:

- api: de basis webserver met de echte data
- provider-db
- consumer-db
- edc-provider
- edc-consumer

### De dataspace-transactie

De dataspace-transactie heb ik in Typescript geschreven en wordt met Node uitgevoerd. In de transactie zijn de stappen afzonderlijk gemodelleerd en in het experiment worden ze achter elkaar uitgevoerd.

```p322:stream
provider: cloudflare
uid: 7c94c1bb7b0a1dd58abefca85cbdeab0
aspect: 16/9
start: 00:00:00
```

### 1. Provider: ensure asset (Control Plane)

_Je bouwt als Provider eigenlijk een muur om je basis webserver. In die muur open je een poort waar je de toegang controleert._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/01-ensure-asset.ts
lang: ts
start: 1
end: 117
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/01-ensure-asset.ts
  label: 01-ensure-asset.ts
```

Stap 1 is vrij fundamenteel: de provider verklaart dat er iets is om over te onderhandelen. Er wordt een asset geregistreerd in de Provider Management API, inclusief een verwijzing naar de feitelijke brondata op. Daarmee ontstaat geen toegang en geen publicatie, maar wel een ankerpunt: een benoemd object dat later via voorwaarden en contracten zichtbaar kan worden in de dataspace. Zonder deze stap is er niets om aan te bieden; zonder contractdefinitie blijft het aanbod onzichtbaar. Het is dus geen publicatie, maar een voorbereidende belofte: “hier bestaat data, en ik ben bereid die onder voorwaarden beschikbaar te gaan stellen.”

De implementatie is bewust transparant gehouden. De code begint met een check: komt het `asset-id` al voor in de provider-catalogus? Bestaat het al, dan wordt niets aangepast. Maar iedere keer dat je mijn experiment draait, worden alle containers en data vernietigd en opnieuw opgebouwd, dus meestal zal de stap een nieuwe asset moeten registreren. Assets hebben minimale metadata en een _DataAddress_ van voor nu het type `HttpData`. Dat DataAddress wijst naar de interne container-URL (`http://localhost:7070/hello`), waar de EDC straks de consumer toegang toe gaat geven.

Na registratie volgt in het experiment een expliciet controle moment. De data wordt van de dataserver opgehaald buiten EDC om. Dat pad is bewust: één keer open zoals gebruikelijk, en dan straks via de stadspoort. Het verschil zit niet in de bytes, maar in de belofte eromheen. Zo kunnen we zien dat de data er is en dat we dezelfde gegevens krijgen als wanneer we ons straks bij de poort melden. Dit stukje hoort dus niet bij de dataspace-transactie.

Voor experiment 1 is er slechts één protocol, één endpoint en één asset, met minimale metadata.

### 2. Provider: ensure contract-definition (Control Plane)

_De provider kan, als een middeleeuwse stadsbestuurder voorwaarden stellen die de wachters bij de poort moeten gaan controleren._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/02-ensure-contract-definition.ts
lang: ts
start: 1
end: 106
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/02-ensure-contract-definition.ts
  label: 02-ensure-contract-definition.ts
```

Dit is het moment waarop een asset ophoudt een stille belofte te zijn en een aanbod wordt. Met een contractdefinitie legt de provider vast onder welke beleidsregels een asset onderhandelbaar is. Pas hier ontstaat iets dat in een catalogus kan verschijnen: geen data, maar een offer. De contractdefinitie koppelt een selectie van assets aan één of meer voorwaarden (policies) en zegt daarmee niet wie er binnen mag, maar wanneer een onderhandeling überhaupt zin heeft. Zonder deze stap blijft de catalogus leeg, hoe rijk de onderliggende data ook is.

De code is opgezet als een beheerhandeling die je zonder nadenken opnieuw kunt draaien. Eerst wordt een contractdefinitie opgebouwd met een vast id, een expliciete verwijzing naar zowel een access policy als een contract policy, en een simpele selector die precies één asset aanwijst op basis van het id. Vervolgens kijken we via de Provider Management API of deze definitie al bestaat. Is dat het geval, dan blijft alles ongemoeid. Bestaat het niet, dan wordt het offer aangemaakt.

Mijn logging neemt nadrukkelijk de tijd om te duiden wat hier gebeurt: de gebruikte policy heet “`always-true`”, maar die naam is semantisch, geen toets. De data is dus niet ineens vrij toegankelijk. Toegang vereist nog steeds een geslaagde contractonderhandeling en een expliciet transferproces. Always-true maakt alleen duidelijk dat er in de onderhandeling en transfer geen blokkades zijn.

Voor experiment 1 is hier bewust gesneden. Er is precies één asset, één selector en één policy, die zowel access- als contractpolicy is. Er is geen versiebeheer, geen variatie in voorwaarden en geen semantiek voorbij het absolute minimum.

### 3. Consumer: fetch catalog (Control Plane)

_Nu gaat de consumer uitzoeken wie er in een stad op de markt staan._

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/03-fetch-catalog.ts
lang: ts
start: 1
end: 108
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/03-fetch-catalog.ts
  label: 03-fetch-catalog.ts
```

De consumer kijkt voor het eerst naar buiten. Niet om data op te halen, maar om te ontdekken wat er aangeboden wordt en onder welke voorwaarden. Via een catalogusverzoek vraagt de consumer zijn eigen connector om - namens hem - bij de provider te informeren welke datasets en offers beschikbaar zijn. Wat terugkomt is geen lijst met bestanden, maar een overzicht van onderhandelbare voorstellen: datasets gekoppeld aan policies. Deze stap is dus pure _discovery_. Het markeert de overgang van interne voorbereiding (stap 1 en 2) naar interactie binnen de dataspace.

De implementatie maakt dat expliciet zichtbaar. De consumer stuurt via zijn eigen Management API een `CatalogRequest`, waarin het adres van de provider en het gebruikte protocol zijn vastgelegd. De edc-provider bouwt daarop een antwoord, dat door de edc-consumer wordt ontvangen en geïnterpreteerd. Uit die respons worden drie dingen gedistilleerd: het `participant-id` van de provider, de beschikbare dataset en de bijbehorende offer-policy. Dat offer is essentieel; zonder policy valt er niets te onderhandelen. Omdat catalogusoffers in deze experimentele praktijk soms onvolledig zijn, volgt een normalisatiestap. Daarin worden ontbrekende velden expliciet aangevuld, zodat de volgende stap – het indienen van een `ContractRequest` – niet stukloopt op impliciete aannames in de management API. Wat hier gebeurt is dus minder “lezen” dan “voorbereiden op antwoord geven”.

Voor experiment 1 zijn de vereenvoudigingen bewust grof. Er wordt exact één (de eerste) dataset gekozen, zonder filtering of paginering. Ontbrekende participant-ids krijgen vaste defaults. De catalogus wordt niet volledig gevalideerd; alleen wat strikt nodig is voor onderhandeling wordt aangeraakt.

### 4. Consumer: negotiate contract (Control Plane)

_De consumer weet dat er een interessante koopman op de markt staat en besluit zich te melden bij de stadspoort_

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
lang: ts
start: 1
end: 119
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
  label: 04-negotiate-contract.ts
```

In EDC-termen is dit het formele moment van aankloppen. De consumer zet een catalogusoffer om in een expliciet verzoek aan de provider: mag ik deze asset gebruiken onder de voorwaarden die jij hebt gepubliceerd? Dit is geen technische datatransfer, maar een juridische en semantische handeling. De onderhandeling resulteert, bij succes, in een contract agreement dat beide connectors bindt. Pas vanaf dit punt bestaat er een gedeelde werkelijkheid waarin “toegang” betekenis heeft binnen de dataspace.

De code maakt deze stap concreet. Op basis van de eerder opgehaalde catalogusinformatie wordt een `ContractRequest` opgebouwd in JSON-LD-vorm, met expliciete vermelding van provider en consumer, het gebruikte protocol en de policy die als offer fungeert. Omdat EDC hier streng is, wordt de offer opnieuw genormaliseerd: ontbrekende velden zoals _target_, _assigner_ en _assignee_ worden expliciet ingevuld om ambiguïteit te vermijden. Het verzoek wordt vervolgens via de Consumer Management API ingediend, waarna de onderhandeling asynchroon plaatsvindt. De code blijft niet afwachten maar pollt doelgericht tot de onderhandeling de staat `FINALIZED` bereikt. Op dat moment wordt het contract `agreementId` uitgelezen en vastgelegd als juridisch fundament voor alles wat hierna volgt.

Voor experiment 1 is dit uitgekleed. De onderhandeling gebruikt één vast protocol, zonder alternatieven of _fallback_. Statusverwerking is binair: geslaagd of kapot. Er zijn geen _events_, geen _retries_ en geen semantische foutafhandeling. De normalisatie van offers is een pragmatische ingreep, geen ideaal voorwaardenmodel. Het doel is niet volledigheid, maar zichtbaarheid van het mechanisme.

### 5. Consumer: start transfer (Control Plane)

We komen nu een beetje aan het einde van de houdbaarheid van de metafoor...

_Er gaat een luikje in de poort open waardoor de poortwachter straks een sleutel aanreikt waarmee de bezoeker zélf de poort kan openen_

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/05-start-transfer.ts
lang: ts
start: 1
end: 103
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/05-start-transfer.ts
  label: 05-start-transfer.ts
```

Een abstract akkoord gaat in deze stap tastbaar worden. Het contract uit de vorige stap bestaat, maar zolang er geen transferproces is gestart, blijft het een "papieren" werkelijkheid. Met deze stap vraagt de consumer de provider om het afgesproken recht om te zetten in operationele toegang. Er stroomt nog geen data, maar de infrastructuur wordt voorbereid: de wachters worden geïnstrueerd. Dit is de overgang van juridische toestemming naar technische mogelijkheid, en daarmee een cruciale schakel tussen onderhandeling en gebruik.

De code maakt deze overgang expliciet en controleerbaar. Op basis van het eerder verkregen contract `agreementId` wordt een `TransferRequest` opgebouwd. Daarin staat vastgelegd welk contract van kracht is, welk protocol wordt gebruikt en dat het om een actieve _pull_ door de consumer gaat. Het verzoek wordt via de Consumer Management API bij de provider ingediend, waarna beide connectors het transferproces gezamenlijk orkestreren. De consumer wacht niet blind, maar volgt de status van het proces totdat deze de toestand `STARTED` bereikt. Dat moment is betekenisvol: de provider heeft de transfer geaccepteerd en intern alles klaargezet om toegang te verlenen. De logging benadrukt bewust dat dit nog geen dataverkeer is, maar een voorbereide mogelijkheid.

Voor experiment 1 zijn hier duidelijke vereenvoudigingen aangebracht. Er wordt uitsluitend een pull-variant gebruikt en slechts één vast protocol ondersteund. De `TransferRequest` is bewust niet volledig JSON-LD-conform, maar aangepast aan de verwachtingen van de gebruikte EDC-implementatie. De status `STARTED` wordt als voldoende beschouwd; afronding en foutpaden blijven buiten beeld. Het doel is inzicht, niet volledigheid.

### 6. Consumer: fetch EDR (Control Plane)

_De sleutel wordt overhandigd_

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/06-fetch-edr.ts
lang: ts
start: 1
end: 109
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/06-fetch-edr.ts
  label: 06-fetch-edr.ts
```

De dataspace houdt nu op abstract te zijn. De transfer is gestart, de voorwaarden zijn geaccepteerd, en nu verschijnt de EDR: de _Endpoint Data Reference_. Dat is een tijdelijk recht om de bestaande poort te gebruiken. De EDR combineert twee dingen die strikt bij elkaar horen: een _data endpoint_ en een autorisatiecode (we noemen dat een _token_). Samen vormen ze de concrete vertaling - de operationalisering - van het contract en de transfer naar een uitvoerbare handeling. Zonder EDR blijft toegang een belofte; met EDR wordt het uitvoerbaar.

De code benadert dit als een geduldig onderhandelingsmoment met de eigen connector. Via de Consumer Management API wordt herhaaldelijk aan de provider gevraagd of er voor het gegeven transferproces al een _data address_ beschikbaar is. Omdat de provider dit niet altijd onmiddellijk uitgeeft, wordt gepolld tot een object verschijnt dat zowel een endpoint als een autorisatietoken bevat. Zodra die combinatie aanwezig is, wordt expliciet gemaakt wat er ontvangen is: een kortlevend token, strikt gekoppeld aan dit contract en deze transfer.

Omdat het experiment lokaal draait en niet op een netwerk, wordt het door de provider geretourneerde endpoint herschreven naar een host-adres. Die omzetting is puur praktisch; inhoudelijk blijft het dezelfde poort die door de edc-provider wordt bewaakt. In eerdere stappen speelt dit onderscheid niet, omdat de consumer nooit zelf een provider-endpoint aanroept maar dat altijd via zijn EDC doet. Pas bij het uitgeven van de EDR verlaten we de Control Plane en betreden we de Data Plane.

Voor experiment 1 spelen de volgende aannames. Er wordt uitgegaan van precies één EDR met een eenvoudig tokenmodel. De polling is grof en tijdgebonden, zonder nuance of terugkoppeling van fouten. De endpoint-herschrijving is _hardcoded_ en contextafhankelijk. Het doel is niet robuustheid, maar laten zien waar de sleutel vandaan komt en wat het precies opent.

### 7. Consumer: data access (Data Plane)

_Door de poort naar binnen_

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/07-data-access.ts
lang: ts
start: 1
end: 78
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/07-data-access.ts
  label: 07-data-access.ts
```

Hier komt alles samen. De contractonderhandeling is afgerond, de transfer is gestart en de EDR is opgehaald. Nu wordt de beschermde data daadwerkelijk door de consumer benaderd. Dit gebeurt buiten de Management API’s van de EDC om, via een regulier HTTP-verzoek naar het publieke data-endpoint van de provider. Dat is dus niet het `localhost:7070/hello` endpoint! Dat blijft veilig achter dat publieke data-endpoint van de provider staan.

Het verschil met een gewone API-call zit niet in het protocol - we gebruiken nu immers gewoon HTTP in plaats van DSP - maar in de context: deze toegang werkt alleen omdat er een geldig contract en een bijbehorend transferproces bestaan. Dit is waar dataspace-logica zich vertaalt naar concrete bytes.

De code laat die overgang expliciet zien. Op basis van de eerder verkregen EDR wordt een HTTP `Authorization-header` opgebouwd, hetzij als ruwe tokenwaarde, hetzij als _Bearer-token_. Vervolgens wordt een request gedaan naar het publieke data endpoint van de provider. Er wordt geen EDC-API meer aangesproken; de call is technisch niet anders dan een standaard `fetch`. De provider valideert het token, koppelt het aan het juiste contract en haalt namens de consumer de onderliggende data op bij `localhost:7070/hello`. De _response_ wordt door de consumer gecontroleerd op status en inhoud, waarna de _body_ – indien mogelijk – als JSON wordt geïnterpreteerd. Wat hier terugkomt is dezelfde data die in stap 1 rechtstreeks werd opgehaald, maar nu geleverd via een expliciete, afdwingbare overeenkomst binnen een dataspace.

> Yay! Experiment 1 geslaagd: we hebben een werkende dataspace-transactie gebouwd!

Voor experiment 1 is deze stap bewust minimaal gehouden. Er wordt altijd het _root-endpoint_ aangeroepen, zonder onderscheid naar assets of representaties. Authenticatie is versimpeld tot één header-variant en er is geen _retry-_ of foutstrategie. Content-onderhandeling ontbreekt volledig. Het doel is niet om een robuuste client te bouwen, maar om zichtbaar te maken waar de dataspace ophoudt en het gewone web weer begint.

## Wat kan er kapot in experiment 1?

Allereerst: dit is een experiment en geen productiecode. Dus het kan echt kapot gaan - en ik zal zeker niet alles hebben gezien op mijn Mac. Grootste probleem zijn denk ik _race-conditions_ waar ik tijdens het experiment continu mee werd geconfronteerd. Ik heb een aantal aanpassingen moeten doen om ze in ieder geval op twee plekken weg te werken: (1) de containers starten asynchroon en soms wilde het experiment al beginnen voordat alle benodigde API's beschikbaar waren. In het `start-containers.sh` script - dat de initialisatie doet - staan daarom een aantal checks waarbij het ding blijft wachten en pollen tot alles beschikbaar is.

```p322:codefile
path: lab/dataspace-experiments/exp-01/scripts/start-containers.sh
lang: sh
start: 91
end: 104
lines: 15
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/scripts/start-containers.sh
  label: start-containers.sh
```

Verder is (2) het experiment zelf de interactie tussen twee EDC servers via het DSP dataspaceprotocol. Die communicatie is natuurlijk ook asynchroon en soms moeten de twee op elkaar wachten.

Bijvoorbeeld in stap 4 tijdens de contractonderhandeling:

```p322:codefile
path: lab/dataspace-experiments/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
lang: ts
start: 85
end: 92
lines: 8
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-01/src/dataspace-process/steps/04-negotiate-contract.ts
  label: 04-negotiate-contract.ts
```

Ik heb de functie `waitForState` toegevoegd die in dit geval 60 seconden wacht tot een _timeout_. Dat is al fors, maar mocht je tijdens het herhalen van dit experiment communicatieproblemen tussen consumer en provider merken, dan is het misschien een oplossing om nog wat langer te wachten.

En hoe dan ook: als je problemen hebt, of gewoon vragen en opmerkingen: aarzel dan niet om contact met me op te nemen, dan kijken we samen verder.

## Wat nu?

Dit experiment had ik vrij vlot in elkaar zitten en dat smaakte dus naar meer. In het volgende experiment heb ik de code van experiment 1 robuuster gemaakt en ingericht voor het vervolg. Daarnaast introduceer ik een tweede consumer. Dat verschilt niet heel veel van experiment 1 maar legt de basis voor experiment 3 waar ik ga kijken wat er gebeurd wanneer consumer-2 de contractonderhandelingen, start van de transfer, of de EDR-sleutel van consumer-1 inpikt.

In experimenten 4 en 5 ga ik echt kijken naar de policy-voorwaarden die je als provider aan een offer kunt hangen en hoe je die ook automatisch kan toetsen. Op dit moment gebruik ik `Always-true` en dat is immers geen echte voorwaarde.

Dit is wat ik heb klaarstaan.

Daarna heb ik een lijstje van vervolgstappen die ik wil uitvoeren, maar stuur me vooral een bericht als je ideeën hebt voor andere experimenten met dataspaces.

De experimenten zullen niet allemaal aansluitend verschijnen. Dus blijf deze blog volgen voor updates!
