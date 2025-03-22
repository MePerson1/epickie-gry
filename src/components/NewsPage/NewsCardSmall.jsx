import newsImage from '../../assets/newsImage.png'
const NewsCardSmall = () =>
    {
        const loremIpsum = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.";
        return(
        <div className="bg-base-100 grid grid-flow-col gap-5 p-3 content-center">
            
            <div>
                <img className="w-50" alt="news-png" src={newsImage}/>
            </div>
            <div >
                <div className="text-2xl font-bold">Aktualizacja skakania</div>
                <a className='text-sm text-gray-400'>21.03.2025</a>
                <div className="mt-4 text-justify">{loremIpsum}</div>
                <button className='btn btn-accent mt-5'>Czytaj dalej</button>
            </div>
        </div>
        );
    }
    
    export default NewsCardSmall