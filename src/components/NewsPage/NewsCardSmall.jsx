import newsImage from '../../assets/newsImage.png'
const NewsCardSmall = () =>
    {
    
        return(
        <div className="flex flex-row gap-5 border-t-3 border-primary p-3">
            
            <div>
                <img className="w-50" alt="news-png" src={newsImage}/>
            </div>
            <div className="grid grid-cols-1">
                <div className="text-2xl font-bold">Aktualizacja skakania</div>
                <a className='text-sm'>21.03.2025</a>
                <div className="mt-3">Jakis opis opis opis opis opis opis opis opis opis opis opis</div>
                <a className='link link-hover text-sm text-accent'>Czytaj dalej</a>
            </div>
        </div>);
    }
    
    export default NewsCardSmall