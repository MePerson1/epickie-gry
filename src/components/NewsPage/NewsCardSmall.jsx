import newsImage from '../../assets/newsImage.png'
const NewsCardSmall = () =>
    {
    
        return(
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img className="object-contain" alt="news-png" src={newsImage}/>
            </div>
            <div className="grid grid-cols-1 ">
                <div className="text-2xl font-bold">Tytul</div>
                <div>Kiedy</div>
                <div className="mt-3">Opis</div>
                <div>Czytaj dalej</div>
            </div>
        </div>);
    }
    
    export default NewsCardSmall