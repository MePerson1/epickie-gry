const Store = () => {
  const games = [
    { id: 1, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 2, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 3, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 4, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 5, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 6, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },
    { id: 7, title: "Wiedzmak", image: "/images/wiedzmin3.jfif", price: "19.99" },

  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 py-6">
      <div className="w-full h-96 bg-cover bg-center flex items-center justify-center mb-8" style={{ backgroundImage: "" }}>
        <h2 className="text-5xl font-bold">Odkryj nowe gry</h2>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Gry 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-gray-800 shadow-xl p-4 rounded-lg hover:scale-105 transition-transform">
            <img src={game.image} alt={game.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-2xl font-bold mt-4">{game.title}</h2>
            <p className="text-lg mt-2 text-gray-400">{game.price}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Kup teraz </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
