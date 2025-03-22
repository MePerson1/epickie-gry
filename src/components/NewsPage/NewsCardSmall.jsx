import newsImage from '../../assets/newsImage.png'
const NewsCardSmall = () =>
    {
        const loremIpsum = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.";
        return(
        <div className="rounded bg-base-100 grid grid-flow-col gap-5 p-3 content-center">
            
            <div>
                <img className="h-48 w-96 object-cover" alt="news-png" src={newsImage}/>
            </div>
            <div >
                <div className="text-2xl font-bold hover:underline">Aktualizacja skakania</div>
                <a className='text-sm text-gray-400'>21.03.2025</a>
                <div className="mt-4 text-justify">{loremIpsum}</div>
                <div className="flex justify-end mt-5">
            <button className='btn btn-accent'>Czytaj dalej</button>
            </div>
            </div>
        </div>
        );
    }
    
    export default NewsCardSmall