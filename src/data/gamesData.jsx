

const defaultRequirements = {
    os: 'Windows 10',
    processor: 'Intel i5 or equivalent',
    memory: '8 GB',
    storage: '50 GB available space',
    gpu: 'Nvidia GTX 1060'
  };
  
  export const games = [
    {
      id: 1,
      title: '33 Immortals',
      subtitle: 'Już dostępne',
      description:
        'Dołącz do rebelii w 33 Immortals i walcz z bogami. Gra oferuje epicką fabułę, dynamiczną rozgrywkę oraz rozbudowany system rozwoju postaci.',
      publisher: 'Epic Games',
      releaseDate: '2023-01-01',
      price: '84 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: 'Assassin’s Creed Shadows',
      subtitle: 'Przedsprzedaż',
      description:
        'Odkryj mroczne tajemnice w najnowszej odsłonie Assassin’s Creed. Gra zapewnia niezapomnianą przygodę w otwartym świecie pełnym intryg.',
      publisher: 'Ubisoft',
      releaseDate: '2023-05-15',
      price: '299,90 zł',
      requirements: {
        os: 'Windows 10',
        processor: 'Intel i5 or equivalent',
        memory: '8 GB',
        storage: '60 GB available space',
        gpu: 'Nvidia GTX 1060'
      },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'Split Fliction',
      subtitle: 'Nadchodząca premiera',
      description:
        'Nowatorska gra akcji z elementami multiplayer. Przygotuj się na intensywną rozgrywkę, w której strategia łączy się z dynamicznymi walkami.',
      publisher: 'Game Studio',
      releaseDate: '2023-08-01',
      price: '79,99 zł',
      requirements: {
        os: 'Windows 10',
        processor: 'Intel i5 or equivalent',
        memory: '8 GB',
        storage: '55 GB available space',
        gpu: 'Nvidia GTX 1060'
      },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'Honkai: Star Rail',
      subtitle: 'Darmowa gra',
      description:
        'Wkrocz do świata futurystycznych przygód. Honkai: Star Rail oferuje wciągającą fabułę, dynamiczną rozgrywkę oraz niesamowitą oprawę graficzną.',
      publisher: 'miHoYo',
      releaseDate: '2023-03-10',
      price: 'Za darmo',
      requirements: {
        os: 'Windows 10',
        processor: 'Intel i5 or equivalent',
        memory: '8 GB',
        storage: '45 GB available space',
        gpu: 'Nvidia GTX 1050'
      },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  

  
  export const newGames = [
    {
      id: 1,
      title: '33 Immortals',
      subtitle: 'Już dostępne',
      description:
        'Dołącz do rebelii w 33 Immortals i walcz z bogami. Gra oferuje epicką fabułę oraz dynamiczną rozgrywkę.',
      publisher: 'Epic Games',
      releaseDate: '2023-01-01',
      price: '84 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: 'Suikoden I&II HD Remaster',
      subtitle: 'Przedsprzedaż',
      description:
        'Klasyka w nowej odsłonie – zmodernizowana grafika oraz poprawiona mechanika rozgrywki.',
      publisher: 'Konami',
      releaseDate: '2023-06-01',
      price: '231,39 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'Death in the Water 2',
      subtitle: 'Już dostępne',
      description:
        'Mroczna przygoda, pełna napięcia i zagadek. Zanurz się w tajemniczy świat Death in the Water 2.',
      publisher: 'Indie Studio',
      releaseDate: '2023-02-20',
      price: '63 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'Redemption Reapers',
      subtitle: 'Już dostępne',
      description:
        'Szybka akcja i intensywne starcia. Redemption Reapers to idealna propozycja dla fanów dynamicznych gier akcji.',
      publisher: 'Reaper Studios',
      releaseDate: '2023-04-15',
      price: '99,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 5,
      title: 'X-Morph Defense Complete Edition',
      subtitle: 'Już dostępne',
      description:
        'Strategia i akcja w jednym – przygotuj się na intensywne bitwy oraz taktyczne wyzwania.',
      publisher: 'Strategy Inc.',
      releaseDate: '2023-03-30',
      price: '109,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 6,
      title: 'Nowość 6',
      subtitle: 'Nadchodząca premiera',
      description:
        'Opis nowości 6. Gra oferuje unikalną mechanikę oraz niespodziewane zwroty akcji.',
      publisher: 'Future Games',
      releaseDate: '2023-09-01',
      price: '59,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 7,
      title: 'Nowość 7',
      subtitle: 'Nadchodząca premiera',
      description:
        'Opis nowości 7. Poznaj świat pełen tajemnic i niesamowitych przygód.',
      publisher: 'NextGen Studios',
      releaseDate: '2023-10-10',
      price: '49,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  
  export const discountedGames = [
    {
      id: 1,
      title: 'Tomb Raider GOTY Edition',
      subtitle: 'Gra podstawowa',
      description:
        'Klasyk, który przeszedł rewolucję. Przeżyj przygodę z Lara Croft w nowoczesnej odsłonie.',
      publisher: 'Square Enix',
      releaseDate: '2022-11-01',
      price: '31,00 zł',
      oldPrice: '199,99 zł',
      discount: '-85%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: 'Rise of the Tomb Raider: 20 Year Celebration',
      subtitle: 'Gra podstawowa',
      description:
        'Obchodząc 20-lecie serii, gra oferuje wyjątkowe doświadczenia oraz ulepszone mechaniki rozgrywki.',
      publisher: 'Square Enix',
      releaseDate: '2023-01-15',
      price: '53,98 zł',
      oldPrice: '299,99 zł',
      discount: '-82%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'Just Cause 4 Complete Edition',
      subtitle: 'Gra podstawowa',
      description:
        'Eksplozja akcji i nieograniczone możliwości destrukcji. Just Cause 4 to tytuł dla miłośników chaosu.',
      publisher: 'Square Enix',
      releaseDate: '2022-12-05',
      price: '99,99 zł',
      oldPrice: '259,99 zł',
      discount: '-62%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'Shadow of the Tomb Raider: Definitive Edition',
      subtitle: 'Gra podstawowa',
      description:
        'Przeżyj mroczną przygodę z Larą Croft, odkrywając tajemnice zapomnianych cywilizacji.',
      publisher: 'Square Enix',
      releaseDate: '2023-02-10',
      price: '31,00 zł',
      oldPrice: '259,99 zł',
      discount: '-30%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 5,
      title: 'Just Cause 4 Reloaded',
      subtitle: 'Gra podstawowa',
      description:
        'Zmodernizowana wersja popularnej gry, oferująca dodatkowe tryby i ulepszenia w rozgrywce.',
      publisher: 'Square Enix',
      releaseDate: '2023-04-20',
      price: '63 zł',
      oldPrice: '159,99 zł',
      discount: '-60%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 6,
      title: 'Zniżka 6',
      subtitle: 'Gra podstawowa',
      description:
        'Opis zniżki 6. Tytuł oferuje niesamowite wrażenia i wyjątkową oprawę graficzną.',
      publisher: 'Discounted Games Inc.',
      releaseDate: '2023-05-10',
      price: '60 zł',
      oldPrice: '120 zł',
      discount: '-50%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 7,
      title: 'Zniżka 7',
      subtitle: 'Gra podstawowa',
      description:
        'Opis zniżki 7. Gra oferuje wciągającą rozgrywkę i wyjątkową oprawę audiowizualną.',
      publisher: 'Discounted Games Inc.',
      releaseDate: '2023-06-15',
      price: '150 zł',
      oldPrice: '300 zł',
      discount: '-50%',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  
  export const freeGames = [
    {
      id: 1,
      title: 'Jurassic World Evolution 2',
      subtitle: 'Teraz bezpłatne! Do 27 mar 16:00',
      description:
        'Zanurz się w świecie dinozaurów w Jurassic World Evolution 2. Gra oferuje rozbudowaną symulację parku, zarządzanie zasobami oraz dynamiczne scenariusze.',
      publisher: 'Frontier Developments',
      releaseDate: '2023-07-01',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TERAZ BEZPŁATNIE'
    },
    {
      id: 2,
      title: 'Tajemnicza gra',
      subtitle: 'Dostępne za 03:16:46:53',
      description:
        'Tajemnicza gra to propozycja dla miłośników zagadek i nietypowych rozwiązań. Odkryj nieznane światy i tajemnice, jakie skrywa gra.',
      publisher: 'Indie Studio',
      releaseDate: '2023-08-20',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TAJEMNICZA GRA'
    },
    {
      id: 3,
      title: 'Tajemnicza gra 2',
      subtitle: 'Dostępne za 03:16:46:53',
      description:
        'Kolejna odsłona tajemniczej gry, która zaprasza do odkrywania niezwykłych lokacji i rozwiązywania zagadek.',
      publisher: 'Indie Studio',
      releaseDate: '2023-09-05',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TAJEMNICZA GRA'
    },
    {
      id: 4,
      title: 'Free Game 4',
      subtitle: 'Dostępne za 02:10:20:00',
      description:
        'Free Game 4 to gra, która łączy dynamiczną rozgrywkę z rozbudowanym systemem personalizacji postaci.',
      publisher: 'FreeGames Inc.',
      releaseDate: '2023-10-01',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TAJEMNICZA GRA'
    },
    {
      id: 5,
      title: 'Free Game 5',
      subtitle: 'Dostępne za 01:00:00:00',
      description:
        'Free Game 5 oferuje niezapomniane wrażenia w darmowej rozgrywce, pełnej wyzwań i dynamicznych starć.',
      publisher: 'FreeGames Inc.',
      releaseDate: '2023-11-11',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TAJEMNICZA GRA'
    },
    {
      id: 6,
      title: 'Free Game 6',
      subtitle: 'Dostępne za 05:10:20:00',
      description:
        'Free Game 6 to propozycja dla tych, którzy lubią długą, angażującą rozgrywkę bez opłat.',
      publisher: 'FreeGames Inc.',
      releaseDate: '2023-12-05',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif',
      buttonLabel: 'TAJEMNICZA GRA'
    }
  ];
  
  export const bestsellers = [
    {
      id: 1,
      title: 'Assassin’s Creed Shadows',
      subtitle: 'Przedsprzedaż',
      description:
        'Odkryj mroczne tajemnice i intrygi w najnowszej odsłonie Assassin’s Creed.',
      publisher: 'Ubisoft',
      releaseDate: '2023-05-15',
      price: '299,90 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: '33 Immortals',
      subtitle: 'Już dostępne',
      description:
        'Dołącz do rebelii w 33 Immortals i walcz z bogami w epickiej rozgrywce.',
      publisher: 'Epic Games',
      releaseDate: '2023-01-01',
      price: '84 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'Grand Theft Auto V Enhanced',
      subtitle: 'Już dostępne',
      description:
        'Doświadcz kultowego GTA w nowej, ulepszonej wersji, która oferuje niespotykaną dotąd grafikę i rozgrywkę.',
      publisher: 'Rockstar Games',
      releaseDate: '2023-03-20',
      price: '129 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'Dead by Daylight',
      subtitle: 'Już dostępne',
      description:
        'Przetrwaj koszmarną rozgrywkę w Dead by Daylight, gdzie strach i adrenalina idą w parze.',
      publisher: 'Behaviour Interactive',
      releaseDate: '2023-02-25',
      price: '31,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 5,
      title: 'Spilt Fiction',
      subtitle: 'Nadchodząca premiera',
      description:
        'Spilt Fiction to gra, która łączy elementy akcji i strategii, oferując niepowtarzalne doświadczenia.',
      publisher: 'ActionWorks',
      releaseDate: '2023-07-30',
      price: '79,99 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  
  export const mostPlayed = [
    {
      id: 1,
      title: 'Fortnite',
      subtitle: 'Bezpłatne',
      description:
        'Fortnite to kultowa gra battle royale, która przyciąga miliony graczy na całym świecie.',
      publisher: 'Epic Games',
      releaseDate: '2023-04-01',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: 'Rocket League',
      subtitle: 'Bezpłatne',
      description:
        'Rocket League łączy samochody i piłkę nożną, oferując dynamiczną i emocjonującą rozgrywkę.',
      publisher: 'Psyonix',
      releaseDate: '2023-03-15',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'Grand Theft Auto V Enhanced',
      subtitle: 'Już dostępne',
      description:
        'Klasyka gatunku, GTA V Enhanced to ulepszona wersja kultowej gry z doskonałą grafiką i rozbudowanym światem.',
      publisher: 'Rockstar Games',
      releaseDate: '2023-03-20',
      price: '129 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'VALORANT',
      subtitle: 'Bezpłatne',
      description:
        'VALORANT to taktyczna strzelanka, która wymaga precyzji i zgranej drużyny, aby osiągnąć zwycięstwo.',
      publisher: 'Riot Games',
      releaseDate: '2023-05-05',
      price: 'Bezpłatne',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 5,
      title: 'Football Manager 2024',
      subtitle: 'Płatne',
      description:
        'Football Manager 2024 to symulacja zarządzania drużyną, która pozwala wcielić się w rolę menedżera i poprowadzić swój klub do sukcesu.',
      publisher: 'Sports Interactive',
      releaseDate: '2023-06-10',
      price: '219 zł',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  
  export const upcomingWishlist = [
    {
      id: 1,
      title: 'Mini Royale',
      subtitle: 'Nadchodząca premiera',
      description:
        'Mini Royale to gra, która zapowiada się jako intensywna bijatyka z elementami strategii.',
      publisher: 'Future Games',
      releaseDate: '2023-09-15',
      price: 'TBA',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 2,
      title: 'Borderlands 4',
      subtitle: 'Nadchodząca premiera',
      description:
        'Borderlands 4 to kolejna odsłona kultowej serii, która łączy elementy RPG z dynamiczną akcją.',
      publisher: 'Gearbox Software',
      releaseDate: '2023-10-20',
      price: 'TBA',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 3,
      title: 'The Last of Us Part I Remake',
      subtitle: 'Nadchodząca premiera',
      description:
        'Remake kultowej gry The Last of Us Part I z nowoczesną grafiką i ulepszonymi mechanikami rozgrywki.',
      publisher: 'Naughty Dog',
      releaseDate: '2023-11-05',
      price: 'TBA',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 4,
      title: 'Lowtife Forms',
      subtitle: 'Nadchodząca premiera',
      description:
        'Lowtife Forms to gra, która łączy elementy strategii i akcji w unikalnym, futurystycznym świecie.',
      publisher: 'Indie Studio',
      releaseDate: '2023-12-01',
      price: 'TBA',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    },
    {
      id: 5,
      title: 'Tides of Annihilation',
      subtitle: 'Nadchodząca premiera',
      description:
        'Tides of Annihilation to epicka gra akcji z rozbudowaną fabułą i niesamowitą oprawą graficzną.',
      publisher: 'ActionWorks',
      releaseDate: '2023-12-15',
      price: 'TBA',
      requirements: { ...defaultRequirements },
      image: '/images/wiedzmin3.jfif',
      thumbnail: '/images/wiedzmin3.jfif'
    }
  ];
  