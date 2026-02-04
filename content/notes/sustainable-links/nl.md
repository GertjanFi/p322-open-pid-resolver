---
pid: p322:blog:06DN93W5Y0X5ES77F31YC4SKW
title: "Duurzame links: waarom niet alles wat blijft, ook alles moet doen"
date: 2026-01-14T00:00:00.000Z
authorKey: gertjan
image: /assets/images/knowledge/duurzame-links.jpg
excerpt: "Duurzame links klinken als een technische keuze, tot je ontdekt dat het echte probleem organisatorisch is: één infrastructuur die tegelijk archivering, wetenschappelijke citatie én marketing moet dragen. In dit blog neem ik je mee langs Handle, DOI, ARK en zelfs PURL - maar vooral langs de vraag die daaronder ligt: wat mag je permanent beloven, en wat wil je alleen tijdelijk meten? Met een verrassend simpele ontwerpregel als uitkomst: scheid identiteit van aandacht."
teaser: Wat gebeurt er als je dezelfde link gebruikt om te citeren, te archiveren én clicks te tellen? Dit blog neemt je mee langs Handle, DOI, ARK en PURL, en laat zien waarom duurzame identificatie stukloopt zodra je het laat meedraaien met marketing - en hoe je dat voorkomt met één principiële scheiding.
category: Achtergronden
tagsLocal:
  - persistency
  - open-data
  - governance
---

Afgelopen december heb ik persistente identificatie geïmplementeerd. Niet alleen de techniek, maar juist ook het beleid waarmee we gebruikers het vertrouwen willen geven om met een gerust hart naar onze links te verwijzen. Ik schreef daar een blog over: ["Namen die blijven: over persistente identifiers zonder eeuwigheidswaan"](/nl/posts/20260107-namen-die-blijven-over-persistent-identifiers-zonder-eeuwigheidswaan). Daarin stelde ik dat persistentie niet gelijk staat aan “een Handle of ARK hebben” - en dat sommige organisaties, zoals startups, misschien wel zonder móéten omdat er vaak nogal wat voorwaarden aan verbonden zijn.

Dat laatste bleek een aanname. Na afronding van dat blog en het opleveren van de implementatie besloot ik de proef op de som te nemen en een ARK aan te vragen.

## Is de koffie met cake geregeld?

Persistentie heeft alles met een belofte te maken: kunnen anderen erop vertrouwen dat jij je aan je belofte houdt om informatie beschikbaar te houden?

De olifant in de persistentiekamer is dan het vertrouwen in je pids en resolver nadat het spreekwoordelijke doek voor je is gevallen.

En die kans is bij een startup best groot. Dat los je niet op met technologie.

Persistent betekent daarom overdraagbaar en niet eeuwig.

Je belooft dat je alles zó inricht dat het niet van jou afhankelijk is.  
Je belooft dat de betekenis van identifiers gedocumenteerd is.  
Je belooft dat de koppeling van pid naar actuele adressen niet opgesloten zit in een obscure database, maar als open en bruikbare bron bestaat.

Wat je níét belooft, is dat jij er voor de eeuwigheid bent en altijd de rekening blijft betalen.

Goed persistentiebeleid gaat verder dan de definitieve einduitgang. We denken al snel aan opheffing: zijn er dan naast cake en koffie ook afspraken met een koepelorganisatie, een archief, of een instelling als [DANS](https://dans.knaw.nl/nl/) gemaakt?

Maar het gevaar van vluchtigheid zit veel dichterbij. Er blijkt niets zo tijdelijk als de naam van een organisatie - en daarmee het internetdomein.

Wat gebeurt er bij fusie, opsplitsing, reorganisatie, of de favoriet op managementfeestjes: “herijking-van-de-strategische-doelen-en-identiteit”?

Kun je beloven dat je altijd oude domeinen in de lucht houdt?  
Dat de oude resolver bezoekers blijft doorsturen?
Of kies je daarom voor een neutraal internetadres?

## Externe resolvers

Voor het doen van de leven-na-de-dood belofte, bieden platforms als ARK, Handle, en DOI diensten aan. In plaats van:

`https://pid.p-322.com/p322/blog/01J6E8F3PFQ2H9R7M4K8V1CW`

gebruik je dan iets dat lijkt op:

`https://n2t.net/ark:12148/btv1b8449691v/f29`
of  
`http://hdl.handle.net/10648/35429da7-5297-a382-e063-6df0900a6686`

In ARK en Handle adres zijn de stukjes `12148` en `10648` respectievelijk de _Name Assigning Authority Number_ (NAAN) en **de** Handle. Ze fungeren als een ruimte - de _namespace_ - van een aangesloten organisatie. De Handle `10648` is van het [Nationaal Archief](https://www.nationaalarchief.nl) en alles daarachter is een identifier van een object van het NA. Zo is `35429da7-5297-a382-e063-6df0900a6686` een foto van voorname heren op een perron bij de eerste stoomtrein in Aalsmeer. De Handle-resolver stuurt de bezoeker door naar [de afbeelding in de fotocollectie](https://www.nationaalarchief.nl/onderzoeken/fotocollectie/35429da7-5297-a382-e063-6df0900a6686).

Dat is mooi, maar voordat ARK, Handle, of DOI, je organisatie zo'n nummer toekennen, krijg je wel met allerlei eisen te maken. Ik ging er dus vanuit dat we als startup daar moeilijk aan konden voldoen. Maar nee heb je en ja kun je krijgen: ik besloot om een keuze te maken en zien hoever ik zou komen.

Als ze ons allemaal afwijzen dan is het aanvraagtraject in ieder geval al leerzaam. En om toch resultaat-zekerheid te garanderen, heb ik ook PURL meegenomen. Daar kun je altijd terecht.

## Dit is geen Pepsi versus Coke

In de sector hoor je mensen over Handle, DOI en ARK praten alsof het Pepsi versus Coke is: een kwestie van voorkeur, prijs of smaak.

Dat is ongemakkelijk, omdat ze zich moeilijk laten vergelijken.

Ze doen namelijk best verschillende dingen. Niet beter of slechter - anders. Het verkeerde argument om een keuze te maken is dan ook: **ARK is gratis**.

Ik dacht toen nog dat de keuze vooral een technische en organisatorische afweging zou zijn. Pas later bleek dat dit besluit me dwong een veel lastiger vraag te beantwoorden.

> Wat gebeurt er als dezelfde infrastructuur tegelijk archivering, wetenschappelijke citatie én marketing moet doen?

Maar laat ik niet op de zaken vooruit lopen en tóch eerst de verschillende systemen naast elkaar zetten. Niet om ze te vergelijken op voorkeur of prijs, maar om zichtbaar te maken welk probleem ze proberen op te lossen - en wat ze nadrukkelijk níet oplossen. Pas vanuit dat onderscheid wordt duidelijk waarom sommige combinaties wringen, en anderen juist ruimte geven.

## Handle: techniek met centraal register

[Handle](https://www.handle.net) is vooral een technisch protocol. Het dwingt je om je pids via een centraal register door te verwijzen naar de locatie waar de data staat.

Dat register wordt beheerd door de non-profit onderzoeksorganisatie [_Corporation for National Research Initiatives_](https://www.cnri.reston.va.us) (CNRI).

Handle stelt enkel technische eisen aan de persistentiebelofte van deelnemers. In mijn vorige blog heb ik uitgelegd hoe het doorverwijzen van een P-322 pid naar de echte locatie van de data loopt. Daar zit het adres `https://pid.p-322.com` tussen. Gebruik je een Handle om pids te koppelen aan data, dan hoeft dat niet meer. De resolutie loopt via het centrale register direct naar jouw lokale adressen. Veranderen die? Dan pas je dat in het register bij CNRI aan.

Een Handle implementatie scheelt dus een tussenstap en de kosten van een eigen serveroplossing. Daarvoor rekent de non-profit $50 voor de aanmelding en een jaarlijkse servicebijdrage van $50.

Dat zou zomaar goedkoper kunnen zijn dan die gratis ARK waarbij je zelf een oplossing moet beheren.

## Digital Object Identifiers (DOI): borging via contract en metadata

[DOI](https://www.doi.org) is bedacht omdat Handle vooral een technische oplossing is voor een probleem van institutionele aard. Een DOI is in veel opzichten alles wat Handle niet is. Daarom vullen ze elkaar zo mooi aan.

Een DOI is bovenal een juridisch/organisatorische oplossing.

Je gaat een contract aan met een leverancier - de _Registration Agency_ (RA) - die je dwingt om allerlei beleidsmaatregelen te nemen. DOI is namelijk een governancestructuur. Voor het plezier om gedwongen je beleid om te gooien, betaal je geld. In ruil daarvoor mag je dan pids aanvragen die gewaarborgd worden door je RA.

Dat klinkt misschien wat zuur maar daarmee komt je persistentiebelofte het dichtste bij die technisch gegarandeerde persistentie waarvan ik vorige week nog stelde dat het niet bestond. Bij veel RAs betaal je een jaarlijks servicebedrag van enkele honderden dollars en daarnaast per aangevraagde pid.

Voor dat geld koop je het risico af van niet-duurzame links, en de bijbehorende reputatie- en continuïteitsschade. Bij gebruik van een DOI mag je als verwijzer er eigenlijk vanuit gaan dat de pid blijft werken óók na reorganisaties, platformmigraties en personeelswisselingen.

Daarnaast moeten DOI-pids aan verplichte metadata-eisen voldoen die door de RA worden gevalideert. Op die manier weet iedereen dat de auteurs zijn wie ze zeggen te zijn, dat de affiliaties kloppen, de licentie op het gebruik van de data is vastgesteld, en nog een stapel andere zekerheden. De RA zorgt ook voor de automatische distributie van de metadata naar derden.

Een DOI geeft daardoor academische legitimiteit. DOI-pids zijn de _first-class citizens_ in wetenschappelijke citatie-indexen, onderzoeksinformatiesystemen, en in veel subsidie- en evaluatiekaders.

Waar je bij Handle betaalt voor een nummer en de mogelijkheid om in het centrale register zelf de persistentie van je data te regelen, betaal je bij DOI voor de institutionele borging: de garantie dat je dat doet. Wanneer je in gebreke blijft mag de RA dat in ultimo vóór je doen. Daarmee blijft het hele ecosysteem persistent.

Hoe werkt DOI dan technisch? Nou, euhm, dat doen ze via een Handle implementatie.

Vandaar dat DOI alles kan zijn wat Handle niet is. DOI vult Handle aan maar vervangt het niet.

## Archival Resoure Key (ARK): doorverwijzing met maximale vrijheid

Hoewel [ARK](https://arks.org) lijkt op Handle is het meer een ontwerpprincipe dan een technische oplossing. Bij ARK heet je nummer een NAAN. Met die NAAN krijg je toegang tot de wereldwijde [N2T-resolvers](https://n2t.net) (_Name to Thing_) die deze nummers kennen en naar jou doorverwijzen.

Het enige dat ARK doet is dus verkeer doorsturen naar jouw lokale resolver. Vanaf dat punt sta je er alleen voor.

Om garanties in het systeem te brengen, verwacht de ARK Alliance wel dat je een pid aanmeldt waarmee de organisatie kan testen of je resolver werkt. Maar daar zit geen enkele institutionele borging aan vast. Bij veruit de meeste organisaties die een ARK NAAN hebben, ontbreekt die test-pid. Als we verder in de krochten van de [ARK specificaties (2008)](https://escholarship.org/uc/item/9p9863nc) afdalen, dan vinden we daar nog meer formele regels die de belofte moeten verstevigen:

`ark:<NAAN>/<lokale pid>` verwijst naar de data.
`ark:<NAAN>/<lokale pid>?` verwijst naar de metadata bij de data.
`ark:<NAAN>/<lokale pid>??` verwijst naar het _commitment statement_ van de organisatie waarin het persistentiebeleid staat.

Ik ken geen enkele organisatie die dat doet.

Sinds 2022 is er [een update van deze eisen](https://www.ietf.org/archive/id/draft-kunze-ark-34.html) en daar lijkt de ARK Alliance zelf ook een beetje de handdoek in de ring te gooien:

> _"ARK resolvers must support the "?info" inflection for requesting metadata. Older versions of this specification distinguished between two minimal inflections: '?' (brief metadata) and '??' (more metadata). While these older inflections are still reserved, because they have proven hard to recognize in some environments, supporting them is optional."_

Maar zelfs die `?info` toevoeging ontbreekt vrijwel overal.

ARK in de praktijk verschilt dus vooral van Handle omdat het een minder centrale oplossing is en niet zo strikt omspringt met de beperkte eisen. Je hebt bij ARK dus zelf een flinke verantwoordelijkheid.

En daardoor is ARK veruit het meest flexibel.

Wanneer je de institutionele toezegging van persistente identifiers hebt gedaan, én je hebt daar passend beleid voor geformuleerd, én de technologie geïmplementeerd - dan is ARK een laagdrempelige manier om het af te maken. De ARK N2T-server vóór je eigen resolver garandeert gebruikers dat links - ook als je organisatie en internetdomein verdwenen zijn - nog steeds naar een zinvolle plek verwijzen.

Dat kan ook met Handle, maar dat heeft wat meer voeten in de aarde.

Het verschil is dan uiteindelijk: heb je behoefte aan de flexibiliteit van een eigen oplossing? Of kies je voor een centraal register waardoor je geen eigen server hoeft in te richten?

## Persistent URL (PURL): minimale belofte, maximale eenvoud

Als DOI het zwaarste is in de familie van persistentiebeloftes, en ARK de lichtgewicht, dan wil ik ook het kleinste broertje [PURL](https://purl.org) noemen. ARK wil in ieder geval nog geborgde garanties ondersteunen. Dat doet PURL niet.

PURL is net zoals Handle een centraal register dat draait op één service. Het systeem is ontwikkeld door [OCLC](https://www.oclc.org) - leverancier van bibliotheeksoftware - en nu in beheer van [The Internet Archive](https://archive.org). Met PURL kun je `purl.org` adressen doorsturen naar een URL. Waar ARK je een NAAN laat registreren, mag je van PURL een - nog niet eerder gekozen - tekenreeks kiezen en hoef je daar geen contract voor te tekenen. Het gooit de hele juridisch-institutionele borging overboord.

PURL stuurt je gebruiker door naar een ander adres. Niets meer en niets minder.

Mag je dat persistent noemen?

Ik vind eigenlijk van wel. Want net als bij ARK, Handle, en ook DOI - zul je met PURL zélf iets moeten gaan doen. Enkel de mate waarin dat zelf-doen wordt afgedwongen, verschilt.

PURL geeft net zomin als andere externe partijen gegarandeerde technische persistentie.

Maar het geeft je wel, net als alle andere oplossingen, de mogelijkheid om persistent te handelen.

In mijn vorige blog heb ik uitgelegd dat je zelfs persistent kan handelen met een willekeurig eigen internetadres. Daar heb je geen resolver voor nodig. Uiteindelijk gaat het erom: heb je voldoende maatregelen genomen om anderen te overtuigen om jouw persistente links te gebruiken?

PURL past in die lijst met mogelijke maatregelen. Je bent als organisatie alleen helemaal op jezelf aangewezen. Als je dat kan - en gebruikers dat ook geloven - dan is een oplossing met PURL persistent.

## Wat als je onafhankelijk van de VS wilt zijn?

Om het nog iets complexer te maken: bij ieder keuze voor een platform is het tegenwoordig gezond om je af te vragen hoe afhankelijk je bent van de VS. Daar heb ik helaas geen goed nieuws.

Handle is van een stevige non-profit organisatie (CNRI) in de Verenigde Staten. DOI is bedacht door de _International DOI Foundation_ (IDF): een non-profit... in de Verenigde Staten. De IDF is toezichthouder op _Registry Agencies_ die over de hele wereld zitten. Twee grote RA's zijn [DataCite](https://datacite.org) en [mEDRA](https://www.medra.org/it/) die uit respectievelijk Duitsland en Italië komen en dus onder Europees recht vallen. Ik durf alleen niet te zeggen hoe (on)afhankelijk die zijn van de _foundation_ in de VS. Er liggen in ieder geval contractuele afspraken.

De ARK Alliance kent geen formele organisatie en is een open internationale gemeenschap. Deze commons is oorspronkelijk door de [_California Digital Library_ (CDL)](https://cdlib.org) opgezet maar is daar geen juridisch onderdeel van. Het is geen dochter, geen stichting, of andere rechtspersoon. ARK is geen systeem met een eigenaar. Het is een afspraak waar je zelf de verantwoordelijkheid neemt.

Dat klinkt mooi en idealistisch. Maar uiteindelijk is er wel iemand die de NAAN's uitdeelt, registreert, en de N2T-servers draait.

Die "iemand" is nog steeds CDL in de Verenigde Staten. Er is ook voor ARK geen Europese oplossing waar je op kunt terugvallen ook al staan alle [NAAN registraties op GitHub](https://cdluc3.github.io/naan_reg_priv/naan_registry.txt). Dat is misschien minder problematisch omdat ook zonder de CDL het aanroepen van `https://pid.p-322.com/ark:<NAAN>/<lokale pid>` nog steeds werkt, maar voor het institutionele gezag en de N2T-resolver tussenstap is ARK net zo afhankelijk van de VS als Handle en waarschijnlijk DOI.

Dan PURL. Het bedrijf OCLC speelt er nu geen rol meer in. Het beheer van `purl.org` is overgedragen aan The Internet Archive. Het begint een beetje te klinken als een hangende plaat: ook dat is een non-profit organisatie in de Verenigde Staten.

Kortom: er lijkt ruimte voor een Europese oplossing. Maar wel graag eentje waarbij we niet van nul beginnen, maar afspraken maken met de Amerikanen.

## En dan: kiezen

Tot hier was het theorie; nu moest ik echt gaan kiezen.

DOI viel als eerste af. Ik zie ons niet heel snel zelfstandig en op enige schaal onderzoekspapers schrijven. We ambiëren ook geen institutionele plaats binnen het wetenschappelijk domein. Willen we wél publiceren dan zijn er genoeg partners om dat samen mee te doen. Als startup vermoed ik trouwens niet dat we in staat zijn om het verplichte beleid effectief te implementeren. Maar dat heb ik niet uitgezocht.

Bleven Handle, ARK en PURL over.

Alledrie voldoen technisch. Maar: wat Handle niet helpt, is dat ik een gezonde afkeer heb van gecentraliseerde oplossingen. Dat is een persoonlijke keuze, er zijn prima argumenten om daar wel voor te kiezen. Dat is vooral afhankelijk van je organisatie, de inrichting van je persistentiebeleid, en de technische architectuur.

Voor P-322 had ik nét een eigen resolver gebouwd (`https://pid.p-322.com`). De eerlijkheid gebied me te zeggen dat het me ook wat tegenstond om die alweer af te zinken en daarvoor het centrale Handle-register in de plaats te zetten. Daarmee zou ook mijn vorige blog accuut achterhaald zijn.

Het minimalistische karakter van PURL is heel aantrekkelijk. ARK en PURL zitten als technische oplossingen best dicht bij elkaar. Maar PURL staat niet in de voorschriften van het [Netwerk Digitaal Erfgoed](https://netwerkdigitaalerfgoed.nl). Dan moet je dus steeds extra moeite doen om uit te leggen dat je infrastructuur wel echt persistent is ingericht.

Dat hoeft bij ARK, Handle, en DOI niet.

Als het doel is om vertrouwen op te bouwen in je links, en de digitaal erfgoedgemeenschap blijkt dat minder in PURL te hebben? Dan kiezen we eerst voor ARK en als dat niet lukt pas voor PURL. Het was waarschijnlijk wel PURL geworden, als ik enkel technische redenen had moeten wegen.

Maar eerst dus ARK.

## Aanvraagproces ARK

Voor de aanvraag moet je twee dingen regelen.

Eerst moet de p-322 resolver niet alleen: `https://pid.p-322.com/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

kunnen doorsturen naar het juiste adres, maar ook `https://pid.p-322.com/ark:<WILLEKEURIGE NAAN>/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`.

Dat was snel gedaan. Het ziet er misschien wat ingewikkeld uit maar die software is geschreven om dingen te kunnen doorsturen. Lukt dat bij de één dan lukt het ook bij ander. Bij aanvraag maakt het trouwens nog niet uit welke NAAN je doorstuurt. Je hebt dat nummer dan immers nog niet.

Verder moest ik een pid aanmaken die naar een servicepagina verwijst waar ARK periodiek kan toetsen of de p-322 resolver het nog doet.

We hebben daarvoor `p322:status:servicestatus` gebruikt.

Via `https://pid.p-322.com/ark:<WILLEKEURIGE NAAN>/p322:status:servicestatus`

word je doorverwezen naar `https://p-322.com/status/persistency/`

waarmee de implementatie is bewezen.

Heb je dat eenmaal geregeld dan blijkt een ARK NAAN aanvragen een heel simpel en vlot proces. Je vult [het formulier](https://docs.google.com/forms/d/e/1FAIpQLSf_847hNXtLGikR-XeDy1uT1AKd24DpHnt5UQh2i8ORRu7u-w/viewform) op de website van de ARK Alliance in. Ze beloven binnen twee werkdagen te antwoorden.

Ik vroeg de NAAN op vrijdag 19 december 2025 aan. Voor veel mensen de laatste werkdag van het jaar. Tot mijn verbazing ontving ik de maandag daarna in de ochtend al de bevestiging van mijn inschrijving met de NAAN: 48229. Ik moet bekennen dat ik dat niet had verwacht.

## Treintjes van doorverwijzingen

P-322 pids werken nu dus in een trein:

`https://n2t.net/ark:48229/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

is een externe locatie die niet afhankelijk is van ons bestaan, noch van het internetdomein `p-322.com`. Valt ooit het doek dan sturen we je hier naar de [P-322 Authoritative External Resolver Repository](https://github.com/GertjanFi/p322-open-pid-resolver) die ik in het vorige blog heb geïntroduceerd. Maar nu alles goed gaat, duwt deze link de gebruiker naar:

`https://pid.p-322.com/ark:48229/p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW`

Deze resolver doet dan verder wat het altijd al deed. Het zoekt `p322:blog:01J6E8F3PFQ2H9R7M4K8V1CW` in ons eigen register op, en verwijst je dan automatisch door naar:

`https://p-322.com/en/posts/20251211-outside-the-dataset-within-the-community-enrichments-as-nanopublications/`

Richten we volgende week de website opnieuw in? Dan passen we ons register aan naar de nieuwe locatie. De pid wijzigt niet.

En dat is nou net de hele bedoeling van persistente identificatie.

Dit werkt voor al het internetverkeer. Of je nou als mens naar een blog wil verwijzen, of als machine op een vast adres specifieke data wil vinden.

Op dat moment leek de architectuur af.

Tot ik me realiseerde dat we nog een verborgen resolver gebruiken - eentje met een ander doel en een andere tijdshorizon.

## Het geheim van de communicatieafdeling

Startups en erfgoedinstellingen: we zijn allemaal druk online aan het communiceren. Dan is het fijn om de aandacht die dat naar de website trekt te analyseren. Daar gebruiken we spannende namen voor als _‘redirect services’_ of ‘link resolutie’. Dat doen we met korte stukjes tekst zoals `CvNg8x`, die we aan een internetadres plakken om het vervolgens op heel specifieke plekken achter te laten.

P-322 gebruikt daarvoor een zogenaamde Go-link: bijvoorbeeld `https://go.p-322.com/CvNg8x`. Die zetten we in een LinkedIn-post waarin we mensen wijzen op een blog. De server `go.p-322.com` zoekt `CvNg8x` op en voegt daar gestandaardiseerde meetgegevens aan toe zoals `utm_campaign`, `utm_medium` en `utm_source`. Daarmee kunnen de communicatiemensen in hun web analytics omgeving precies en geanonimiseerd volgen hoevaak gebruikers tijdens een campagne vanuit LinkedIn naar een blog klikken.

Een go-link is dus geen identifier, maar een meetinstrument met een tijdelijk geheugen.

Maar goh... een stukje software dat een identifier koppelt aan het werkelijke actuele adres? Dat klinkt toch wel erg bekend. En inderdaad: de techniek is óók een resolver en werkt op precies dezelfde manier als een pid. Het stuurt de bezoeker door naar `https://p-322.com/nl/posts/20251211-buiten-dataset-binnen-gemeenschap-verrijkingen-als-nanopublicaties`.

Een tweede resolver dus maar met een radicaal ander doel.

Go leeft namelijk in de tijdschaal van een campagne, met de vluchtigheid van een meivlinder. Pids zijn bedoeld voor de lange adem, voor citatie, archivering en hergebruik.

## Management-werkelijkheid vs. Technische-principes (0-1)

Toch voel je hem aankomen: ergens in de organisatie - meestal in een managementoverleg - ontstaat de verleiding om die twee bij elkaar te willen trekken. Want waarom zou je immers dingen dubbel doen?

Arg.

Het probleem dat ik daarmee heb, is niet technisch, maar principieel.

Eén van de belangrijkste lessen in dit werk is dat je een bijna automatisch wantrouwen ontwikkelt tegen systemen die te veel willen doen.

Daarnaast: analytics is geen identiteit.

Als je de langetermijn-pids binnen je marketinglaag brengt, dan vraag je om problemen.

Niet alleen omdat duurzame identiteit niet afhankelijk zou moeten zijn van het verhaal dat je organisatie vandaag vertelt, maar ook omdat het extreem fragiel is. Iedere privacy-instelling, iedere adblocker, iedere security-policy wordt ineens een existentieel risico. Browsers zijn bijna ontworpen om web analytics te wantrouwen of blokkeren. Een pid was nu juist bedoeld om boven dat soort tijdelijkheden uit te stijgen.

## De resolver-treinen

Daarom trekken we alles uit elkaar. De resolver op `https://pid.p-322.com` bemoeit zich uitsluitend met wat we permanent publiceren. Het borgt identifiers die canoniek en citeerbaar zijn en die niet weten, en niet hoeven te weten, welke onherkenbare gebruiker er langskomt.

De software op `https://go.p-322.com` is een instrument dat we morgen zonder spijt kunnen vervangen. Het mag verdwijnen, veranderen of opnieuw ingericht worden, zonder dat onze identiteit breekt.

Je combineert de twee door ze achter elkaar te hangen. En daarbij is de volgorde geen detail, maar een principe. De go-link wijst naar de pid. De pid wijst naar de representatie. De stroom is helder: _go_ voegt context en meetbaarheid toe, de pid bewaakt de identiteit, en de website levert de inhoud. Omdat elke laag zijn eigen taak heeft, wordt het geheel robuust.

Vrij naar [Wheeler's aphorisme](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering): "elk webprobleem lijkt oplosbaar met nóg een extra redirect - tot je verdrinkt in redirects".

## ARK & Go

Waar past dan die ARK N2T resolver? Dat is een ander pad, een heel andere trein. Met een ander doel.

Als communicatie aan de slag is dan publiceren we de go-link op plekken die tijdens de campagne waarde hebben. Dat zijn vooral de vluchtige berichten waarin we de aandacht willen trekken: de socials, e-mailfooters, etc. Dan is de doorverwijzingstrein: **Go-link → P-322 pid → huidige weblocatie**.

Maar een pdf rapport dat we tijdens de campagne publiceren met een verwijzing naar data? Daar staat gewoon de pid en nooit de go-link.

Kiezen mensen zelf om onze persistente links te gebruiken dan heeft communicatie daar geen enkele rol in. We geven dan alle garanties die daarbij horen. Het pad is dan **ARK N2T → P-322 pid → huidige weblocatie**.

Dat is ook precies waar de keuze voor ARK doorslaggevend werd. Met ARK blijft onze eigen P-322 pid-resolver het vaste middelpunt van de ketens. Zowel de ARK N2T-resolver als de go-links wijzen uiteindelijk daarheen.

Had ik voor Handle gekozen, dan zou de formele pid-resolutie via het centrale CNRI-register lopen. Go-links hadden dan óf direct naar de website moeten verwijzen - en waren daarmee buiten de persistentie-keten gevallen - óf eerst naar CNRI moeten gaan, waarbij zeer waarschijnlijk de meetinformatie onderweg verloren gaat. We hebben geen Handle, en zonder praktijktoets kan ik dat niet met 100% zekerheid zeggen. Het lijkt me een ingewikkeld verhaal waarbij je analytics afhankelijk zijn van het gedrag van een server buiten je beheer.

ARK maakt het in ieder geval mogelijk om marketing vóór de pid te plaatsen, zonder de identiteit van de pid zelf aan te tasten.

In beide treinen zit de P-322 pid resolver in het hart. De paden komen daar samen en dat is precies de bedoeling. Daardoor kunnen we via onze infrastructuur garanderen dat de gebruiker altijd op de juiste plek terecht komt om de informatie te vinden. Zonder dat je dat ziet.

## Niet alles hoeft alles te zijn

Uiteindelijk ging deze keuze dus niet over ARK, Handle, DOI of PURL. Het ging over het herkennen van verschillende beloftes die verschillende infrastructuur verdienen. Wie probeert die beloftes samen te persen in één systeem, maakt alles fragieler in plaats van eenvoudiger.

Persistente identificatie vraagt om terughoudendheid. Niet alles wat je publiceert hoeft meetbaar te zijn, en niet alles wat meetbaar is hoeft permanent te blijven. Door identiteit los te koppelen van aandacht ontstaat ruimte om beide serieus te nemen - zonder dat ze elkaar ondermijnen.

Misschien is dat wel de kern van duurzame digitale infrastructuur: niet streven naar systemen die alles kunnen, maar naar systemen die precies weten wat ze níet moeten doen.

En terwijl ik dat in de laatste werkweek van december in elkaar aan het zetten was, ontstond er een soort vreemde geruststellende eenvoud.

Je hebt een duurzame identiteit. Je hebt een communicatie knooppunt. Je hebt interne en externe resolvers voor koppeling en doorverwijzing. En een open depot voor de overdraagbaarheid.

Het voelt bijna saai. Net zo saai als een testament opstellen.

Maar saai en degelijk, zo [leerde ik vorig jaar op de NDE HackaLOD](/nl/posts/20251103-hackalod-2025-waarom-saai-de-basis-van-cool-is), is vaak precies het juiste gevoel bij infrastructuur die langer mee moet gaan dan je eigen aandachtsspan.
