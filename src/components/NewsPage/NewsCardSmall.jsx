const NewsCardSmall = () =>
    {
    
        return(
        <div className="flex flex-row gap-5">
            <div>Zdjecie</div>
            <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold">Tytul</div>
                <div>Kiedy</div>
                <div className="mt-3">Opis</div>
                <div>Czytaj dalej</div>
            </div>
        </div>);
    }
    
    export default NewsCardSmall