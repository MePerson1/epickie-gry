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
  className="relative h-64 bg-cover bg-center mx-auto w-full max-w-3xl"
  style={{ backgroundImage: `url(${game.image})` }}
>
  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
    <h2 className="text-3xl font-bold mb-2">{game.title}</h2>
    <p className="text-sm mb-1">{game.subtitle}</p>
    <p className="max-w-lg mb-2">{game.description}</p>
    <p className="text-sm mb-4">{game.price}</p>
    <div className="flex gap-2">
      <button className="btn btn-primary">Kup teraz</button>
      <button className="btn btn-outline">Dodaj do listy życzeń</button>
    </div>
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
