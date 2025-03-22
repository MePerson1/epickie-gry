// src/data/gamesData.js

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
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Action', 'Adventure'],
    type: 'Game',
    features: ['Multiplayer', 'Co-op']
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
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Action', 'Adventure'],
    type: 'Game',
    features: ['Singleplayer']
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
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Action', 'Shooter'],
    type: 'Game',
    features: ['Multiplayer']
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
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['RPG', 'Adventure'],
    type: 'Game',
    features: ['Multiplayer', 'Co-op', 'Controller Support']
  },
  {
    id: 5,
    title: 'Suikoden I&II HD Remaster',
    subtitle: 'Przedsprzedaż',
    description:
      'Klasyka w nowej odsłonie – zmodernizowana grafika oraz poprawiona mechanika rozgrywki.',
    publisher: 'Konami',
    releaseDate: '2023-06-01',
    price: '231,39 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['RPG', 'Strategy'],
    type: 'Game',
    features: ['Singleplayer']
  },
  {
    id: 6,
    title: 'Death in the Water 2',
    subtitle: 'Już dostępne',
    description:
      'Mroczna przygoda, pełna napięcia i zagadek. Zanurz się w tajemniczy świat Death in the Water 2.',
    publisher: 'Indie Studio',
    releaseDate: '2023-02-20',
    price: '63 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Horror', 'Adventure'],
    type: 'Game',
    features: ['Singleplayer']
  },
  {
    id: 7,
    title: 'Redemption Reapers',
    subtitle: 'Już dostępne',
    description:
      'Szybka akcja i intensywne starcia. Redemption Reapers to idealna propozycja dla fanów dynamicznych gier akcji.',
    publisher: 'Reaper Studios',
    releaseDate: '2023-04-15',
    price: '99,99 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Action', 'Shooter'],
    type: 'Game',
    features: ['Multiplayer', 'Co-op']
  },
  {
    id: 8,
    title: 'X-Morph Defense Complete Edition',
    subtitle: 'Już dostępne',
    description:
      'Strategia i akcja w jednym – przygotuj się na intensywne bitwy oraz taktyczne wyzwania.',
    publisher: 'Strategy Inc.',
    releaseDate: '2023-03-30',
    price: '109,99 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Strategy', 'Action'],
    type: 'Game',
    features: ['Singleplayer']
  },
  {
    id: 9,
    title: 'Nowość 6',
    subtitle: 'Nadchodząca premiera',
    description:
      'Opis nowości 6. Gra oferuje unikalną mechanikę oraz niespodziewane zwroty akcji.',
    publisher: 'Future Games',
    releaseDate: '2023-09-01',
    price: '59,99 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Action', 'Indie'],
    type: 'Game',
    features: ['Multiplayer']
  },
  {
    id: 10,
    title: 'Nowość 7',
    subtitle: 'Nadchodząca premiera',
    description:
      'Opis nowości 7. Poznaj świat pełen tajemnic i niesamowitych przygód.',
    publisher: 'NextGen Studios',
    releaseDate: '2023-10-10',
    price: '49,99 zł',
    requirements: { ...defaultRequirements },
    image: '/images/wiedzmin3.jfif',
    thumbnail: '/images/wiedzmin3.jfif',
    categories: ['Adventure', 'Indie'],
    type: 'Game',
    features: ['Singleplayer']
  }
];
