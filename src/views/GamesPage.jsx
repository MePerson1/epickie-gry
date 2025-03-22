import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  games,
  newGames,
  discountedGames,
  freeGames,
  bestsellers,
  mostPlayed,
  upcomingWishlist,
} from '../data/gamesData';

const GamesPage = () => {
  const itemsPerPage = 5;
  
  const [selectedGame, setSelectedGame] = useState(games[0]);

  const [newGamesPage, setNewGamesPage] = useState(0);
  const newGamesToShow = newGames.slice(
    newGamesPage * itemsPerPage,
    newGamesPage * itemsPerPage + itemsPerPage
  );

  const [discountedGamesPage, setDiscountedGamesPage] = useState(0);
  const discountedGamesToShow = discountedGames.slice(
    discountedGamesPage * itemsPerPage,
    discountedGamesPage * itemsPerPage + itemsPerPage
  );

  const [freeGamesPage, setFreeGamesPage] = useState(0);
  const freeGamesToShow = freeGames.slice(
    freeGamesPage * itemsPerPage,
    freeGamesPage * itemsPerPage + itemsPerPage
  );

  return (
    <main className="bg-neutral text-neutral-content">
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="relative flex-1 bg-cover bg-center rounded h-64 md:h-96"
            style={{ backgroundImage: `url(${selectedGame.image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
              <h2 className="text-3xl font-bold mb-2">{selectedGame.title}</h2>
              <p className="text-sm mb-1">{selectedGame.subtitle}</p>
              <p className="max-w-lg mb-2">{selectedGame.description}</p>
              <p className="text-sm mb-4">{selectedGame.price}</p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Kup teraz</button>
                <button className="btn btn-outline">Dodaj do listy życzeń</button>
                <Link to={`/game/${selectedGame.id}`} className="btn btn-outline">
                  Szczegóły
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {games.map((game) => (
              <div
                key={game.id}
                onClick={() => setSelectedGame(game)}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer
                  hover:bg-base-200 transition-colors
                  ${selectedGame.id === game.id ? 'bg-base-200' : ''}`}
              >
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{game.title}</span>
                  <span className="text-sm text-gray-400">{game.subtitle}</span>
                </div>
                <Link to={`/game/${game.id}`} className="btn btn-xs btn-outline ml-auto">
                  Szczegóły
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Odkryj nowości</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newGamesToShow.map((game) => (
            <div key={game.id} className="card bg-base-100 shadow-xl">
              <figure className="relative w-full h-32 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <p className="text-sm text-gray-400">Gra podstawowa</p>
                <h3 className="text-lg font-bold">{game.title}</h3>
                <p className="text-sm">{game.price}</p>
                <div className="card-actions justify-end mt-2">
                  <Link to={`/game/${game.id}`} className="btn btn-sm btn-outline">
                    Szczegóły
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {newGamesPage > 0 && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setNewGamesPage(newGamesPage - 1)}
            >
              Poprzednie
            </button>
          )}
          {(newGamesPage + 1) * itemsPerPage < newGames.length && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setNewGamesPage(newGamesPage + 1)}
            >
              Następne
            </button>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Wyróżnione zniżki</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {discountedGamesToShow.map((game) => (
            <div key={game.id} className="relative card bg-base-100 shadow-xl">
              <div className="absolute top-2 left-2 badge badge-error">
                {game.discount}
              </div>
              <figure className="relative w-full h-32 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <p className="text-sm text-gray-400">{game.subtitle}</p>
                <h3 className="text-lg font-bold">{game.title}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="line-through text-gray-500 text-sm">
                    {game.oldPrice}
                  </span>
                  <span className="font-semibold">{game.newPrice}</span>
                </div>
                <div className="card-actions justify-end mt-2">
                  <Link to={`/game/${game.id}`} className="btn btn-sm btn-outline">
                    Szczegóły
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {discountedGamesPage > 0 && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setDiscountedGamesPage(discountedGamesPage - 1)}
            >
              Poprzednie
            </button>
          )}
          {(discountedGamesPage + 1) * itemsPerPage < discountedGames.length && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setDiscountedGamesPage(discountedGamesPage + 1)}
            >
              Następne
            </button>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Bezpłatne gry</h2>
          <button className="btn btn-outline btn-sm">Zobacz więcej</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {freeGamesToShow.map((game) => (
            <div key={game.id} className="card bg-base-100 shadow-xl">
              <figure className="relative w-full h-32 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="text-lg font-bold">{game.title}</h3>
                <p className="text-sm text-gray-400">{game.subtitle}</p>
                <div className="card-actions justify-end mt-2">
                  <Link to={`/game/${game.id}`} className="btn btn-sm btn-outline">
                    Szczegóły
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {freeGamesPage > 0 && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setFreeGamesPage(freeGamesPage - 1)}
            >
              Poprzednie
            </button>
          )}
          {(freeGamesPage + 1) * itemsPerPage < freeGames.length && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setFreeGamesPage(freeGamesPage + 1)}
            >
              Następne
            </button>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Bestsellery</h2>
            <div className="flex flex-col gap-2">
              {bestsellers.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{game.title}</span>
                    <span className="text-sm text-gray-400">{game.price}</span>
                  </div>
                  <Link to={`/game/${game.id}`} className="btn btn-xs btn-outline ml-auto">
                    Szczegóły
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Najczęściej rozgrywane</h2>
            <div className="flex flex-col gap-2">
              {mostPlayed.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{game.title}</span>
                    <span className="text-sm text-gray-400">{game.price}</span>
                  </div>
                  <Link to={`/game/${game.id}`} className="btn btn-xs btn-outline ml-auto">
                    Szczegóły
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">
              Najczęściej dodawane do listy życzeń nadchodzące tytuły
            </h2>
            <div className="flex flex-col gap-2">
              {upcomingWishlist.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center gap-2 p-2 rounded hover:bg-base-200 transition-colors"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{game.title}</span>
                  </div>
                  <Link to={`/game/${game.id}`} className="btn btn-xs btn-outline ml-auto">
                    Szczegóły
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GamesPage;
