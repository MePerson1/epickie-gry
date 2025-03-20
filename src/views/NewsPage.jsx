import Paggination from "../components/Paggination";
import NewsCardSmall from "../components/NewsPage/NewsCardSmall";
const NewsPage = () => {

  const aktualnosci = [
    "aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4","aktualnosc3", "aktualnosc4"
  ]
  
  return (
    <div >
      
      <h1 className="text-2xl font-bold">Epickie Gry Aktualności</h1>
      <Paggination />
      <div className="grid grid-cols-1 gap-5">
        {
            aktualnosci.map((aktualnosc) =>
            (<NewsCardSmall/>))
        }
      </div>
    </div>
  );
};

export default NewsPage;
