import Paggination from "../components/Paggination";
import NewsCardSmall from "../components/NewsPage/NewsCardSmall";
import SortSelect from "../components/SortSelect";

const NewsPage = () => {
  const aktualnosci = [
    {
      title: "Zmiany w dzialaniu gry",
      date: "21.03.2025",
      image: "/images/newsImage.png",
      description:
        "Najnowsza aktualizacja skupia się wyłącznie na zmianach wizualnych w grze. Odświeżono interfejs użytkownika, poprawiono jakość tekstur oraz wprowadzono nowe efekty oświetlenia, które sprawiają, że świat gry wygląda bardziej realistycznie. Zmieniono również wygląd niektórych postaci oraz elementów otoczenia, nadając im nowoczesny i bardziej dopracowany styl. Pomimo tych zmian, wszystkie mechaniki oraz rozgrywka pozostają bez zmian, dzięki czemu gracze mogą cieszyć się nową oprawą graficzną bez wpływu na dotychczasowy sposób gry.",
    },
    {
      title: "Nowa aktualizacja Minecraft",
      date: "10.03.2025",
      image: "/images/newsImage1.png",
      description:
        "Twórcy ogłosili dużą aktualizację, która wprowadza szereg nowych mechanik oraz znaczące poprawki błędów. Wśród nowości znajdziemy ulepszoną fizykę postaci, dynamiczny system pogody wpływający na rozgrywkę oraz rozszerzoną personalizację ekwipunku. Dodatkowo poprawiono stabilność serwerów, zwiększono wydajność gry na starszych urządzeniach i naprawiono zgłaszane przez graczy błędy związane z mechaniką skakania oraz kolizjami obiektów.",
    },
    {
      title: "Zaplanowane prace techniczne",
      date: "08.03.2025",
      image: "/images/newsImage2.png",
      description:
        "Informujemy, że 08 marca 2025 r. w godzinach 02:00–06:00 odbędą się prace techniczne mające na celu optymalizację serwerów oraz poprawę stabilności połączenia. Dodatkowo przeprowadzimy aktualizację zabezpieczeń oraz usprawnienia w infrastrukturze sieciowej, co pozwoli na lepszą wydajność gry w przyszłości. W tym czasie dostęp do gry może być ograniczony. Dziękujemy za cierpliwość i wyrozumiałość!",
    },
    {
      title: "Nowa aktualizacja 1.5.5",
      date: "21.02.2025",
      image: "/images/newsImage3.png",
      description:
        "Twórcy ogłosili dużą aktualizację, która wprowadza szereg nowych mechanik oraz znaczące poprawki błędów. Wśród nowości znajdziemy ulepszoną fizykę postaci, dynamiczny system pogody wpływający na rozgrywkę oraz rozszerzoną personalizację ekwipunku. Dodatkowo poprawiono stabilność serwerów, zwiększono wydajność gry na starszych urządzeniach i naprawiono zgłaszane przez graczy błędy związane z mechaniką skakania oraz kolizjami obiektów.",
    },
  ];

  return (
    <div className="bg-primary p-4">
      <div className="mr-8 ml-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Aktualności</h1>
          <SortSelect />
        </div>

        <div className="grid grid-cols-1 gap-2 ">
          {aktualnosci.map((aktualnosc) => (
            <NewsCardSmall
              title={aktualnosc.title}
              date={aktualnosc.date}
              image={aktualnosc.image}
              description={aktualnosc.description}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Paggination />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
