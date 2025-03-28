import Paggination from "../components/Paggination";
import NewsCardSmall from "../components/NewsPage/NewsCardSmall";
import SortSelect from "../components/SortSelect";
const NewsPage = () => {
  const aktualnosci = [
    "aktualnosc3",
    "aktualnosc4",
    "aktualnosc3",
    "aktualnosc4",
    "aktualnosc3",
    "aktualnosc4",
    "aktualnosc3",
    "aktualnosc4",
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
            <NewsCardSmall />
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
