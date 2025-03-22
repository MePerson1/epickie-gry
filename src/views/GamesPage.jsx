import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/gamesData';

function parsePrice(str) {
  if (typeof str === 'string') {
    const lower = str.toLowerCase();
    if (lower.includes('bezpłatne') || lower.includes('za darmo') || lower.includes('tba')) {
      return 0;
    }
  }
  const numericString = str.replace(/[^\d,\.]/g, '');
  const normalized = numericString.replace(',', '.');
  return parseFloat(normalized) || 0;
}
function GamesPage() {

  const [keywords, setKeywords] = useState('');
  const [eventsChecked, setEventsChecked] = useState(false);
  const [priceFilters, setPriceFilters] = useState([]);
  const [genreFilters, setGenreFilters] = useState([]);
  const [featureFilters, setFeatureFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [subscriptionsChecked, setSubscriptionsChecked] = useState(false);

  const [sortOption, setSortOption] = useState('releaseDateDesc');


  function filterGames(list) {
    return list.filter((game) => {
      if (keywords.trim()) {
        const kw = keywords.trim().toLowerCase();
        if (
          !game.title.toLowerCase().includes(kw) &&
          !game.description.toLowerCase().includes(kw)
        ) {
          return false;
        }
      }
      if (eventsChecked && !game.subtitle.toLowerCase().includes('event')) {
        return false;
      }
      if (priceFilters.length > 0) {
        const p = parsePrice(game.price);
        let matchPrice = false;
        for (const pf of priceFilters) {
          if (pf === 'free' && p === 0) matchPrice = true;
          if (pf === '0-100' && p > 0 && p <= 100) matchPrice = true;
          if (pf === '100-200' && p >= 100 && p <= 200) matchPrice = true;
        }
        if (!matchPrice) return false;
      }
      if (genreFilters.length > 0) {
        if (!genreFilters.some(filter => game.categories.includes(filter))) {
          return false;
        }
      }
      if (featureFilters.length > 0) {
        if (!featureFilters.some(filter => game.features.includes(filter))) {
          return false;
        }
      }
      if (typeFilters.length > 0) {
        if (!typeFilters.includes(game.type)) {
          return false;
        }
      }
      if (subscriptionsChecked) {
        const pub = game.publisher.toLowerCase();
        if (!pub.includes('ea') && !pub.includes('ubisoft')) {
          return false;
        }
      }
      return true;
    });
  }


  function sortGames(list) {
    const sorted = [...list];
    sorted.sort((a, b) => {
      switch (sortOption) {
        case 'releaseDateDesc':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'releaseDateAsc':
          return new Date(a.releaseDate) - new Date(b.releaseDate);
        case 'titleAsc':
          return a.title.localeCompare(b.title);
        case 'titleDesc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
    return sorted;
  }

  const filtered = filterGames(games);
  const sorted = sortGames(filtered);
  const gamesToShow = sorted.slice(0, 40);

  return (
    <main className="bg-neutral text-neutral-content min-h-screen">
      <div className="flex flex-row">
        <aside className="hidden lg:block w-64 bg-base-100 p-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Keywords</div>
            <div className="collapse-content">
              <input
                type="text"
                className="input input-sm w-full"
                placeholder="Search..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Events</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={eventsChecked}
                  onChange={(e) => setEventsChecked(e.target.checked)}
                />
                <span>Pokaz wydarzenia</span>
              </label>
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Price</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={priceFilters.includes('free')}
                  onChange={(e) => {
                    const copy = [...priceFilters];
                    if (e.target.checked) copy.push('free');
                    else {
                      const idx = copy.indexOf('free');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setPriceFilters(copy);
                  }}
                />
                <span>Uczciwa cena</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={priceFilters.includes('0-100')}
                  onChange={(e) => {
                    const copy = [...priceFilters];
                    if (e.target.checked) copy.push('0-100');
                    else {
                      const idx = copy.indexOf('0-100');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setPriceFilters(copy);
                  }}
                />
                <span>0 - 100 zł</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={priceFilters.includes('100-200')}
                  onChange={(e) => {
                    const copy = [...priceFilters];
                    if (e.target.checked) copy.push('100-200');
                    else {
                      const idx = copy.indexOf('100-200');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setPriceFilters(copy);
                  }}
                />
                <span>100 - 200 zł</span>
              </label>
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Genre</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={genreFilters.includes('Action')}
                  onChange={(e) => {
                    const copy = [...genreFilters];
                    if (e.target.checked) copy.push('Action');
                    else {
                      const idx = copy.indexOf('Action');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setGenreFilters(copy);
                  }}
                />
                <span>Action</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={genreFilters.includes('Adventure')}
                  onChange={(e) => {
                    const copy = [...genreFilters];
                    if (e.target.checked) copy.push('Adventure');
                    else {
                      const idx = copy.indexOf('Adventure');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setGenreFilters(copy);
                  }}
                />
                <span>Przygodówka</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={genreFilters.includes('RPG')}
                  onChange={(e) => {
                    const copy = [...genreFilters];
                    if (e.target.checked) copy.push('RPG');
                    else {
                      const idx = copy.indexOf('RPG');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setGenreFilters(copy);
                  }}
                />
                <span>RPG</span>
              </label>
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Features</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={featureFilters.includes('Multiplayer')}
                  onChange={(e) => {
                    const copy = [...featureFilters];
                    if (e.target.checked) copy.push('Multiplayer');
                    else {
                      const idx = copy.indexOf('Multiplayer');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setFeatureFilters(copy);
                  }}
                />
                <span>Multiplayer</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={featureFilters.includes('Co-op')}
                  onChange={(e) => {
                    const copy = [...featureFilters];
                    if (e.target.checked) copy.push('Co-op');
                    else {
                      const idx = copy.indexOf('Co-op');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setFeatureFilters(copy);
                  }}
                />
                <span>Co-op</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={featureFilters.includes('Controller Support')}
                  onChange={(e) => {
                    const copy = [...featureFilters];
                    if (e.target.checked) copy.push('Controller Support');
                    else {
                      const idx = copy.indexOf('Controller Support');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setFeatureFilters(copy);
                  }}
                />
                <span>Wsparcie kontrolera</span>
              </label>
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Types</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={typeFilters.includes('Game')}
                  onChange={(e) => {
                    const copy = [...typeFilters];
                    if (e.target.checked) copy.push('Game');
                    else {
                      const idx = copy.indexOf('Game');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setTypeFilters(copy);
                  }}
                />
                <span>Gra </span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={typeFilters.includes('Game Add-on')}
                  onChange={(e) => {
                    const copy = [...typeFilters];
                    if (e.target.checked) copy.push('Game Add-on');
                    else {
                      const idx = copy.indexOf('Game Add-on');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setTypeFilters(copy);
                  }}
                />
                <span>Dodatek</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={typeFilters.includes('Game Bundle')}
                  onChange={(e) => {
                    const copy = [...typeFilters];
                    if (e.target.checked) copy.push('Game Bundle');
                    else {
                      const idx = copy.indexOf('Game Bundle');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setTypeFilters(copy);
                  }}
                />
                <span>Pakiet gier</span>
              </label>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={typeFilters.includes('Game Demo')}
                  onChange={(e) => {
                    const copy = [...typeFilters];
                    if (e.target.checked) copy.push('Game Demo');
                    else {
                      const idx = copy.indexOf('Game Demo');
                      if (idx > -1) copy.splice(idx, 1);
                    }
                    setTypeFilters(copy);
                  }}
                />
                <span>Demo gry</span>
              </label>
            </div>
          </div>
          <div className="mb-2 collapse collapse-arrow">
            <input type="checkbox" className="peer" defaultChecked />
            <div className="collapse-title text-md font-medium">Subscriptions</div>
            <div className="collapse-content">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={subscriptionsChecked}
                  onChange={(e) => setSubscriptionsChecked(e.target.checked)}
                />
                <span>EA Play / Ubisoft+</span>
              </label>
            </div>
          </div>
        </aside>

        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl font-semibold">Browse Games</div>
            <div className="flex items-center gap-2 text-sm">
              <span>Show:</span>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost normal-case flex items-center gap-1"
                >
                  {sortOption === 'releaseDateDesc' && 'New Release'}
                  {sortOption === 'releaseDateAsc' && 'Old Release'}
                  {sortOption === 'titleAsc' && 'A-Z'}
                  {sortOption === 'titleDesc' && 'Z-A'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
                  <li>
                    <button onClick={() => setSortOption('releaseDateDesc')}>
Najnowsze                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortOption('releaseDateAsc')}>
                      Najstarsze
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortOption('titleAsc')}>
                      Alfabetycznie (A-Z)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortOption('titleDesc')}>
                      Alfabetycznie (Z-A)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {gamesToShow.map((game) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className="group block bg-base-100 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
              <div
  className="relative h-48 w-full bg-contain bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${game.image})` }}
>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold group-hover:underline">
                    {game.title}
                  </h2>
                  <p className="text-sm text-gray-400">{game.publisher}</p>
                  <p className="text-sm mt-1">{game.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default GamesPage;
