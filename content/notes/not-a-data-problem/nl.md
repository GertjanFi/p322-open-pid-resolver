---
pid: p322:blog:06EQ5EVK790C5T6AX7MKQSCY1
title: "Je data is niet het probleem. Waarom 'verbeteringen' je kennis langzaam uithollen."
date: "2026-05-05T00:00:00+00:00"
excerpt: "Als collectiebeheerder ken je het gevoel: je data klopt, is rijk en zorgvuldig opgebouwd — en toch hoor je steeds opnieuw dat het “beter” moet. Standaardiseren, opschonen, aanpassen. Maar tegen welke prijs?<br/><br/>In deze blog laat ik zien waarom juist jouw waardevolle kennis verloren dreigt te gaan in die drang naar verbetering. Niet omdat je het verkeerd doet, maar omdat computersystemen niet zijn ontworpen voor de rijkdom van je kennis.<br/><br/>Als je werkt met collecties en herkent dat nuance verdwijnt in generieke termen, dan is dit geen theoretisch verhaal maar dagelijkse praktijk. Lees dit als je wilt begrijpen waar het écht misgaat — en hoe het anders kan zonder je werk uit handen te geven."
teaser: "Collectiedata is niet het probleem. Hoe ermee wordt omgegaan wel. Waarom zorgvuldig opgebouwde kennis verdwijnt in standaardisatie — en hoe dat anders kan zonder de controle te verliezen."
isAutoTranslated: false
---

Twee keer deze week had ik een gesprek over data in het erfgoed. Met totaal verschillende partijen. En beide keren kwamen we op exact hetzelfde uit: het probleem is niet beschikbaarheid, maar bruikbaarheid.

Waarom is de data dan slecht bruikbaar? Niet omdat de data slecht is, maar omdat we rijk beschreven brondata behandelen alsof die direct bruikbaar moet zijn in systemen die om standaardisatie vragen.

## Waarom het in de praktijk vastloopt

Het eerste gesprek was een overleg met de beheerders van een groot dienstplatform in Nederland. Dar klonk het volgende: "Er is zat linked data beschikbaar, maar we moeten er nog zoveel aan doen voordat we het in ons platform kunnen opnemen. Zoveel, dat het bijna niet meer uitmaakt of we nou met linked data beginnen, of gewoon een koppeling maken met een XML-bestand, of een csv-file krijgen."

Wat moet je er dan aan doen? Nou vooral standaardiseren: datums, namen, plaatsen, termen. En betekenis geven: om _welke_ plaats of _welke_ persoon gaat het dan?

De tweede keer was met een grote leverancier van collectiebeheerplatforms. Daar kwam de NDE Versnellingsregeling ter sprake, en hoe die hen in staat stelt om klanten te helpen linked data te genereren. Daar zei men: "Linked data is stap één, daarna _moet de kwaliteit omhoog_, want: _zo kan niemand er iets mee_. En het landt niet zo lekker als je dat aan je klanten/bronhouders gaat vertellen: jullie data is kwalitatief onvoldoende, je hebt bijvoorbeeld allemaal eigen termenlijsten gebruikt. Zorg nou dat je algemeen geaccepteerde thesauri als de [Getty AAT](https://www.getty.edu/research/tools/vocabularies/aat/) gaat gebruiken, dan doe je het wel goed.

Zie je het voor je. Hoezo zijn mijn termenlijsten niet goed? Wie denk je wel dat je bent? Wie heeft er meer verstand van deze collectie: wij als jarenlange beheerders, of die gasten aan de andere kant van de wereld in Los Angeles?

Het is nooit een goed idee om de expertise van een specialist in twijfel te trekken.

Want de collectiebeheerders hebben natuurlijk gewoon gelijk. Met de intentie en rijkdom van de data is weinig mis. Het bevat een nuance waar je een puntje aan kunt zuigen.

En dat is nou net het probleem.

## Dit is geen kwaliteitsprobleem

Objecten zijn bijna uniek beschreven. Het materiaalveld is geen `olieverf`, ook geen `olieverf (lijnolie)`, of `olieverf (lijnolie, koudgeperst)`, maar: `olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)`.

Dat is een kwalitatieve top-beschrijving.

Waar gebruikers weinig mee kunnen.

Stop dat eens in een datasysteem. Bijvoorbeeld een lijst met materialen zoals die in de [datahub Koloniale Collecties](https://app.colonialcollections.nl/en/objects?query=*) gebruikt wordt.

Een gebruiker die uit een collectie van 1,1 miljoen objecten een selectie wil maken, heeft aan de term `olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)` echt niets.

Daarmee vind je namelijk één object. Een heel precies en geweldig beschreven object dat wel. Maar het is er maar één.

Gebruikers zoeken niet om één object te vinden. Als dat zo is, dan kennen ze het object al. Daar bestaan andere zoekopdrachten voor: vul de naam, het inventarisnummer, of een andere unieke identificatie in, dan vind je precies dat ene object.

Termen zijn geen beschrijvingen. Die wil je standaardiseren zodat de gebruiker selecties van meerdere objecten kan maken. Ze geven betekenis, je krijgt immers alle objecten voorzien van het materiaal 'olieverf' volgens de definitie van (bijvoorbeeld) de Getty AAT.

Thesauri zijn aggregatie-instrumenten.

Althans. Dat vinden we nu.

## We “verbeteren” al meer dan honderd jaar data

Dat vonden we vijftig jaar geleden nog niet. Toen werd de kaartenbak gedigitaliseerd en heeft iemand heel veel tijd en energie gestoken in: `olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)`.

Honderd jaar geleden vonden we het ook niet: de verzamelaar wilde in handgeschreven schriften zijn collectie beschrijven.

Twintig jaar geleden vonden we het misschien al wél, maar dan toch met een andere omschrijvingsmethodiek. Of een andere thesaurus.

En over dertig jaar? Ik ben ervan overtuigd dat we dan vinden dat we het nu helemaal "fout" doen. Hoe kwamen ze er in 2026 nou bij om op de Getty AAT te standaardiseren? Je kon toch zien aankomen dat er in 2043 ... zou gebeuren?

## We gooien bronkennis weg en noemen dat verbetering

Als collectiebeheerder doe je het dus eigenlijk nooit goed. En dat is misschien wel een geruststelling. Ergens is het ook best arrogant om te denken dat we het nu "beter" weten dan collega's die in de afgelopen decennia met hart en ziel collecties omschreven hebben. En dat wij het nu dus allemaal wel weten, en helemaal moeten omgooien.

Hoppa een export van de collectie gaat [Open Refine](https://openrefine.org), of Excel, in. We zetten een projectteam op die tienduizend objecten gaat verbeteren, en het resultaat importeren we weer in het collectiesysteem. Klaar. We vervangen eerdere inzichten door huidige standaarden. Al je bestaande informatie overschreven. Door iets dat we voor nu wel "beter" durven noemen.

Of nog erger.

We hebben de capaciteit niet, dus we geven onze collectiedata aan een ander: een dienstplatform, een erfgoedhuis, het rijk, of een IT-leverancier. En die laten we de data verbeteren. Mensen met een fractie van de kennis die onze beheerders in huis hebben, gaan van onze gegevens eigenlijk een nieuwe bron samenstellen.

Als er iets fout is, dan is het dit.

Voor collectiebeheer betekent dat verlies van nuance. Voor management betekent het nieuwe projectkosten. Voor dienstplatforms betekent het nog steeds veel (hand)werk. En voor gebruikers betekent het dat ze óf te weinig vinden, óf precies het verkeerde.

## Stop met zeggen dat de data slecht is

We moeten stoppen met zeggen dat we de kwaliteit van de data moeten verbeteren.

Verrijken: prima. Nieuwe inzichten toevoegen: helemaal goed.

Maar stop met zeggen dat wat we nu hebben slecht is en overschreven moet worden.

Hoe dan wel? Daar zat de RCE ook mee. De specialisten op het collectiecentrum wisten dat de bestaande omschrijvingen niet bij de huidige tijd pasten. En dat de data niet voldeed aan de eisen en wensen van NDE.

Maar dat maakt de data niet fout of slecht.

Het maakt de data _non-compliant_ met de standaarden die we nu hanteren.

Dat is wat anders.

Dan is het niet nodig om het oude te overschrijven met het nieuwe. Daar zou je bij nieuwe inzichten in de toekomst wel eens heel veel spijt van kunnen krijgen.

## Dus wat moet je dan wél doen?

Als NDE-knooppunt besloot de RCE directie dat ook de eigen collectiedata aan de NDE voorwaarden moet gaan voldoen. Dan kan je een externe ZZP'er inhuren: een programmeur die met Python-code de data gaat omzetten. Een soort Open Refine/Excel oplossing maar dan op steroïden.

Ruben Schalk belde mij daarom met de vraag: "Ken je toevallig iemand die dat kan? Maar dan wel duurzaam?"

Ik ken zat mensen die dat kúnnen, maar of dat duurzaam is, betwijfel ik. Daarom stelde ik hem de vraag: "Wat vinden je collectiebeheerders daarvan?"

Dat leidde tot een interessant gesprek waarin we samen drie dingen constateerden:

### 1. Bewaar wat al is

Je maakt geen vrienden als je `Olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)` vervangt door [`http://vocab.getty.edu/page/aat/300015050`](http://vocab.getty.edu/page/aat/300015050) (dat is "Olieverf" volgens Getty). Dan verlies je behoorlijk wat betekenis.

Thesauri moeten betekenis toevoegen, niet de nek omdraaien.

Je kunt het er wel naast zetten, als een hulpmiddel voor bij het zoeken. Dan is het een verrijking.

Maar zorg dat je de oorsprong bewaart. En dat je documenteert wat je met die oorspronkelijke waarde hebt gedaan, wanneer, door wie, en op welke manier. We noemen dat data provenantie.

Daar staat bijvoorbeeld in: "Pietje heeft op 17 januari 2026 de waarde `Olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)` verwerkt, door alles dat tussen open haken '(...)' staat te negeren, en het restant van het veld - in dit geval 'Olieverf' - naar de API van het [NDE Termennetwerk](https://termennetwerk.netwerkdigitaalerfgoed.nl/nl) te sturen met de vraag welke term in de Getty AAT daar het beste bij past. Dit leverde de waarde `http://vocab.getty.edu/page/aat/300015050` op."

Dat sla je volgens de W3C [PROV-O](https://www.w3.org/TR/prov-o/) standaard op en kan iedereen daarna zien wat je hebt aangepast.

Dan doe je niet alleen recht aan de bron maar ook aan de mensen die er in het verleden aan hebben gewerkt. Sterker nog, je helpt zelfs de specialisten die ná je komen, als jij als collectiebeheerder alweer jaren met pensioen bent, en die volgens de dan geldende standaarden óók weer de data willen aanpassen.

### 2. Maak verrijking een proces, en geen project

Het is fijn als je op die manier eenmalig je collectie verrijkt met termen die aan de huidige eisen voldoen. Maar dan moeten de collectiebeheerders dat daarna wel steevast blijven doen. Anders is het niet duurzaam, dan is het dweilen met de kraan open. En waarom zou je van collectiebeheerders vragen om extra werk te doen en generiekere termen toe te voegen, of om de kwaliteit en precisie van hun huidige werk naar beneden te brengen?

Ga jij collectiespecialisten vertellen dat ze vanaf nu geen `Olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)` meer mogen toevoegen? De term `olieverf` voldoet: `http://vocab.getty.edu/page/aat/300015050`.

Of: Je mag nog wel `Olieverf (lijnolie, koudgeperst, met loodwit als siccatief, handgemalen pigment, lokale pigmentbron, afwijkende korrelgrootte)` toevoegen. Maar je moet daarnaast óók even kijken in de Getty AAT of er een bijpassende term is, en als die er niet is, dan controleer je de [Cultuurhistorische Thesaurus](https://kennis.cultureelerfgoed.nl/index.php/Thesauri_bij_de_RCE_-_Cultuurhistorische_Thesaurus) (de CHT in de volksmond), en als die het ook niet heeft, dan misschien nog [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page), of moet je bij Getty/CHT een verzoek indienen om de term toe te voegen.

Ik hoop dat je collectiesysteem inmiddels het NDE Termennetwerk heeft toegevoegd, want - _Ain't nobody got time for that_.

Wat je eigenlijk zou willen, is dat specialisten beschrijven zoals ze dat al deden. Met alle kennis die ze hebben. Zonder meerwerk. En dat een systeem het daarna verrijkt met meer generieke termen. Een systeem dat periodiek ('s nachts bijvoorbeeld) start en de nieuwste toevoegingen in de bron zo goed mogelijk voorziet van de Getty AAT, CHT, of welke thesaurus je maar wilt gebruiken.

Dat systeem voegt dan zelf de data provenantie toe. Niet langer heeft "Pietje" op 17 januari 2026 de waarde aangepast, maar "Agent X" heeft dat gedaan.

### 3. Laat de expert sturen, niet de techniek

Misschien wel het belangrijkste dat Ruben en ik in het gesprek constateerden: "Betrek collectiebeheer".

Veel te vaak zijn verrijkingen van data het domein van techneuten. Ja die weten heel veel van de methode, maar niet van de data. En daar ging het nou net wel om.

In plaats van de domein-expert te laten sturen, vragen we hen om in een middag jarenlange ervaring en kennis over te dragen zodat data engineers daarmee de aanpassingen kunnen doen.

En als ze klaar zijn?

Dan moeten die engineers uitleggen wat hun algoritmes met de data over "koudgeperste olieverf met handgemalen pigment" hebben gedaan. Dat zijn hele bijzondere sessies waar ik te vaak bij heb moeten zitten: de luisteraar weet niet wat een algoritme is, en de verteller weet niet wat "siccatief" betekent.

Daar kom je zelden blij uit.

Ondertussen is het management wel door het projectbudget heen want data techneuten zijn duur. Ze moeten verder. Dus tekenen we bij het kruisje voor ontvangst van de data in de hoop dat de verrijkingen inderdaad doen wat iedereen denkt/vindt/bedoelt/meent dat ze doen.

Hoe dan wel? Door collectiebeheerders in staat te stellen om op de juiste momenten de verrijkingen te controleren. Zonder dat ze hoeven te weten wat een algoritme is, hoe ze een kolom in Excel sorteren, of zelfs een nieuw tabblad aan te hoeven maken. Fijn als mensen dat wel kunnen, maar het moet niet nodig zijn. Deze experts hebben andere kennis.

## Dit is oplosbaar

En ja, als dit begint te lijken op een oplossing, dan klopt dat. Voor precies dit probleem hebben we Tabulous ontwikkeld: niet om brondata te overschrijven, maar om verrijkingen structureel en controleerbaar te maken.

Met de RCE hebben we de eerste versie in gebruik genomen.

Niet als zoveelste project waarin bestaande data wordt “verbeterd”, maar als een andere manier van werken. Waarin je niet vervangt wat er al is, maar er iets naast zet. Waarin je niet één keer opschoont, maar continu verrijkt. En waarin de uitkomst niet verdwijnt in code, maar zichtbaar blijft voor de mensen die de collectie kennen.

Precies daar zit het verschil.

Oh, en volgens ons werkt het ook fijner dan Python, Open Refine, of Excel :)

In de volgende blog laat ik zien hoe dat er concreet uitziet.
