function Sort() {
    return(
        <div id="sortContainer">
            <select name="sort" id="sort">
                <option value="new-old">Порядок: сперва новые</option>
                <option value="old-new">Порядок: сперва старые</option>
                <option value="chep-expensive">Порядок: сперва дешевле</option>
                <option value="expensive-cheap">Порядок: сперва дороже</option>
            </select>
        </div>
    )
}
export default Sort;