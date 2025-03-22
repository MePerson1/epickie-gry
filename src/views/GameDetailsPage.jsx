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
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-bold">{game.title}</h1>
          <p className="text-xl">{game.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Opis</h2>
        <p className="mb-4">{game.description}</p>

        <h3 className="text-xl font-semibold">Wydawca:</h3>
        <p className="mb-4">{game.publisher}</p>

        <h3 className="text-xl font-semibold">Data premiery:</h3>
        <p className="mb-4">{game.releaseDate}</p>

        <h3 className="text-xl font-semibold">Cena:</h3>
        <p className="mb-4">{game.price}</p>

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
      </section>
    </main>
  );
};

export default GameDetailsPage;
