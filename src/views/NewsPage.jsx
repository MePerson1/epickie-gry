import Paggination from "../components/Paggination";
import NewsCardSmall from "../components/NewsPage/NewsCardSmall";
const NewsPage = () => {

  const aktualnosci = [
    "aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4"
  ]
  
  return (
    <div className="bg-neutral p-4">
      <div className="mr-8 ml-8"> 
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Aktualności</h1>
          <label className="select ">
            <span className="label text-white ">Sortuj</span>
            <select class="select font-semibold">
              <option>Po dacie najnowsze</option>
              <option>Po dacie najstarsze</option>
              <option>Tytuł od A do Z</option>
              <option>Tytuł od Z do A</option>
            </select>
            </label>
        </div>
        
        <div className="grid grid-cols-1 gap-2 ">
          {
              aktualnosci.map((aktualnosc) =>
              (<NewsCardSmall/>))
          }
        </div>
        <div className="flex justify-center">
          <Paggination />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
