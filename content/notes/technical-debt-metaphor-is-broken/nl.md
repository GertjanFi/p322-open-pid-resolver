---
pid: p322:blog:06EQCZ1EW909V6BKMFE5S9GBT
title: "Technische Schuld is Dood (Deel 1: De Metafoor is Kapot)"
date: "2026-04-14T00:00:00+00:00"
excerpt: "Technische schuld klinkt als een precies concept. Dat is het niet.</br></br>Wat begon als een manier om de kloof tussen code en begrip te beschrijven, is afgedreven tot een verzamelterm voor beslissingen waar we spijt van hebben. Erger nog: de metafoor laat je denken dat je het kunt beheren zoals echte schuld. Dat kun je niet. Er is geen duidelijke hoofdsom, geen voorspelbare rente, geen manier om de kosten te kennen op het moment dat je het aangaat.</br></br>En dat is belangrijk, want teams gebruiken dit idee dagelijks om keuzes te rechtvaardigen.</br></br>Als het concept waarop je vertrouwt om afwegingen te maken fundamenteel gebrekkig is, waar optimaliseer je dan eigenlijk voor? Dit stuk legt uit waarom “technische schuld” je niet langer helpt om iets te beslissen en wat dat betekent de volgende keer dat je moet kiezen."
teaser: "Technische schuld voelt precies, maar vervormt stilletjes elke beslissing die je maakt, en zodra je ziet waarom, vertrouw je het concept nooit meer."
isAutoTranslated: true
---

Stel je voor dat je een service schrijft die moet wachten tot een _mount point_ beschikbaar is. Je weet niet zo veel over hoe Linux werkt, maar je ziet twee oplossingen:

**Optie A:** Een bash-loop die elke 2 seconden controleert of het pad bestaat. Dit kun je in een minuut schrijven.

```p322:codeblock
lang: bash
value: |
  while [ ! -d /mnt/data ]; do
    sleep 2
  done
```

**Optie B:** Een `systemd` _mount unit dependency_. Je hebt er nog nooit een geschreven. De documentatie zal je minstens 30 minuten kosten om te lezen. Daarna waarschijnlijk ook maar een paar minuten om te implementeren.

Nu doet je onderbuik dat ding waarbij het twee meningen tegelijk heeft. Eén deel zegt dat de bash-loop _edge cases_ negeert waar je je niet van bewust bent, omdat je niet zo veel ops-werk hebt gedaan en er waarschijnlijk twaalf manieren zijn waarop een mount kan falen waar je nog nooit van hebt gehoord. Het andere deel zegt dat een complex subsysteem erbij slepen dat je niet begrijpt, om een probleem op te lossen dat je in vier regels shell kunt uitdrukken, precies het soort ding is dat over zes maanden om 3 uur ’s nachts meldingen veroorzaakt.

Je hebt de luxe van tijd om zorgvuldig te zijn. Je wilt dit één keer aanraken en er klaar mee zijn. Wat moet je kiezen?

Nou, je doet wat elke verantwoordelijke engineer doet. Je vraagt jezelf: welke optie creëert minder technische schuld?

En nu zit je vast, want die vraag is niet te beantwoorden. Het is de verkeerde vraag, gebaseerd op de verkeerde metafoor.

Laat me dat uitleggen.

## Reden A: De metafoor had een beperkte betekenis

In 1992 schreef Ward Cunningham een [ervaringsrapport](https://c2.com/doc/oopsla92.html) over een financieel softwareproduct genaamd WyCash. Hij zat tot zijn nek in financieel jargon en sprak met mensen die dachten als CFO’s. En hij greep naar een woord dat zij zouden begrijpen: _schuld_. Bedrijfsschuld. Het precisie-instrument. Het soort waarbij je geld leent om een fabriek te bouwen die meer oplevert dan de rentebetalingen.

Zijn punt was dit: je levert iets op dat je gedeeltelijke begrip van het probleem weerspiegelt. Door het op te leveren leer je meer. Maar nu komt de code niet langer overeen met wat je weet. _Die afstand_ is de schuld. De “terugbetaling” is het evolueren van de code zodat die overeenkomt met je gegroeide begrip.

Ik wil dit benadrukken omdat het gemakkelijk te missen is. Cunningham bedoelde niet “code die slecht is”. Hij bedoelde: code die gebaseerd is op het begrip van gisteren, in een wereld waarin je begrip inmiddels is verbeterd.

Dat is iets heel specifieks.

Hij schreef hierover in 1992, ruim voordat het woord Agile bestond. (Sterker nog, Cunningham is [een van de mensen](https://agilemanifesto.org/authors.html) die het later tijdens [Snowbird in 2001](https://agilemanifesto.org/history.html) hebben gelanceerd.) Het idee dat je code zou schrijven _voordat_ je claimt het probleem volledig te begrijpen was vrij nieuw. En hoewel het inzicht dat je nooit genoeg begrip krijgt _zonder_ de code te schrijven niet volledig nieuw was, was het zeker geen vanzelfsprekendheid zoals dat nu is geworden. Dus de metafoor was destijds nuttig. Het gaf een financieel persoon een manier om te begrijpen waarom het engineeringteam iets wilde herschrijven dat al werkte. En het gaf dat engineeringteam een manier om te begrijpen dat ze code mochten schrijven voordat de specificaties af waren.

Goede metafoor. Nuttig gesprek. Iedereen tevreden.

Toen kreeg de rest van de industrie het in handen.

## Reden B: Die betekenis is waarschijnlijk anders dan wat het nu voor jou betekent

Denk aan de laatste keer dat je zei “we nemen hier technische schuld op” in een stand-up. Wat bedoelde je eigenlijk?

Wees eerlijk. Het was waarschijnlijk één van de volgende:

- “We schrijven code waarvan we weten dat die slecht is omdat we haast hebben”
- “We gaan dit niet refactoren terwijl we dat wel zouden moeten”
- “Deze code is rommelig en gaat ons later vertragen”
- “Iemand vóór mij heeft slechte keuzes gemaakt en nu zit ik ermee”

Geen van deze dingen is wat Cunningham bedoelde. Niet eens in de buurt. Maar ze zijn allemaal “technische schuld” geworden door jaren van betekenisverschuiving, en de metafoor dekt nu alles waar developers zich schuldig over voelen. Dat maakt het ongeveer net zo bruikbaar voor daadwerkelijke besluitvorming als het woord “interessant” voor restaurantrecensies.

Dat is eigenlijk onvermijdelijk als je kijkt naar wat “schuld” betekent buiten een corporate finance-afdeling. Voor de meeste mensen is schuld iets beschamends. Je hoort het zo snel mogelijk af te lossen. Het is een teken dat je boven je stand leeft. Niemand aan de eettafel zegt: “ik ben financieel aan het hefbomen". (Als ze dat wel doen, moet je misschien even je bestek controleren nadat ze zijn vertrokken.)

Dus wanneer developers “tech debt” horen, horen ze: iemand heeft het verpest en nu betalen wij de prijs. En bovenop die schaamte is ook verschoven wat het _meet_. Het verwijst niet langer naar de afstand tussen code en het huidige begrip van het probleem. Het verwijst naar tijd. De tijd die we moeten investeren om het te fixen. De vertraging die we oplopen zolang het niet gefixt is. Je “leent” nu tijd, je “betaalt” het later terug, met “rente”.

En hier is iets dat je zou moeten storen: we passen het achteraf toe. Zelfs in persoonlijke financiën kijk je nooit naar je bankrekening en ontdek je plotseling dat je laatste aankoop rente met zich meebrengt. Je kende de voorwaarden voordat je tekende. Maar technische schuld is bijna altijd een label dat achteraf wordt toegepast, door iemand die er niet bij was toen de beslissing werd genomen. Dat betekent dat je bij elke beslissing het risico loopt dat een toekomstige developer je achteraf bestempelt als iemand die schuld heeft opgebouwd, met het enorme voordeel dat diegene weet hoe het is afgelopen. Het helpt niet dat [latere c2 wiki discussies](https://wiki.c2.com/?TechnicalDebt) en [Fowler's synthesis](https://martinfowler.com/bliki/TechnicalDebt.html) technische schuld koppelen aan Kwaliteit (met een hoofdletter K), alsof elke engineeringkeuze een moreel oordeel is: slordig versus zorgvuldig, dom versus slim.

Dus daar staan we. Een metafoor bedacht om iteratief leren uit te leggen aan een CFO in 1992 is verworden tot een vaag synoniem voor “code die ik niet leuk vind”, met een moreel oordeel erbij.

Maar goed. Misschien is de metafoor door de massa vervormd. Misschien, als we teruggaan naar wat Cunningham _echt bedoelde_, houdt het nog stand. Toch?

## Reden C: Het houdt geen stand

Bedrijfsschuld is een precisie-instrument. Bekende hoofdsom, bekende rente, bekend aflossingsschema. Dat maakt het strategisch: je kunt modelleren of de opbrengsten groter zijn dan de kosten voordat je iets ondertekent. Een CFO kan naar een leningvoorstel kijken en zeggen: “dit is een goede deal” of “dit is een slechte deal”, gebaseerd op daadwerkelijke cijfers.

Cunningham’s “schuld” werkt anders. Je neemt het op op het moment dat je de code schrijft, wanneer je op zijn best een vaag idee hebt van hoe ver je begrip ernaast zit. Je kunt de kosten niet modelleren, omdat die afhangen van toekomstig leren dat nog niet heeft plaatsgevonden. Misschien zit je 90% goed en is de schuld triviaal. Misschien zit je voor 20% goed en zul je het allemaal over zes maanden herschrijven. Je weet het niet. Je _kunt_ het niet weten. Dat is precies het punt. Als je het probleem al volledig begreep, hoefde je niet vroeg te shippen om te leren.

Wat eruitziet als een lening met 2% rente kan uitlopen op woekerrente. Of het kan blijken dat je precies goed zat en dat er nooit sprake was van een lening.

Als een CFO een bestuursvergadering binnen zou lopen en zou zeggen: “ik wil een onbekend bedrag lenen, tegen een onbekende rente, met een onbekend aflossingsschema, van een kredietverstrekker die ons de voorwaarden pas vertelt nadat we het geld al hebben uitgegeven,” dan zou die directeur het gebouw uit begeleid worden. En toch is dat precies wat Cunningham’s metafoor van ons vraagt te doen, alsof het een normale financiële transactie is.

Cunningham wist dit waarschijnlijk ook. Hij schreef geen proefschrift over software-economie. Hij schreef een analogie van één alinea in een conferentierapport, gericht op één specifieke doelgroep, om één specifiek idee uit te leggen. En daarvoor werkte het. Het probleem is dat de rest van ons het heeft opgepakt en geprobeerd er frameworks op te bouwen: schuld-backlogs, renteberekeningen, aflossingssprints. We behandelden de precisie van de metafoor alsof die echt was. Alsof je daadwerkelijk een balans kon bijhouden van begripstekorten en de aflossing daarvan in Q3 kon plannen.

Dat kan niet. De metafoor is nooit gebouwd om dat gewicht te dragen.

Dus de metafoor is kapot. Wat we “technische schuld” noemen in stand-ups heeft niets te maken met wat Cunningham bedoelde. En wat Cunningham daadwerkelijk bedoelde werkt ook niet als financiële metafoor, omdat het een kenbaarheid impliceert die het onderliggende fenomeen simpelweg niet heeft.

En toch! Terwijl taalpuristen discussiëren over definities (hoi! ik ben Jauco en ik heb net 1500 woorden besteed aan precies dit! koor: “Hoi Jauco”), zit jij daar nog steeds, niet zeker of je de bash-loop of de systemd-unit moet schrijven. Je weet nu in elk geval dat dit niets met schuld te maken heeft. Dat maakt de beslissing niet per se makkelijker. Wat je wél zou helpen om erover na te denken, beschrijf ik in mijn volgende stuk.
