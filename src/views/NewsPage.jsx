import Paggination from "../components/Paggination";
import NewsCardSmall from "../components/NewsPage/NewsCardSmall";
const NewsPage = () => {

  const aktualnosci = [
    "aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4"
  ]
  
  return (
    <div >
      
      <h1 className="text-3xl font-bold">Aktualności</h1>
      <div className="flex flex-row justify-between">
        <select class="select select-info">
          <option>Po dacie najnowsze</option>
          <option>Po dacie najstarsze</option>
          <option>Tytuł od A do Z</option>
          <option>Tytuł od Z do A</option>
        </select>
        <p>
          Strona 1 z 7
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        {
            aktualnosci.map((aktualnosc) =>
            (<NewsCardSmall/>))
        }
      </div>
      <Paggination />
    </div>
  );
};

export default NewsPage;
