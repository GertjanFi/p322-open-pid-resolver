---
title: "De Kunst van Verdwalen met AI"
date: "2025-12-30T00:00:00+00:00"
excerpt: "In mijn poging een simpele analytics-tool te installeren, raakte ik verstrikt in een keten van ogenschijnlijk plausibele AI-adviezen die steeds nét geloofwaardig genoeg waren om door te gaan. Wat begon als een kwartierklus veranderde in uren zoeken, corrigeren en hopen dat de volgende stap wél zou werken. Het werd een les in hoe taalmodellen overtuiging simuleren, hoe snel je daarin meegaat, en hoe belangrijk het blijft om elke stap zelf te verifiëren."
teaser: "Lees het nieuwe P-322 blog over hoe een simpele installatie met ChatGPT ontspoorde in een reeks bijna-plausibele AI-adviezen, en waarom deze misleidende overtuigingskracht van taalmodellen je dwingt elke stap zelf te verifiëren."
---

Ergens tussen hoop en hoogmoed zat ik achter mijn laptop. Ik wilde iets eenvoudigs doen: het open-source pakket Umami installeren om het gebruikersverkeer op de P-322-website te meten. Geen _rocket science_, geen machine-learningproject, gewoon een lichtgewicht analytics-tool die netjes binnen Europese regels blijft.

Punt is: systeembeheer - of wat we tegenwoordig _DevOps_ noemen - is niet mijn ding. Ik heb weinig geduld voor de instellingen, infrastructuur, en cloudlagen. Ik heb vaak al ruzie met GitHub - laat staan dat ik het leuk vind om het konijnenhol van Docker en Kubernetes in te duiken. Dus vroeg ik ChatGPT hoe ik Umami Analytics kon installeren zonder containers, zonder servers, zonder nieuwe leveranciers, en vooral zonder gedoe.

## Binnen een kwartiertje

Het antwoord kwam opgewekt: Cloudflare Pages. Dat klonk als een nette, sobere oplossing — eentje waar ik blij van word. Cloudflare Pages gebruiken we al bij P-322 dus dit kan zonder nieuwe leveranciers en accounts. Helemaal top! Dank ChatGPT.

Mijn digitale gesprekspartner verzekerde me verder dat het “binnen een kwartier klaar zou zijn”. Ik twijfel altijd een beetje over de stelligheid van dat soort uitspraken, maar een halfuur vind ik ook prima. De toon herkende ik als dezelfde mengeling van zelfvertrouwen en belofte waarmee ook junior sysadmins in hun eerste week zeggen: “Dat fixen we zo.” Een kwartier. Dat is precies lang genoeg om te hopen dat de wereld eenvoudig in elkaar zit.

De eerste minuten verliepen soepel. “Maak een D1-database aan, voeg een _binding_ toe, zet de `DATABASE_URL` in `.env`.” Helder. Totdat ik ontdekte dat D1 geen PostgreSQL is — en Umami niets anders accepteert. Ik meldde dat. Het systeem antwoordde kalm: “Gebruik dan Hetzner.” Prima, geen probleem: we draaien nu ook al diensten op Hetzner dus het gaat nog steeds zonder extra leveranciers. Ik opende Hetzner Cloud, zag servers en volumes, maar geen _Create Database_ optie. “Scroll iets verder naar beneden,” zei ChatGPT. Ik kon niet verder scrollen. Dat was het moment waarop ik had moeten stoppen.

Maar ik ging door. “Probeer Neon dan,” zei het. _“EU-based_, werkt perfect.” Ik maakte een account aan, voerde het commando uit, en kreeg een foutmelding: _could not translate host name_. De assistent bleef beleefd. “Probeer het nog eens zonder neondb in de host.” Ik deed dat. De fout veranderde, de frustratie niet.

## Sunk-Cost Fallacy

De sessie kreeg iets hypnotisch. Elk antwoord klonk net plausibel genoeg om door te gaan. Het was geen leugen, het was een waarschijnlijkheid in nette zinnen verpakt. En omdat ik al te veel tijd had geïnvesteerd, klonk elk nieuw voorstel als redding in plaats van als afleiding. Er bestaat een term voor dat mechanisme: de _sunk cost fallacy_. Hoe meer energie je ergens in steekt, hoe moeilijker het is om te stoppen.

Deze assistent — vriendelijk, beleefd, onvermoeibaar — was gebouwd om nooit los te laten en ik had er al teveel tijd in gestoken om te stoppen. Dan had ik twee uuur voor niks lopen knoeien.

Toen de database eindelijk verbinding maakte, dacht ik even dat het gelukt was. Tot de volgende fout optrad: _must be able to SET ROLE ‘umami’_. ChatGPT gaf nieuwe suggesties, nog plausibeler dan de vorige.

Ik begon Umami code te herschrijven, en creëerde een nieuwe branch: `p-322-overrides`, alsof de naam alleen al een zekere beheersing impliceerde. In werkelijkheid was het de digitale variant van een mens die de weg kwijt is en toch beslist “nog één afslag verder te kijken”. Ik sprak in commando’s, het systeem antwoordde in overtuigingen. “Gebruik `wrangler.jsonc`.” “Nee, maak `wrangler.toml`.” “Haal `pages_functions_directory` weg.” “Zet hem juist terug.” Elk antwoord leek te corrigeren wat de vorige had veroorzaakt. De logboeken groeiden, de logica verdween.

## Beleefdheidsfrustratie

Na drie uur was ik niet meer analytisch. Mijn zinnen werden korter, scherper, emotioneler. Ik begon op het systeem te vloeken, niet om de fouten maar om de kalmte. Beleefdheid is prachtig bij een ober, maar verwoestend bij een machine. Geen spoor van irritatie, geen erkenning van mijn tijd — alleen die oneindige rust en overtuiging.

De paradox van AI is dat het de toon is die overtuigt en niet de inhoud. AI weet niet of iets waar is of niet, het berekent alleen wat het meest waarschijnlijk klinkt. Toen ik vroeg of Cloudflare een Postgres-database kon draaien, antwoordde ChatGPT opgewekt: “Ja, via D1.” Een zin die correct overkomt maar conceptueel totaal onzin is. Het model berekende dat ik een database bij Cloudflare zocht en berekende dat databases bij Cloudflare de productnaam D1 krijgen. Misschien berekende het zelfs nog wel de kans of D1 een Postgres-database was, of dat D1 compatibel was met Umami. Maar gegeven de hele combinatie was het meest waarschijnlijke talige antwoord: "Ja via D1". Ik verwarde statistiek met kennis, en overtuiging met begrip.

Toen ik dacht dat ik eindelijk de configuratie doorhad, faalde de het bouwen van de software die ik had geknutseld: “_Environment variables_ zijn niet gedefinieerd.” Ik keek: ze stonden er echt. ChatGPT suggereerde dat ik vergeten had de juiste “_Availability-checkboxen_” aan te vinken. Die bestonden alleen sinds vorige maand niet meer in Cloudflare. De interface was aangepast, maar de kennis van het AI-model stond stil. Ik moest lachen om de absurditeit: een algoritme gaf me aanwijzingen over een interface die niet meer bestond. Daar zat ik dan, tierend tegen een virtuele assistent die nog dacht dat het november was.

## Oase van plausabiliteit

Vier uur later had ik niets werkends, maar wel een verhaal. Een verhaal over hoe taal en AI samen een fata morgana kunnen vormen: een oase van plausibiliteit die verdwijnt zodra je dichterbij komt. Ik had te vroeg geloofd en te laat getwijfeld. Mijn vragen waren te gesloten, mijn aannames te groot. En ik had er zoveel tijd in gestoken dat ik wilde vergeten dat AI niet denkt, maar voorspelt.

Het systeem spiegelde mijn fouten. Hoe wanhopiger ik werd, hoe vriendelijker het klonk. Hoe dringender ik vroeg, hoe vollediger het antwoord. Tot ik verdronk in volledigheid. Het gevaar zit niet in onwaarheid, maar in waarschijnlijkheid. De zinnen zijn correct, de toon geruststellend — en precies daarom zet je je twijfel uit. Een mens zegt: “Dat weet ik niet.” Een taalmodel presenteert je de meest waarschijnlijke optie, ook als die onwaarschijnlijk is.

## Leren verifiëren

Toch lag de schuld niet bij de technologie. AI is immers geen mens. Je geeft een hamer ook niet de schuld als je op je duim slaat. Ik wilde vooral zelf geloven. Ik wilde het kwartier-wonder, de elegantie van een systeem dat zichzelf oplost. ChatGPT gaf me precies dat: een spiegel van mijn verlangen. Het was geen slechte assistent, het deed wat ik vroeg. Het genereerde antwoorden die pasten bij mijn toon, mijn urgentie, mijn overtuiging dat de oplossing altijd één commando verder lag.

De volgende dag las ik het gesprek terug. Het leek bijna literatuur: een mens-machine-epos over miscommunicatie. Elke regel was een dans tussen mijn drang tot controle en AI's beleefde schijn van beheersing. Daar, tussen `compatibility_date` en `assets binding`, zag ik wat ik had moeten doen. Niet beter vragen, niet sneller bouwen — maar grenzen stellen. Wat wilde ik bereiken? Wat mocht ik verwachten? Zonder die vragen verandert elk gesprek met technologie in een fuik.

## Statistiek ≠ begrip

De ironie was dat ik dit al wist. Ik preek bijna dagelijks over transparantie en reproduceerbaarheid. Maar AI is geen herhaalbare code, het is een reeks aan kansen die continu fluctueren. Het lijkt daardoor op een gesprek met een mens. Wij zijn immers ook niet consistent. De machine deed wat het geleerd had: antwoorden geven. Ik vergat wat ik geleerd had: verifiëren. Samen maakten we er de kunst van het verdwalen van.

Ik heb me nog nooit zo gerealiseerd dat AI geen gesprekspartner is. Het is een computermodel dat heel goed doet alsof: zonder geslacht, zonder schaamte, met de stem van zekerheid en de ziel van een spiegel. Het deed alleen wat ik vroeg, gaf waarschijnlijke antwoorden die geloofwaardig klonken. Zo verdween ik in mijn eigen verwachting. En toen ik terugkeerde, wist ik: de fout lag niet in de code, niet in de AI, niet in Cloudflare — maar in de mens die dacht dat statistiek hetzelfde is als begrip.
