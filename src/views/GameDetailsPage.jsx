import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../data/gamesData';

const GameDetailsPage = () => {
  const { id } = useParams();
  const game = games.find((g) => String(g.id) === id);

  if (!game) {
    return (
      <main className="bg-neutral text-neutral-content p-8">
        <h2 className="text-2xl font-bold">Gra nie została znaleziona</h2>
      </main>
    );
  }

  return (
    <main className="bg-neutral text-neutral-content">
      
      <section className="max-w-6xl mx-auto p-4 lg:p-8">
      <div className="text-xl font-semibold pb-4">Szczegóły</div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Example Trailer"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="flex space-x-2 mt-4 overflow-x-auto">
              <img
                src={game.image}
                alt="Zrzut 1"
                className="w-24 h-16 object-cover rounded"
              />
              <img
                src={game.thumbnail}
                alt="Zrzut 2"
                className="w-24 h-16 object-cover rounded"
              />
            </div>
          </div>

          <div className="w-full lg:w-96 flex flex-col space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{game.title}</h1>
              <p className="text-lg text-gray-400">{game.subtitle}</p>
              <div className="mt-2 flex items-center space-x-2">
          
                {game.features?.map((feature) => (
                  <span key={feature} className="badge badge-outline">
                    {feature}
                  </span>
                ))}
                {game.categories?.map((category) => (
                  <span key={category} className="badge badge-outline">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-base-100 p-4 rounded shadow-sm text-base-content">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold">Podstawowa gra</span>
                <span className="text-xl font-bold">{game.price}</span>
              </div>
              <button className="btn btn-primary w-full mb-2">Kup teraz</button>
              <button className="btn w-full mb-2">Dodaj do koszyka</button>
              <button className="btn w-full mb-2">Dodaj do listy zyczen</button>
              
            </div>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Tworca</span>{' '}
                <span>{game.publisher}</span>
              </div>
              <div>
                <span className="font-semibold">Wydawca:</span>{' '}
                <span>{game.publisher}</span>
              </div>
              <div>
                <span className="font-semibold">Data premiery</span>{' '}
                <span>{game.releaseDate}</span>
              </div>
              <div>
                <span className="font-semibold">Platforma</span> PC
              </div>
            </div>

            <button className="btn btn-outline w-full">
              Wszystkie dodatki 
            </button>
            <button className="btn btn-ghost w-full">Udostępnij</button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {game.categories?.map((cat) => (
              <span key={cat} className="badge badge-outline">
                {cat}
              </span>
            ))}
          
          </div>

          <h2 className="text-2xl font-bold mb-2">Opis gry</h2>
          <p className="mb-4">
              {game.description}
          </p>

        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Wymagania systemowe:</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>System operacyjny:</strong> {game.requirements.os}
            </li>
            <li>
              <strong>Procesor:</strong> {game.requirements.processor}
            </li>
            <li>
              <strong>Pamięć:</strong> {game.requirements.memory}
            </li>
            <li>
              <strong>Miejsce na dysku:</strong> {game.requirements.storage}
            </li>
            <li>
              <strong>Karta graficzna:</strong> {game.requirements.gpu}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default GameDetailsPage;
