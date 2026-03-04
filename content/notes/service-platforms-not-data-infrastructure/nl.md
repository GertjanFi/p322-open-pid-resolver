---
title: "Dienstplatformen zijn geen datalagen — tijd om dat te erkennen"
date: "2025-11-18T00:00:00+00:00"
excerpt: "Dienstplatformen bruisen als jazzmuzikanten van creativiteit en improvisatie. Maar ook in jazz is er altijd de baslijn die alles bij elkaar houdt. In mijn reactie op het rapport 'Van Data naar Dienst' laat ik zien dat die rol in onze digitale erfgoedinfrastructuur bij de makelaar hoort. Door die plek serieus te nemen, ontstaat ruimte voor platforms om te doen waar ze het best in zijn."
---

De afgelopen week las ik het NDE-rapport '[Van Data naar Dienst](https://netwerkdigitaalerfgoed.nl/nieuws/van-maatwerk-naar-netwerk-samen-bouwen-aan-erfgoedplatformen/)', met een visie op de ontwikkeling van verbonden digitale dienstplatformen. Daarin verwijzen de auteurs geregeld naar de [datahub Koloniale Collecties](https://app.colonialcollections.nl) als voorbeeld. Dat is prachtig, maar er is iets dat ik in dat project heb geleerd. Niet in één moment, maar in een reeks kleine ontdekkingen die pas later een patroon vormden.

Iedere keer dat we data bijeenbrachten, verrijkten, normaliseerden, publiceerden en weer moesten bijwerken, deden we hetzelfde: ongemerkt schoof ik steeds meer verantwoordelijkheden richting het dienstplatform. Niet omdat het logisch was, maar omdat het praktisch voelde. Dat lijken we met dit rapport nu structureel te willen doen.

## Datalaag en presentatielaag

Het centrale punt in het rapport is de splitsing van de dienstplatforminfrastructuur in een expliciet gescheiden presentatielaag en datalaag, met daartussen een koppeling gebaseerd op open standaarden. Expliciete scheiding met gestandaardiseerde, open koppelingen? Prima idee, meteen doen. Maar om dat bij het dienstplatform te beleggen? Kunnen we daar nog even over nadenken?

Ik begrijp waarom we dat zo opschrijven — ik deed het in de datahub zelf ook — maar juist daardoor weet ik waarom we het anders moeten inrichten.

De datahub zit al dicht tegen die expliciete splitsing aan: een datalaag met transformaties, verrijkingen en hermodelleringen die samen landen in een _knowledge graph_. Die nieuwe Koloniale Collecties-graaf praat via een open koppeling (in ons geval [Next.js](https://nextjs.org) + [ElasticSearch](https://www.elastic.co/elasticsearch)) met de presentatielaag, de website met de gebruikersomgeving. Voor hergebruik hebben we de graaf zelfs geregistreerd in het datasetregister.

Tijdens het opbouwen dacht ik telkens: “Dit moet nu even, anders kunnen we niet leveren. Maar eigenlijk wil je dit niet.” De datahub Koloniale Collecties is immers tijdelijk en vluchtig. Zoals bij vrijwel alle dienstplatformen zit er een consortium achter met projectfinanciering die eindig is — in dit geval tot 2026. Het is niet de aangewezen plek om een datalaag te beheren waarop ook anderen moeten kunnen bouwen.

En de grap is: hiervoor hebben we in de DERA al lang een oplossing. De makelaar. De rol die ik steeds vergeet.

## Waarom dienstplatformen sterk zijn, zolang ze niet worden overladen

Ik houd van dienstplatformen. Ik heb ze gebouwd, geadviseerd, herbouwd en af en toe begraven. Ze zijn creatief, spannend en heerlijk vluchtig. Het zijn de jazzmusici van de erfgoedsector: veel improvisatie, weinig archivering. Ze horen licht te zijn, snel, en gericht op doelgroep en verbeelding. Het zijn geen plekken voor duurzame dataintegratie.

Dat is niet beledigend maar gezond. Dienstplatformen leven van hun flexibiliteit. Ze zijn bijna per definitie tijdelijk, projectmatig en thematisch. Je wilt niet dat langdurige semantische consistentie afhankelijk is van de projectleider van het dienstplatform “Jenever Jazz Jams”.

Vluchtigheid zit ingebakken in een dienstplatform. De organisatorische vraag die vrijwel alle dienstverleners zichzelf stellen is: “Hoe borgen we deze tijdelijke financieringskans?” Aan het einde van iedere subsidie blijft er namelijk altijd nog een staart van gebruikerswensen over.

Ik heb ook weleens gedacht: misschien helpt een stichting, misschien overtuigt dat iemand om het nog langer te financieren. Maar eerlijk: daarmee stel je de echte vraag alleen maar uit. Wat is hier structureel, en wat niet? Bovendien komt het meestal niet eens tot een stichting en blijft het bij de plechtige belofte van instellingen om na afloop “de verantwoordelijkheid te nemen”. Vaak lachen partijen dan nog even vriendelijk en gaan over tot de orde van de dag.

En dat is goed. Niet alles hoeft voor de eeuwigheid. Als een dienst waarde heeft voor gebruikers, vindt het wel ergens voortgang. Zodra die waarde verdwijnt, verdwijnt het platform mee.

Maar dan moet je er dus niet een hele datalaag onderbrengen met harvesting, transformaties, knowledge graphs en indexen. Zeker niet als je daarmee anderen wilt bedienen.

## De DERA-driehoek

De [DERA](https://dera.netwerkdigitaalerfgoed.nl) — onze Digitaal Erfgoed Referentie Architectuur — is duidelijk over de rollen binnen de infrastructuur. Voor deze discussie zijn [Bronhouder](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Bronhouder), [Makelaar](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Makelaar) en [Dienstverlener](https://dera.netwerkdigitaalerfgoed.nl/index.php/Rollen#Dienstverlener) het belangrijkst. Ze vormen een driehoek die eenvoudiger is dan hij soms lijkt.

Als dienstverlener is het verleidelijk om de verantwoordelijkheid te pakken: ik heb een leveringsverplichting, niemand doet het voor me, dus ik doe het zelf wel even.

- Verrijking van een dataset op basis van het Termennetwerk? Logisch om in het dienstplatform te doen.
- Geautomatiseerde verbeteringen en transformaties? We hebben al een pijplijn, dus dat kan erbij.
- Een knowledge graph waarin alles samenkomt? Goede zaak, hang er meteen persistente identifiers aan...
- Een API waarmee de presentatielaag kan praten? Perfect.

Je wilt het allemaal doorvoeren in het project waarin je toch al werkt.

Maar telkens hoorde ik in mijn achterhoofd: dit hoort niet bij de dienstverlener. Dit hoort bij de makelaar. De rol die niet verstopt op zolder ligt, maar gewoon op de DERA-site staat.

## En de Bronhouder dan?

De bronhouder zit aan de andere kant van het duurzaamheidsspectrum. Waar de dienstverlener een rondreizende muzikant is die in verschillende samenstellingen improviseert, is de bronhouder een gevestigd orkest dat al decennia hetzelfde doet: weinig vernieuwend, weinig flexibel, met een lange-termijnplanning. Dat is precies wat je nodig hebt om voor eeuwen gegevens te bewaren en beheren, maar het keert zich tegen je als je soepel wilt inspelen op trends.

Op pagina 22 van de 'Van Data naar Dienst'-visie lezen we dat bronhouders datasets-op-maat zouden moeten aanbieden. Bijvoorbeeld alle objecten met een WO2-term, of alle objecten waarvan de vervaardiger een specifieke RKDartists-term heeft. Platformen zoals Oorlogsbronnen en Van Gogh Worldwide kunnen dat dan eenvoudiger verwerken.

Ik ken maar weinig bronhouders die dat kunnen. En de paar die het kunnen zeggen terecht: dat is niet onze taak. Bronhouders publiceren generieke informatie die voor iedereen bruikbaar is. Als we gaan verwachten dat bronhouders trends signaleren en daarvoor maatwerkselecties klaarzetten, dwingen we ze specifieke posities in te nemen.

Bronhouders moeten vrij zijn om te bepalen of en hoe ze stelling willen nemen, zeker wanneer het gaat om thema’s in het publieke debat zoals roofkunst of slavernijverleden. Niet elke instelling wil dat, en instellingen zullen zelden dezelfde keuzes maken.

Stel dat we toch verwachten dat elke bronhouder een maatwerk selectie “objecten met een koloniaal verleden” voor de datahub klaarzet. Dan moet iedere bronhouder ook kiezen wat daarin hoort. Daarmee gaan Nederlandse instellingen bepalen wat mogelijk wel of niet in aanmerking komt voor restitutie.

Ah, maar dan leggen we de definitie toch centraal vast, in een register? Dat kan — al hou ik niet van centrale eisen — maar de uitvoering blijft bij de bronhouder. En die moet de definitie altijd interpreteren.

De infrastructuur moet borgen dat een dienstplatform zelf selecties kan maken — bijvoorbeeld wanneer de RCE en een Surinaamse belangengroep van mening verschillen over de koloniale context van een object.

Selecties maken hoort niet bij de bronhouder. De dienstverlener moet onafhankelijke keuzes kunnen maken om gebruikers te dienen.

## Waar dan wel? De makelaar

Als een dienstverlener te vluchtig is en de bronhouder deze taken niet moet krijgen, waar dan wel?

Bij de makelaar.

Een makelaar biedt infrastructuur waarin partijen kunnen bepalen:

- welke data van bronhouders wordt verwerkt (selectie),
- hoe deze data wordt verwerkt (transformatie),
- hoe de uitkomst wordt gepubliceerd (distributie), eventueel aangevuld met verrijkingen.

Een makelaar levert daarmee dataverwerkingspijplijnen. Alle verwerkingen moeten worden gedocumenteerd en gelogd voor audits (algoritme X heeft op moment Y voor partij Z de data van A naar B omgezet), en beschikbaar komen in verschillende modellen.

De datalaag verdwijnt daarmee uit het dienstplatform en krijgt een plek bij de makelaar. De dienstverlener wordt afnemer van deze pijplijnen en bouwt de gebruikersomgeving daarbovenop.

Ook bronhouders kunnen terecht bij de makelaar: bijvoorbeeld voor een pijplijn die data uit het collectiesysteem opschoont en terugschrijft in een nieuw importbestand. Zo verbeter je continu de kwaliteit van je eigen gegevens — zonder handmatige slagen, onbeheersbare scripts of afhankelijkheid van leveranciers.

## Op weg naar Europese data spaces

In de [Nationale Strategie Digitaal Erfgoed 2025–2028](https://www.rijksoverheid.nl/documenten/beleidsnotas/2024/11/30/nationale-strategie-digitaal-erfgoed-2025-2028) staat dat Nederland een dataruimte voor cultureel erfgoed wil bouwen. Op bladzijde 10 koppelt de NSDE dat aan de Europese ambitie voor een _common European data space for cultural heritage_.

Ook binnen dat Europese model is de makelaar noodzakelijk. Europa noemt het een _Data Intermediary_ of _Federated Broker_, maar de functie is hetzelfde: iemand moet de data verwerken en daarbij toetsen wie wat mag, en waarom. En dat moet je niet projectmatig willen organiseren.

Makelaars toetsen naar de regels van bronhouders welke afnemer welke brondata mag zien. Want hoewel digitaal erfgoed een vrij uitzonderlijke openheid van data heeft, hebben ook wij met allerlei restricties en kaders te maken.

Een makelaar moet bijvoorbeeld:

- kunnen garanderen dat er geen AVG-gerelateerde gegevens in de getransformeerde dataset zitten (juridische kaders).
- voor de dienstverlener borgen dat er geen objecten met menselijke resten in het platform komen (ethische kaders).
- bronnen van verrijkingen door derden kunnen weigeren en zo voorkomen dat Russische of Chinese hackers via gerichte nep-bijdragen bij koloniale objecten de relatie tussen Nederland en Indonesië beschadigen (inhoudelijke kaders).

Dit zijn uitdagingen waar we bij de datahub allemaal tegenaan liepen.

Implementatie van zulke processen kan niet uit tijdelijke projectfinanciering komen en hoort niet bij de bronhouder. Dit is gespecialiseerd werk. Het werk van de makelaar.

## De makelaar als contrabas die de jazz draagt

De makelaar is niet spectaculair. Hij schittert niet. Hij staat niet op de homepage en krijgt zelden applaus. Maar hij bewaakt de continuïteit. Hij houdt verrijkingen bij elkaar. Hij zorgt dat data die vandaag wordt gepubliceerd morgen nog betekenisvol is. Hij voorkomt dat we telkens opnieuw moeten beginnen, dat elke bronhouder achter elke trend moet aanrennen, en dat elke dienstverlener zijn eigen mini-infrastructuur bouwt.

Maar zijn werk is zo stabiel dat we met z'n allen vergeten dat het de bassist is die ons draagt. In het rapport 'Van Data naar Dienst' wordt de makelaar geen één keer genoemd. En ook ik merkte in het datahubproject hoe vaak ik deze rol over het hoofd zag op momenten waarop ik hem het hardst nodig had. Dat is denk ik het belangrijkste inzicht:

_Een dataruimte ontstaat alleen wanneer de makelaar zijn plek krijgt. Niet verstopt in een dienstplatform. Niet heruitgevonden bij iedere subsidie. Niet op het bordje van de bronhouder. Maar precies daar waar hij hoort: tussen de presentatielaag en de brondata._

Het is een structurele laag die in de DERA staat én die de Nationale Strategie nodig heeft om de Europese ambities waar te maken.

Een dienstverlener is vluchtig.

Een bronhouder is duurzaam.

De makelaar is stabiel: verbindend, stabiliserend, en verankerend.
