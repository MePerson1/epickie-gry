const NewsCardSmall = ({ title, date, image, description }) => {
  return (
    <div className="rounded bg-base-100 grid grid-flow-col gap-5 p-3 content-center">
      <div>
        <img className="h-48 w-96 object-cover" alt="news-png" src={image} />
      </div>
      <div>
        <div className="text-2xl font-bold hover:underline">{title}</div>
        <a className="text-sm text-gray-400">{date}</a>
        <div className="mt-4 text-justify">{description}</div>
        <div className="flex justify-end mt-5">
          <button className="btn btn-accent">Czytaj dalej</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSmall;
