const SortSelect = () => {
    return(<label className="select ">
        <span className="label text-white ">Sortuj</span>
        <select class="select font-semibold">
          <option>Po dacie najnowsze</option>
          <option>Po dacie najstarsze</option>
          <option>Tytuł od A do Z</option>
          <option>Tytuł od Z do A</option>
        </select>
        </label>
    );
}

export default SortSelect;