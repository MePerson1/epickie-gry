const defaultRequirements = {
  os: "Windows 10",
  processor: "Intel i5 or equivalent",
  memory: "8 GB",
  storage: "50 GB available space",
  gpu: "Nvidia GTX 1060",
};

export const games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    subtitle: "Dostępne",
    description:
      "W The Witcher 3: Wild Hunt wcielasz się w postać Geralta, doświadczonego łowcy potworów, który przemierza rozległy i szczegółowo wykreowany świat fantasy. Gra zachwyca dynamiczną fabułą, licznymi wątkami pobocznymi oraz moralnymi wyborami, które wpływają na rozwój historii. Każde spotkanie, walka z przerażającymi stworzeniami i eksploracja tajemniczych lokacji dostarczają graczowi głębokich emocji i niezapomnianych wrażeń. Fabuła rozwija się stopniowo, oferując graczowi możliwość odkrycia wielu sekretów tego niezwykle realistycznego świata.",
    publisher: "CD Projekt RED",
    releaseDate: "2015-05-19",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/wiedzmin3.jfif",
    thumbnail: "/images/wiedzmin3.jfif",
    categories: ["RPG", "Fantasy"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    subtitle: "Dostępne",
    description:
      "Cyberpunk 2077 przenosi gracza do futurystycznego, neonowego świata, w którym technologia i ludzkie ambicje przenikają się na każdym kroku. Wcielając się w postać najemnika, odkrywasz mroczne zaułki metropolii Night City, podejmujesz trudne decyzje moralne i stajesz w obliczu niebezpieczeństw, które zagrażają całej cywilizacji. Gra oferuje ogromny, otwarty świat, pełen detali, dynamicznych walk oraz licznych wątków fabularnych, które razem tworzą niezapomnianą, immersyjną przygodę.",
    publisher: "CD Projekt RED",
    releaseDate: "2020-12-10",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/cyberpunk2077.jpg",
    thumbnail: "/images/cyberpunk2077.jpg",
    categories: ["RPG", "Action", "Sci-Fi"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    subtitle: "Dostępne",
    description:
      "Red Dead Redemption 2 to epicka opowieść o życiu na Dziki Zachód, gdzie brutalność i honor splatają się z pięknem otwartych przestrzeni. Gra pozwala wcielić się w postać gangstera, którego losy są splecione z historią amerykańskiego pogranicza. Dzięki imponującej grafice, realistycznej mechanice jazdy i głębokiej fabule, każda rozgrywka oferuje autentyczne emocje, dramatyczne zwroty akcji oraz możliwość eksploracji niezwykle zróżnicowanego świata, pełnego wyzwań i niezapomnianych spotkań.",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/rdr2.jpg",
    thumbnail: "/images/rdr2.jpg",
    categories: ["Action", "Adventure", "Open World"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 4,
    title: "Grand Theft Auto V",
    subtitle: "Dostępne",
    description:
      "Grand Theft Auto V oferuje graczom niezwykle rozbudowany otwarty świat, w którym mogą wcielić się w różne postaci, planować skomplikowane napady i uczestniczyć w dynamicznych pościgach. Gra obfituje w intensywną akcję, realistyczne odwzorowanie miejskiego krajobrazu oraz zróżnicowane zadania, które angażują zarówno miłośników akcji, jak i fanów głębokiej fabuły. Wielowymiarowa historia i możliwość gry wieloosobowej sprawiają, że każda rozgrywka jest pełna niespodzianek i wyzwań.",
    publisher: "Rockstar Games",
    releaseDate: "2021-09-17",
    price: "49 zł",
    requirements: { ...defaultRequirements },
    image: "/images/gta5.jpg",
    thumbnail: "/images/gta5.jpg",
    categories: ["Action", "Adventure", "Open World"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 5,
    title: "Minecraft",
    subtitle: "Dostępne",
    description:
      "Minecraft to kultowa gra, która pozwala graczom na kreatywną budowę, eksplorację nieograniczonego świata oraz przetrwanie w surowych warunkach. Dzięki nieskończonym możliwościom modyfikacji, gra oferuje zarówno spokojne tryby dla fanów budowania, jak i intensywne wyzwania survivalowe. Niezależnie od tego, czy chcesz stworzyć własne imperium architektoniczne, czy przetrwać najcięższe warunki, Minecraft gwarantuje godziny satysfakcjonującej zabawy i rozwijania wyobraźni.",
    publisher: "Mojang",
    releaseDate: "2011-11-18",
    price: "39 zł",
    requirements: { ...defaultRequirements },
    image: "/images/minecraft.webp",
    thumbnail: "/images/minecraft.webp",
    categories: ["Sandbox", "Survival", "Adventure"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 6,
    title: "Fortnite",
    subtitle: "Dostępne",
    description:
      "Fortnite to dynamiczna gra battle royale, która łączy w sobie elementy strzelanki, budowania struktur i intensywnej rywalizacji w trybie multiplayer. Gra zdobyła ogromną popularność dzięki regularnym aktualizacjom, unikalnym wydarzeniom oraz możliwości współpracy z graczami z całego świata. Rozgrywka charakteryzuje się szybkimi akcjami, spektakularnymi momentami i stale zmieniającym się środowiskiem, co sprawia, że każda runda jest pełna adrenaliny i nieprzewidywalnych zwrotów akcji.",
    publisher: "Epic Games",
    releaseDate: "2017-07-25",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/fortnite.jpg",
    thumbnail: "/images/fortnite.jpg",
    categories: ["Battle Royale", "Shooter", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Battle Royale"],
  },
  {
    id: 7,
    title: "League of Legends",
    subtitle: "Dostępne",
    description:
      "League of Legends to kultowa gra MOBA, w której gracze wcielają się w bohaterów o unikalnych umiejętnościach i rywalizują w drużynowych bitwach o strategiczne cele. Gra oferuje głęboki system rozwoju postaci, regularnie organizowane turnieje oraz intensywną rozgrywkę opartą na współpracy i taktyce. Każda rozgrywka wymaga precyzyjnego planowania, szybkiego podejmowania decyzji i doskonałej komunikacji, co sprawia, że gra jest niezwykle wymagająca i emocjonująca dla zawodowych graczy oraz amatorów.",
    publisher: "Riot Games",
    releaseDate: "2009-10-27",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/lol.jpg",
    thumbnail: "/images/lol.jpg",
    categories: ["MOBA", "Strategy", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Competitive"],
  },
  {
    id: 8,
    title: "Counter-Strike: Global Offensive",
    subtitle: "Dostępne",
    description:
      "Counter-Strike: Global Offensive to kultowa strzelanka taktyczna, która od lat przyciąga miliony graczy na całym świecie. Gra kładzie nacisk na precyzyjne strzelanie, zgranie zespołowe i strategiczne podejście do każdego starcia. Dzięki dynamicznym rozgrywkom, różnorodnym mapom i regularnym aktualizacjom, CS:GO utrzymuje wysoki poziom emocji oraz konkurencyjności, czyniąc każdą rozgrywkę intensywnym testem umiejętności i refleksu.",
    publisher: "Valve",
    releaseDate: "2012-08-21",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/csgo2.jpg",
    thumbnail: "/images/csgo2.jpg",
    categories: ["Shooter", "Action", "Competitive"],
    type: "Game",
    features: ["Multiplayer", "Competitive"],
  },
  {
    id: 9,
    title: "Dota 2",
    subtitle: "Dostępne",
    description:
      "Dota 2 to jedna z najpopularniejszych gier typu MOBA, w której dwie drużyny graczy walczą o strategiczne cele, wykorzystując unikalne moce swoich bohaterów. Gra charakteryzuje się głęboką mechaniką, skomplikowaną taktyką oraz koniecznością doskonałej współpracy między zawodnikami. Każda rozgrywka wymaga precyzyjnego planowania, umiejętnego wykorzystania umiejętności postaci i szybkiego reagowania na zmieniające się warunki pola bitwy, co czyni ją niezwykle wymagającą i satysfakcjonującą dla doświadczonych graczy.",
    publisher: "Valve",
    releaseDate: "2013-07-09",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/dota2.jpg",
    thumbnail: "/images/dota2.jpg",
    categories: ["MOBA", "Strategy", "Competitive"],
    type: "Game",
    features: ["Multiplayer", "Competitive"],
  },
  {
    id: 10,
    title: "Overwatch",
    subtitle: "Dostępne",
    description:
      "Overwatch to dynamiczna gra akcji, która łączy elementy strzelanki z unikalnymi zdolnościami bohaterów. Gracze tworzą zespoły, aby walczyć w emocjonujących i taktycznych bitwach, gdzie współpraca i precyzyjne wykonywanie zadań są kluczem do zwycięstwa. Każda postać posiada niepowtarzalny zestaw umiejętności, co umożliwia graczom dobór idealnej strategii, a intensywne starcia gwarantują niesamowite doznania podczas każdej rozgrywki.",
    publisher: "Blizzard Entertainment",
    releaseDate: "2016-05-24",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/overwatch.jpg",
    thumbnail: "/images/overwatch.jpg",
    categories: ["Shooter", "Multiplayer", "Action"],
    type: "Game",
    features: ["Multiplayer", "Team-based"],
  },
  {
    id: 11,
    title: "Assassin's Creed Valhalla",
    subtitle: "Dostępne",
    description:
      "Assassin's Creed Valhalla zabiera graczy do epickiej ery wikingów, gdzie brutalność bitew miesza się z bogatą historią i mitologią. Gra pozwala wcielić się w wojownika, który przemierza rozległe, szczegółowo odtworzone krajobrazy starożytnej Europy, podejmując trudne decyzje, które wpływają na losy całego klanu. Połączenie dynamicznej walki, eksploracji otwartego świata oraz głębokiej narracji czyni tę produkcję jedną z najbardziej wciągających gier ostatnich lat.",
    publisher: "Ubisoft",
    releaseDate: "2000-11-10",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/valhalla.jpg",
    thumbnail: `/images/valhalla.jpg`,
    categories: ["Action", "Adventure", "RPG", "Historical"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 12,
    title: "Call of Duty: Modern Warfare",
    subtitle: "Dostępne",
    description:
      "Call of Duty: Modern Warfare to intensywna strzelanka, która przenosi gracza na współczesne pole bitwy, oferując realistyczne doświadczenia wojenne, dynamiczną akcję oraz emocjonujące misje. Gra łączy w sobie wciągającą kampanię fabularną z trybem multiplayer, gdzie taktyka i refleks decydują o zwycięstwie. Realistyczna grafika, dbałość o szczegóły oraz zaawansowana mechanika rozgrywki sprawiają, że każda misja dostarcza niezapomnianych wrażeń i adrenaliny.",
    publisher: "Activision",
    releaseDate: "2015-10-25",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/codmw.jpg",
    thumbnail: "/images/codmw.jpg",
    categories: ["Shooter", "Action", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Singleplayer"],
  },
  {
    id: 13,
    title: "Battlefield V",
    subtitle: "Dostępne",
    description:
      "Battlefield V to epicka gra wojenna, która przenosi graczy w samo serce największych konfliktów XX wieku. Dynamiczne bitwy, realistyczne odwzorowanie historycznych wydarzeń oraz zaawansowany system walki sprawiają, że każda rozgrywka dostarcza intensywnych emocji i taktycznych wyzwań. Gra oferuje zarówno kampanię dla pojedynczego gracza, jak i rozbudowane tryby multiplayer, w których współpraca zespołowa jest kluczem do osiągnięcia zwycięstwa.",
    publisher: "Electronic Arts",
    releaseDate: "2015-11-20",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/bf5.jpg",
    thumbnail: "/images/bf5.jpg",
    categories: ["Shooter", "Multiplayer", "War"],
    type: "Game",
    features: ["Multiplayer", "Singleplayer"],
  },
  {
    id: 14,
    title: "Halo Infinite",
    subtitle: "Dostępne",
    description:
      "Halo Infinite to futurystyczna strzelanka, która łączy epicką kampanię singleplayer z dynamicznym trybem multiplayer. Gracze wcielają się w legendarnego bohatera, walczącego z obcymi na tle malowniczych kosmicznych krajobrazów. Gra oferuje doskonale zbalansowaną rozgrywkę, zaawansowaną mechanikę walki oraz intensywne starcia, które zadowolą zarówno fanów klasycznych tytułów, jak i nowoczesnych produkcji.",
    publisher: "Xbox Game Studios",
    releaseDate: "2021-12-08",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/haloinfinite.jpg",
    thumbnail: "/images/haloinfinite.jpg",
    categories: ["Shooter", "Sci-Fi", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Singleplayer"],
  },
  {
    id: 15,
    title: "Doom Eternal",
    subtitle: "Dostępne",
    description:
      "Doom Eternal to intensywna gra akcji, która przenosi gracza do piekielnych, demonicznych światów, gdzie każda walka to prawdziwy test umiejętności i refleksu. Dynamiczna rozgrywka, brutalne starcia z hordami potworów oraz unikalna mechanika walki sprawiają, że każda misja pełna jest adrenaliny i niespodzianek. Gracz musi wykorzystać szybkość, precyzję oraz strategiczne podejście, aby przetrwać w nieprzewidywalnym i pełnym niebezpieczeństw świecie, który nie pozostawia żadnego miejsca na chwilę wytchnienia.",
    publisher: "Bethesda",
    releaseDate: "2015-03-20",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/doometernal.jpg",
    thumbnail: "/images/doometernal.jpg",
    categories: ["Shooter", "Action", "Horror"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 16,
    title: "God of War (2018)",
    subtitle: "Dostępne",
    description:
      "God of War (2018) to epicka przygoda, która łączy w sobie elementy mitologii, intensywnej akcji i głębokiej emocjonalnej narracji. Gra opowiada historię Kratosa, który wraz ze swoim synem przemierza surowe i niebezpieczne krainy, walcząc z boskimi przeciwnikami i odkrywając mroczne tajemnice przeszłości. Dzięki przepięknej oprawie graficznej, rozbudowanemu systemowi walki oraz wielowarstwowej fabule, każda chwila spędzona w świecie God of War dostarcza niezapomnianych wrażeń i pozostawia trwały ślad w pamięci gracza.",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2018-04-20",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/godofwar.jpg",
    thumbnail: "/images/godofwar.jpg",
    categories: ["Action", "Adventure", "Mythology"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 17,
    title: "Sekiro: Shadows Die Twice",
    subtitle: "Dostępne",
    description:
      "Sekiro: Shadows Die Twice to wymagająca gra akcji, która przenosi gracza do feudalnej Japonii pełnej niebezpieczeństw i tajemniczych legend. Wcielając się w wojownika wyposażonego w niezwykły miecz oraz umiejętności ninja, stajesz do walki z potężnymi przeciwnikami, wymagającymi precyzyjnego planowania i refleksu. Każda potyczka, każdy skradziony ruch oraz nieustanna walka o przetrwanie sprawiają, że gra oferuje głęboką satysfakcję, a trud zdobycia zwycięstwa czyni każdą chwilę rozgrywki jeszcze bardziej ekscytującą.",
    publisher: "FromSoftware",
    releaseDate: "2019-03-22",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/sekiro.jpg",
    thumbnail: "/images/sekiro.jpg",
    categories: ["Action", "Adventure", "Stealth"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 18,
    title: "Resident Evil Village",
    subtitle: "Dostępne",
    description:
      "Resident Evil Village to gra survival horror, która przenosi gracza do mrocznego, pełnego tajemnic i niebezpieczeństw świata. Wcielasz się w bohatera, który staje w obliczu przerażających mutantów, złowrogich kultów i upiornych stworzeń. Intensywna atmosfera, zaskakujące zwroty akcji oraz głęboko budowana narracja sprawiają, że każda minuta rozgrywki wzbudza emocje i trzyma w napięciu. Realistyczna grafika, wymagające zagadki i nieprzewidywalne starcia gwarantują niezapomniane doświadczenia dla każdego fana horrorów.",
    publisher: "Capcom",
    releaseDate: "2009-05-07",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/resevilvillage.jpg",
    thumbnail: "/images/resevilvillage.jpg",
    categories: ["Horror", "Survival", "Action"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 19,
    title: "Final Fantasy VII Remake",
    subtitle: "Dostępne",
    description:
      "Final Fantasy VII Remake to nowoczesna reinterpretacja kultowej gry RPG, która łączy emocjonującą fabułę, dynamiczne walki i przepiękną oprawę graficzną. Wcielając się w postać Clouda, gracz odkrywa złożony świat pełen tajemnic, konfliktów i niespodzianek. Rozbudowany system walki, interaktywne sceny akcji oraz głęboka narracja sprawiają, że każda chwila rozgrywki jest pełna emocji i wyzwań, angażując zarówno nowych, jak i starych fanów serii.",
    publisher: "Square Enix",
    releaseDate: "2020-04-10",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/ff7remake.jpg",
    thumbnail: "/images/ff7remake.jpg",
    categories: ["RPG", "Action", "Fantasy"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 20,
    title: "Metal Gear Solid V: The Phantom Pain",
    subtitle: "Dostępne",
    description:
      "Metal Gear Solid V: The Phantom Pain to gra akcji, która łączy elementy skradania, taktyki oraz rozbudowanej fabuły osadzonej w realiach zimnej wojny. Wcielając się w postać legendarnego agenta, gracz eksploruje ogromny, otwarty świat, planuje misje i podejmuje strategiczne decyzje, które wpływają na dalszy przebieg historii. Połączenie realistycznej grafiki, emocjonującej akcji oraz głębokiej narracji czyni tę grę jednym z najbardziej innowacyjnych tytułów w swoim gatunku.",
    publisher: "Konami",
    releaseDate: "2015-09-01",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/mgs5.jpg",
    thumbnail: "/images/mgs5.jpg",
    categories: ["Stealth", "Action", "Adventure"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 21,
    title: "The Elder Scrolls V: Skyrim",
    subtitle: "Dostępne",
    description:
      "The Elder Scrolls V: Skyrim to epicka gra RPG, która przenosi gracza do rozległego, otwartego świata pełnego magii, smoków i pradawnych tajemnic. Gra oferuje niezliczone możliwości eksploracji, rozwoju postaci i podejmowania kluczowych wyborów, które wpływają na los całego królestwa. Realistyczna oprawa graficzna, angażująca fabuła i ogromne możliwości modyfikacji sprawiają, że każda rozgrywka jest pełna przygód i niespodzianek, dostarczając niezapomnianych emocji.",
    publisher: "Bethesda",
    releaseDate: "2011-11-11",
    price: "49 zł",
    requirements: { ...defaultRequirements },
    image: "/images/skyrim.jpg",
    thumbnail: "/images/skyrim.jpg",
    categories: ["RPG", "Open World", "Fantasy"],
    type: "Game",
    features: ["Singleplayer", "Moddable"],
  },
  {
    id: 22,
    title: "Far Cry 5",
    subtitle: "Dostępne",
    description:
      "Far Cry 5 to dynamiczna gra akcji, osadzona w malowniczym, ale niebezpiecznym otwartym świecie pełnym fanatycznych wyznawców i brutalnych wyzwań. Gracz wciela się w bohatera, który musi stawić czoła fanatyzmowi i przywrócić spokój w regionie. Dzięki intensywnym starciom, różnorodnym misjom i niespodziewanym zwrotom akcji, każda rozgrywka dostarcza nie tylko emocji, ale także satysfakcji płynącej z pokonywania kolejnych przeciwności.",
    publisher: "Ubisoft",
    releaseDate: "2018-03-27",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/farcry5.jpg",
    thumbnail: "/images/farcry5.jpg",
    categories: ["Shooter", "Open World", "Action"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 23,
    title: "Apex Legends",
    subtitle: "Dostępne",
    description:
      "Apex Legends to nowoczesna gra battle royale, która łączy szybkie tempo rozgrywki z unikalnymi zdolnościami postaci. W pełnych akcji starciach gracze muszą wykazać się doskonałą taktyką, szybkimi refleksami i umiejętnością współpracy, aby przetrwać na arenie. Gra wyróżnia się dynamicznym systemem postaci, spektakularnymi umiejętnościami i stale zmieniającymi się mapami, co gwarantuje niezapomniane doświadczenia podczas każdej rozgrywki.",
    publisher: "Electronic Arts",
    releaseDate: "2019-02-04",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/apexlegends.jpg",
    thumbnail: "/images/apexlegends.jpg",
    categories: ["Battle Royale", "Shooter", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Battle Royale"],
  },
  {
    id: 24,
    title: "Rainbow Six Siege",
    subtitle: "Dostępne",
    description:
      "Rainbow Six Siege to taktyczna strzelanka, która kładzie duży nacisk na współpracę zespołową, planowanie i precyzyjne wykonanie zadań. Gracze muszą wykazać się zdolnościami strategicznymi, aby zneutralizować przeciwnika i obronić lub zdobyć wyznaczone cele. Gra wyróżnia się realistyczną fizyką, zróżnicowanymi mapami i intensywną atmosferą, która sprawia, że każda rozgrywka jest wyzwaniem wymagającym doskonałej koordynacji i refleksu.",
    publisher: "Ubisoft",
    releaseDate: "2015-12-01",
    price: "39 zł",
    requirements: { ...defaultRequirements },
    image: "/images/r6siege.jpg",
    thumbnail: "/images/r6siege.jpg",
    categories: ["Shooter", "Tactical", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Competitive"],
  },
  {
    id: 25,
    title: "Star Wars Jedi: Fallen Order",
    subtitle: "Dostępne",
    description:
      "Star Wars Jedi: Fallen Order to przygodowa gra akcji, która przenosi gracza do bogatego uniwersum Gwiezdnych Wojen. Wcielasz się w młodego rycerza Jedi, który musi stawić czoła mrocznym siłom i odkryć tajemnice swojej przeszłości. Gra łączy dynamiczne walki, zagadki logiczne oraz eksplorację różnorodnych planet, oferując pełną emocji podróż przez galaktykę pełną niebezpieczeństw i niezliczonych przygód.",
    publisher: "Electronic Arts",
    releaseDate: "2015-11-15",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/jedifallenorder.jpg",
    thumbnail: "/images/jedifallenorder.jpg",
    categories: ["Action", "Adventure", "Sci-Fi"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 26,
    title: "The Legend of Zelda: Breath of the Wild",
    subtitle: "Dostępne",
    description:
      "The Legend of Zelda: Breath of the Wild to przełomowa gra przygodowa, która otwiera przed graczem nieskończone możliwości eksploracji rozległego, malowniczego świata. Wcielając się w bohatera Linka, możesz odkrywać tajemnicze ruiny, walczyć z potężnymi przeciwnikami i rozwiązywać zagadki starożytnych cywilizacji. Gra zachwyca przepiękną oprawą graficzną, innowacyjnym podejściem do otwartego świata oraz rozbudowaną fabułą, która wciąga na wiele godzin intensywnej i satysfakcjonującej rozgrywki.",
    publisher: "Nintendo",
    releaseDate: "2017-03-03",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/zelda.jpg",
    thumbnail: "/images/zelda.jpg",
    categories: ["Adventure", "RPG", "Fantasy"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 27,
    title: "Super Mario Odyssey",
    subtitle: "Dostępne",
    description:
      "Super Mario Odyssey to kolorowa i pełna energii gra platformowa, która zabiera graczy w niezapomnianą podróż po różnorodnych, fantastycznych światach. Jako Mario przemierzasz barwne lokacje, zbierasz monety i odkrywasz ukryte sekrety, a każda plansza oferuje unikalne wyzwania oraz zabawne zagadki. Gra łączy w sobie klasyczną mechanikę platformową z nowoczesnym podejściem do eksploracji, co sprawia, że jest idealna zarówno dla młodszych, jak i starszych graczy.",
    publisher: "Nintendo",
    releaseDate: "2021-10-27",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/marioodyssey.jpg",
    thumbnail: "/images/marioodyssey.jpg",
    categories: ["Platformer", "Adventure", "Family"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 28,
    title: "Animal Crossing: New Horizons",
    subtitle: "Dostępne",
    description:
      "Animal Crossing: New Horizons to urokliwa symulacja życia, która pozwala graczom stworzyć własną wyspę marzeń, pełną przyjaznych mieszkańców, kolorowych dekoracji i spokojnej atmosfery. Gra zachęca do codziennej interakcji, planowania przestrzeni i eksploracji naturalnych krajobrazów, oferując relaksującą rozgrywkę, która pozwala oderwać się od codziennych trosk i cieszyć się prostotą życia na wyspie.",
    publisher: "Nintendo",
    releaseDate: "2020-03-20",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/animalcrossing.jpg",
    thumbnail: "/images/animalcrossing.jpg",
    categories: ["Simulation", "Casual", "Family"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 29,
    title: "Splatoon 2",
    subtitle: "Dostępne",
    description:
      "Splatoon 2 to dynamiczna gra wieloosobowa, w której rywalizacja odbywa się w zupełnie nowatorski sposób – zamiast tradycyjnych strzelanin, gracze walczą przy użyciu kolorowej farby. Gra oferuje szybkie, pełne adrenaliny mecze, w których precyzyjne planowanie i zgrana współpraca decydują o zwycięstwie. Intensywne starcia na różnorodnych mapach i unikalny styl rozgrywki sprawiają, że każda runda dostarcza niezapomnianych emocji i satysfakcji.",
    publisher: "Nintendo",
    releaseDate: "2017-07-21",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/splatoon2.jpg",
    thumbnail: "/images/splatoon2.jpg",
    categories: ["Shooter", "Multiplayer", "Family"],
    type: "Game",
    features: ["Multiplayer"],
  },
  {
    id: 30,
    title: "Persona 5",
    subtitle: "Dostępne",
    description:
      "Persona 5 to niezwykle głęboka gra RPG, która łączy codzienne życie licealisty z fascynującymi, nadprzyrodzonymi przygodami. Gracz prowadzi grupę buntowników, odkrywając tajemnice ludzkiej psychiki, walcząc z demonami i podejmując trudne decyzje, które wpływają na dalszy przebieg fabuły. Rozbudowana fabuła, niebanalna oprawa graficzna oraz oryginalny system walki czynią tę grę wyjątkową i wciągającą propozycją dla miłośników głębokich narracji.",
    publisher: "Atlus",
    releaseDate: "2016-09-15",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/persona5.jpg",
    thumbnail: "/images/persona5.jpg",
    categories: ["RPG", "Simulation", "Adventure"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 31,
    title: "Dragon Quest XI",
    subtitle: "Dostępne",
    description:
      "Dragon Quest XI to klasyczne japońskie RPG, które oferuje rozbudowaną fabułę, barwnych bohaterów oraz fascynujący świat pełen magii i tajemnic. Gracze przemierzają malownicze krainy, podejmują strategiczne decyzje podczas walk i odkrywają sekrety pradawnych cywilizacji. Każdy element gry, od starannie zaprojektowanej ścieżki dźwiękowej po interakcje z licznymi postaciami, tworzy niezapomniane doświadczenie, które przyciąga zarówno starych fanów serii, jak i nowych graczy.",
    publisher: "Square Enix",
    releaseDate: "2017-07-29",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/dragonquestxi.jpg",
    thumbnail: "/images/dragonquestxi.jpg",
    categories: ["RPG", "Fantasy", "Adventure"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 32,
    title: "Monster Hunter: World",
    subtitle: "Dostępne",
    description:
      "Monster Hunter: World to gra akcji, w której gracze wcielają się w łowców potworów, eksplorujących ogromne, pełne niebezpieczeństw tereny. Gra oferuje dynamiczną rozgrywkę, wymagające starcia z gigantycznymi bestiami oraz bogaty system rozwoju postaci. Dzięki trybowi wieloosobowemu, gracze mogą współpracować, aby stawić czoła najgroźniejszym przeciwnikom, co czyni każdą wyprawę ekscytującą i pełną adrenaliny.",
    publisher: "Capcom",
    releaseDate: "2018-01-26",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/monsterhunterworld.jpg",
    thumbnail: "/images/monsterhunterworld.jpg",
    categories: ["Action", "RPG", "Multiplayer"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 33,
    title: "Dark Souls III",
    subtitle: "Dostępne",
    description:
      "Dark Souls III to mroczne i wymagające RPG, w którym każda walka jest testem umiejętności i wytrwałości. Gracz przemierza ponury świat pełen niebezpieczeństw, walcząc z przerażającymi przeciwnikami i odkrywając tajemnice starożytnych ruin. Gra znana jest z wysokiego poziomu trudności, co sprawia, że każde zwycięstwo daje ogromną satysfakcję. Szczegółowa oprawa graficzna i klimatyczna ścieżka dźwiękowa dodatkowo potęgują uczucie immersji.",
    publisher: "FromSoftware",
    releaseDate: "2016-04-12",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/darksouls3.jpg",
    thumbnail: "/images/darksouls3.jpg",
    categories: ["RPG", "Action", "Fantasy"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 34,
    title: "Bloodborne",
    subtitle: "Dostępne",
    description:
      "Bloodborne to mroczne RPG, w którym gracz wkracza do tajemniczego świata pełnego koszmarów i niebezpieczeństw. Intensywna rozgrywka, wymagające starcia oraz unikalny klimat gotyckiej oprawy graficznej sprawiają, że każda walka jest niezwykle emocjonująca. Gracz musi wykazać się refleksami i strategicznym myśleniem, aby przetrwać w świecie, gdzie każdy błąd może kosztować życie. Ta gra to prawdziwe wyzwanie dla fanów mrocznych klimatów i wymagających przygód.",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2015-03-24",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/bloodborne.jpg",
    thumbnail: "/images/bloodborne.jpg",
    categories: ["RPG", "Horror", "Action"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 35,
    title: "Horizon Zero Dawn",
    subtitle: "Dostępne",
    description:
      "Horizon Zero Dawn to gra akcji, która przenosi gracza do postapokaliptycznego świata, w którym natura odzyskała kontrolę nad ziemią, a maszyny stały się dominującą siłą. Gracz wciela się w bohaterkę, która odkrywa tajemnice dawno minionej cywilizacji, walcząc z mechanicznie zaawansowanymi bestiami i eksplorując malownicze, niebezpieczne krajobrazy. Bogata fabuła, imponujące efekty wizualne oraz innowacyjny system walki czynią tę grę jednym z najciekawszych tytułów ostatniej dekady.",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2017-02-28",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/horizonzerodawn.jpg",
    thumbnail: "/images/horizonzerodawn.jpg",
    categories: ["Action", "Adventure", "Open World"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 36,
    title: "Shadow of the Tomb Raider",
    subtitle: "Dostępne",
    description:
      "Shadow of the Tomb Raider to gra przygodowa, w której gracz wciela się w Lara Croft, odkrywając tajemnicze ruiny i starożytne cywilizacje. Intensywna akcja, zagadki logiczne oraz przepiękne, egzotyczne lokacje tworzą niezapomniane doświadczenie. Gra łączy elementy eksploracji, skradania oraz dynamicznej walki, oferując graczowi szereg wyzwań i emocji, które pozostają w pamięci na długo po zakończeniu rozgrywki.",
    publisher: "Square Enix",
    releaseDate: "2018-09-14",
    price: "59 zł",
    requirements: { ...defaultRequirements },
    image: "/images/shadowtombraider.jpg",
    thumbnail: "/images/shadowtombraider.jpg",
    categories: ["Action", "Adventure", "Exploration"],
    type: "Game",
    features: ["Singleplayer"],
  },
  {
    id: 37,
    title: "Watch Dogs: Legion",
    subtitle: "Dostępne",
    description:
      "Watch Dogs: Legion to innowacyjna gra akcji, która pozwala graczom wcielić się w dowolną postać w futurystycznym, otwartym świecie zdominowanym przez inwigilację i korupcję. Każdy bohater posiada unikalne umiejętności, a dynamiczny system rekrutacji umożliwia tworzenie różnorodnych zespołów. Gra oferuje intensywną fabułę, skomplikowane zagadki taktyczne oraz możliwość podejmowania trudnych decyzji, które mają wpływ na los całej metropolii.",
    publisher: "Ubisoft",
    releaseDate: "2020-10-29",
    price: "69 zł",
    requirements: { ...defaultRequirements },
    image: "/images/watchdogslegion.jpg",
    thumbnail: "/images/watchdogslegion.jpg",
    categories: ["Action", "Adventure", "Open World"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 38,
    title: "FIFA 23",
    subtitle: "Dostępne",
    description:
      "FIFA 23 to najnowsza odsłona kultowej serii symulacji piłkarskiej, która oferuje realistyczną rozgrywkę, zaawansowaną fizykę piłki i dynamiczny system sterowania. Gracze mogą wcielić się w role najlepszych klubów i reprezentacji narodowych, rywalizując zarówno w trybie dla pojedynczego gracza, jak i online. Gra zachwyca szczegółowym odwzorowaniem stadionów, emocjonującymi meczami oraz licznymi opcjami personalizacji, które umożliwiają stworzenie unikalnego zespołu.",
    publisher: "EA Sports",
    releaseDate: "2022-09-30",
    price: "99 zł",
    requirements: { ...defaultRequirements },
    image: "/images/fifa23.jpg",
    thumbnail: "/images/fifa23.jpg",
    categories: ["Sports", "Simulation", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Online"],
  },
  {
    id: 39,
    title: "NBA 2K23",
    subtitle: "Dostępne",
    description:
      "NBA 2K23 to zaawansowana symulacja koszykówki, która oferuje graczom realistyczne odwzorowanie meczów, zaawansowany system sterowania i możliwość tworzenia własnej kariery sportowej. Gra łączy emocje towarzyszące prawdziwym rozgrywkom z głębokim systemem personalizacji, pozwalając na rozwój umiejętności zawodników i budowanie drużyny marzeń. Dynamiczna rozgrywka, liczne tryby gry i wiernie odwzorowane stadiony sprawiają, że każda minuta spędzona na parkiecie dostarcza niezapomnianych wrażeń.",
    publisher: "2K",
    releaseDate: "2009-09-09",
    price: "99 zł",
    requirements: { ...defaultRequirements },
    image: "/images/nba2k23.jpg",
    thumbnail: "/images/nba2k23.jpg",
    categories: ["Sports", "Simulation", "Multiplayer"],
    type: "Game",
    features: ["Multiplayer", "Online"],
  },
  {
    id: 40,
    title: "Forza Horizon 5",
    subtitle: "Dostępne",
    description:
      "Forza Horizon 5 to oszałamiająca gra wyścigowa, która przenosi graczy na rozległe tereny pełne malowniczych krajobrazów i wymagających tras. Gra oferuje realistyczną fizykę, dynamiczne warunki pogodowe oraz ogromny wybór pojazdów, które można modyfikować wedle własnych upodobań. Intensywna rywalizacja, liczne wyzwania oraz możliwość gry zarówno solo, jak i w trybie multiplayer sprawiają, że każda wyścigowa rozgrywka to prawdziwa uczta dla miłośników motoryzacji.",
    publisher: "Xbox Game Studios",
    releaseDate: "2021-11-09",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/forzahorizon5.jpg",
    thumbnail: "/images/forzahorizon5.jpg",
    categories: ["Racing", "Simulation", "Open World"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 41,
    title: "Gran Turismo 7",
    subtitle: "Dostępne",
    description:
      "Gran Turismo 7 to symulacja wyścigowa, która oferuje graczom niezwykle realistyczne doświadczenie prowadzenia samochodów wyścigowych na słynnych torach. Gra łączy w sobie zaawansowaną fizykę, pięknie odwzorowane modele aut oraz możliwość ich dogłębnej modyfikacji. Realistyczne warunki, liczne tryby rozgrywki i dbałość o szczegóły sprawiają, że każda wyścigowa sesja to prawdziwa uczta dla miłośników motoryzacji i symulacji sportowych.",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-03-04",
    price: "79 zł",
    requirements: { ...defaultRequirements },
    image: "/images/granturismo7.jpg",
    thumbnail: "/images/granturismo7.jpg",
    categories: ["Racing", "Simulation", "Realistic"],
    type: "Game",
    features: ["Singleplayer", "Multiplayer"],
  },
  {
    id: 42,
    title: "Among Us",
    subtitle: "Dostępne",
    description:
      "Among Us to wieloosobowa gra towarzyska, która stawia graczy w roli członków załogi statku kosmicznego, gdzie jeden lub kilku oszustów próbuje sabotować misję. Gra wymaga od graczy dedukcji, współpracy i podejmowania szybkich decyzji, aby zdemaskować zdrajców zanim będzie za późno. Prosta, ale niezwykle wciągająca mechanika, liczne rozgrywki i interakcje między graczami sprawiają, że każda sesja to pełna napięcia i śmiechu przygoda, idealna na wspólne spędzanie czasu online.",
    publisher: "InnerSloth",
    releaseDate: "2018-06-15",
    price: "Free",
    requirements: { ...defaultRequirements },
    image: "/images/amongus.jpg",
    thumbnail: "/images/amongus.jpg",
    categories: ["Multiplayer", "Party", "Strategy"],
    type: "Game",
    features: ["Multiplayer", "Party"],
  },
];
