---
title: "Erfgoed en dataspaces: experimenten 2 & 3"
date: "2026-01-28T00:00:00+00:00"
excerpt: "Dataspaces klinken abstract, tot je ze uit elkaar haalt en kijkt wat er echt gebeurt wanneer meerdere partijen tegelijk data willen ophalen. In dit blog neem ik je mee in experimenten 2 en 3, waarin één provider te maken krijgt met meerdere consumers — en zelfs met een kwaadwillende bezoeker. Wat gebeurt er met contracten, sleutels en toegang wanneer je de architectuur iets onder druk zet? En waar ligt de verantwoordelijkheid eigenlijk: bij de provider, of bij degene die de sleutel krijgt?"
teaser: "Wat gebeurt er als meerdere consumers tegelijk data opvragen in een dataspace? En wat als één daarvan zich niet netjes gedraagt? In dit blog test ik dataspaces niet op papier, maar met werkende experimenten. Je ziet hoe transacties worden opgebouwd, waar verantwoordelijkheid ligt, en wat er gebeurt als een sleutel in verkeerde handen valt. Geen abstracte beloftes, maar concrete observaties uit code die mag breken."
---

In het digitaal erfgoed hoor je de term: _dataspace_. Wat betekent dat eigenlijk? En belangrijker: wat kan het echt? Is het een nieuwe term voor beleidsmakers? Of hangt er concrete technologie onder? Uit nieuwsgierigheid ben ik op onderzoek uitgegaan.

[Je vindt de experimenten in de P-322 Github dataspace-experiments repository](https://github.com/p-322/dataspace-experiments).

In [het eerste blog](note:heritage-dataspace-experiment) heb ik uitgelegd wat een dataspace is, welk probleem het probeert op te lossen; en heb ik een overzicht gegeven van de begrippen, termen, en rollen. Daar staat ook een werkende experimentele dataspace-transactie.

## Onderweg naar toetsbare toegangsvoorwaarden

Mijn persoonlijke interesse zit in het inrichten van toegangsbeleid in een open data omgeving. Het heeft pas zin om dat te gaan testen als er meerdere afnemers zijn die zich bij een bronhouder melden met interesse in aangeboden data.

Daarom wil ik in dit experiment onderzoeken hoe meerdere afnemers zich tot elkaar verhouden. Daarvoor moet de code uit experiment 1 op de schop. Nu is het immers niet veel meer dan een procedureel script dat voor één _provider_ en één _consumer_ een aantal stappen achter elkaar uitvoert. Dat moet generieker en breder inzetbaar worden zodat ik straks makkelijker dingen kan toevoegen.

## Experiment 2

Het doel is om meerdere dataspace-transacties te kunnen uitvoeren waarin meerdere consumers bij een provider data ophalen. We kunnen natuurlijk na de eerste transactie in experiment 1 de stappen voor een tweede consumer opnieuw configureren en uitvoeren, maar dat schaalt niet. Straks wil ik misschien een derde of vierde gebruiker.

Daarom splitsen we de stappen uit experiment 1 op in twee delen. Stappen 1 en 2 gaan over de opbouw van de dataset (de _asset_) en de aanbieding (het _offer_). Bij deze stappen is de provider leidend. Stappen 3 tot en met 7 worden daarentegen gestart door de consumer. Die initieert het contractonderhandelingsproces en doet een verzoek om een data-transfer. In een experiment met meerdere consumers moeten stappen 3-7 herhaalbaar zijn.

### Provider

We bouwen de code daarom van een procesperspectief om naar een rolperspectief. Met de rol van provider moet je assets kunnen registreren en offers kunnen maken. Als consumer moet je de catalogus kunnen opvragen, een contractonderhandeling kunnen starten, de transfer initiëren, een EDR ophalen, en de data binnenharken.

Daarom maken we twee objecten: `Provider` en `Consumer` waarin de verschillende transactiestappen gaan landen. Stappen 1 en 2 horen bij de rol provider. Een asset en een offer bestaan onafhankelijk van wie er langskomt om ze te bekijken. Ze zijn een belofte aan de wereld - of ten minste aan de dataspace. Je maakt ze één keer aan en daarna liggen ze klaar. Dat maakt provider een logisch thuis voor die stappen: ze beschrijven wat de provider is en aanbiedt, niet wat er op een bepaald moment gebeurt.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/provider.ts
lang: ts
start: 1
end: 101
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/provider.ts
  label: provider.ts
```

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/consumer.ts
lang: ts
start: 1
end: 25
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/consumer.ts
  label: consumer.ts
```

### Transaction

Stappen 3 tot en met 7 zijn van een andere orde. Dat zijn geen eigenschappen, maar gebeurtenissen. Ze vormen samen een tijdelijk proces tussen consumer en provider. Er wordt onderhandeld, besloten, geweigerd of toegestaan, en uiteindelijk data overgedragen.

Dat proces heeft een eigen leven: het heeft een begin, een verloop, en een einde. En is herhaalbaar: misschien wil de consumer daarna reageren op een ander offer van dezelfde provider, of een transactie aangaan met een hele nieuwe partij.

Stop je al die stappen in de consumer, dan moet je daar heel precies de staat gaan bijhouden. Het risico dat je als consumer bij provider A om een offer van provider B gaat vragen ligt dan op de loer. Dat willen we niet.

Daarnaast, kun je zien aankomen dat een consumer meerdere transacties tegelijkertijd wil uitvoeren; en een gefaalde transactie daarna opnieuw moet doen. Ook dat kan niet als we de stappen in de consumer regelen.

We brengen daarom stappen 3 tot en met 7 onder in een object `EdcTransaction`. Daarmee krijgt de transactie zelf gewicht. Het wordt iets wat je kunt volgen, loggen, herhalen of vergelijken. De consumer initieert transacties, maar die dragen zelf hun eigen verhaal. En juist dat verhaal wil ik begrijpen, testen en bevragen.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/edcTransaction.ts
lang: ts
start: 1
end: 355
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/edcTransaction.ts
  label: edcTransaction.ts
```

Merk op: we sorteren met EdcTransaction wel beetje voor. In experiment 2 heeft een consumer nog maar één transactie en ik had de stappen - net als bij provider - dus ook gewoon nog in de consumer kunnen stoppen.

### ManagementClient

In een dataspace is niet alles een gesprek. Sommige dingen zijn gewoon administratie. Assets registreren, offers aanmaken, contracten volgen, transfers monitoren: dat gebeurt via de management-interfaces van de deelnemers. Dat zijn geen publieke gesprekken tussen partijen, maar interne handelingen waarmee een organisatie de eigen dataspace-rol bestuurt. De EDC Management API is precies dat: het bedieningspaneel van een participant.

Zoals we in experiment 1 zagen is er een Consumer Management API en een Provider Management API.

Het `EdcManagementClient` object is mijn eerste, minimale vertaling van dat bedieningspaneel naar code. Geen slimme logica, geen beleidskeuzes, maar een eerste meer robuuste plek om API-verzoeken te regelen, data te lezen, fouten begrijpelijk te maken en soms even geduldig te wachten tot alles is bijgewerkt.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/lib/edcManagementClient.ts
lang: ts
start: 1
end: 81
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/lib/edcManagementClient.ts
  label: edcManagementClient.ts
```

Belangrijk is wat het ding níet doet. De management client onderhandelt niet, kiest geen offers en neemt geen beslissingen. Dat is het werk van de consumers, providers, en transacties. De management client zorgt er alleen voor dat die rollen op een consistente manier tegen hun eigen EDC-infrastructuur kunnen praten. Daarmee is het een soort adapter: klein en saai, maar daarom niet minder essentieel.

### Het resultaat

Hoewel we nu alle code opnieuw hebben gestructureerd doet experiment 2 niet heel veel anders dan experiment 1. Het geeft vooral een steviger basis voor de volgende stappen.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/experiment.ts
lang: ts
start: 1
end: 116
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/experiment.ts
  label: exp-02/src/experiment.ts
```

Na de initialisatie waarin alle containers worden gestart, configureren we het experiment: we maken de provider en consumers aan. Daarna start eerst de provider en die maakt een asset en offer aan net als in experiment 1. Vervolgens voeren we een lus uit over alle consumers. Voor iedere consumer maken we een dataspace-transactie aan en voeren die uit.

```p322:codefile
path: lab/dataspace-experiments/exp-02/src/experiment.ts
lang: ts
start: 93
end: 105
lines: 12
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-02/src/experiment.ts
  label: exp-02/src/experiment.ts
```

We krijgen nu tweemaal (voor consumer-1 en consumer-2) de brondata te zien:

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

Maar beide transacties hebben een eigen `agreementId` en sleutel (de _EDR-token_). Iedere consumer heeft dus een eigen contractonderhandeling met de provider uitgevoerd, die heeft toegang toegestaan, en een unieke sleutel aangemaakt.

Niet spannend, maar wel geslaagd. Hoera!

## Experiment 3

Na het herschrijven van code is de leukste vraag die je jezelf kan stellen: hoe maak ik dit weer kapot?

Hoewel ik eigenlijk sta te trappelen om met de toegangsvoorwaarden van de provider aan de slag te gaan - was ik zo nieuwsgierig naar het gedrag van de EDC dat ik een derde experiment heb toegevoegd. Wat nu als een kwaadwillende consumer de `agreementId` of de EDR-token van een andere consumer jat?

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 1
end: 247
lines: 20
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

Daarvoor introduceren we in dit experiment consumer-3 die de rol van boef speelt. Dankzij de herinrichting van de code is dat nu lekker makkelijk.

### Kan een boef de sleutel van een andere consumer bij de provider ophalen?

De eerste vraag is: wat gebeurd er wanneer de boef/consumer-3 achter de `agreementId` van consumer-2 komt en daarmee zijn EDR-token opvraagt? Dat is stap 6 in deze transactieketen. Als het goed is, geeft de provider geen antwoord want de afspraak en sleutel hangen aan een andere consumer-id.

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 150
end: 166
lines: 16
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

Het antwoord is:

```p322:jsonblock
start: 1
value: |
  [
    {
      "message": "Object of type EndpointDataReferenceEntry with ID=019bb7a9-c6cf-7806-ae4b-4bcfbdb3e94c was not found",
      "type": "ObjectNotFound",
      "path": null,
      "invalidValue": null
    }
  ]
```

Mooi zo, dat lukt niet. De provider geeft simpelweg aan dat er geen sleutels zijn gevonden.

### Kan een boef met de overeenkomst van een andere consumer de provider overtuigen om een sleutel aan te maken?

Vervolgens wil ik weten of onze boef **eerder** kan instappen en in staat is om de provider te overtuigen om met een `agreementId` van consumer-2 een transactie te starten waarin een EDR beschikbaar gesteld gaat worden. Dat is stap 5 in deze experimenten.

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 167
end: 196
lines: 29
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

Daar reageert de provider als volgt op:

```p322:jsonblock
start: 1
value: |
  [
    {
      "message": "Contract agreement with id 019bb7a9-c1f6-7faf-951e-b270df39ec10 not found",
      "type": "InvalidRequest",
      "path": null,
      "invalidValue": null
    }
  ]
```

Zulke verzoeken worden tijdens het onderhandelingsproces door de provider geblokkeerd. Voor consumer-3 bestaat het `agreementId` niet en dat is precies wat we willen.

### Kan een boef met de sleutel van een andere consumer data bij de provider ophalen?

De laatste vraag is misschien wel de interessantste: stel nou dat onze boef het internetverkeer tussen de provider en consumer-2 heeft afgeluisterd en de EDR-token heeft bemachtigt. Wat gebeurt er dan in stap 7 van deze experimenten? Als we de data daadwerkelijk gaan ophalen?

```p322:codefile
path: lab/dataspace-experiments/exp-03/src/experiment.ts
lang: ts
start: 197
end: 237
lines: 40
source:
  url: https://github.com/p-322/dataspace-experiments/blob/main/exp-03/src/experiment.ts
  label: exp-03/src/experiment.ts
```

In experiment 1 heb ik uitgelegd dat de transactie tussen consumer en provider over twee lagen loopt. De besturingslaag (_Control Plane_) doet de contractonderhandeling en verstrekt een sleutel aan de consumer. De datalaag (_Data Plane_) houdt zich daarna alleen met het transport van de informatie bezig: als er een geldige sleutel is, dan gaat de Data Plane aan de slag.

De kans is daarom best groot is dat het transport slaagt, en de boef toegang krijgt tot de data.

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

En inderdaad, dat kan. De sleutel is geldig, de Data Plane toetst niet meer - als consumer-3 over de EDR-token beschikt dan wordt toegang verschaft.

Is dat raar? Nou, euhm... nee, eigenlijk niet. Het is immers de verantwoordelijkheid van consumer-2 om de sleutel niet te laten slingeren. Niet die van de provider. Dit is een belangrijke reden waarom de EDR-sleutels normaal gesproken een beperkte geldigheidsduur hebben.

## Waar staan we nu?

In experiment 1 heb ik het proces van een dataspace-transactie getest. Die stappen zijn nu geland in een meer robuuste omgeving en klaar om verder mee te gaan experimenteren.

In de volgende experimenten ga ik kijken naar de toegangsvoorwaarden die je als provider aan een offer kunt hangen en hoe je die (eventueel automatisch) kan toetsen. Daarna heb ik nog andere experimenten gepland, maar stuur me vooral een bericht als je ideeën hebt!

De experimenten zullen niet allemaal aansluitend verschijnen. Dus blijf deze blog volgen voor updates.
