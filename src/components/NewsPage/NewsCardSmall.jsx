import newsImage from '../../assets/newsImage.png'
const NewsCardSmall = () =>
    {
        const loremIpsum = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.";
        return(
        <div className="grid grid-flow-col gap-5 border-t-3 border-primary p-3 items-start">
            
            <div>
                <img className="w-50" alt="news-png" src={newsImage}/>
            </div>
            <div >
                <div className="text-2xl font-bold">Aktualizacja skakania</div>
                <a className='text-sm'>21.03.2025</a>
                <div className="mt-3">{loremIpsum}</div>
                <a className='link link-hover text-sm text-info'>Czytaj dalej</a>
            </div>
        </div>
        );
    }
    
    export default NewsCardSmall