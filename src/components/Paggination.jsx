const Paggination = () =>
{
    return(
        <div class="join shadow-lg">
            <button class="join-item btn ">{"<"}</button>
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
                />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            <button class="join-item btn ">{">"}</button>
        </div>
    );
}

export default Paggination;