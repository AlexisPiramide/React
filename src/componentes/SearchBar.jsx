
function SearchBar({ filterText, setFilterText }) {
    return (
        <form>
            <input type="text" value={filterText}  onChange={(e) => setFilterText(e.target.value)} placeholder="Buscar..." />
        </form>
    );
}

export default SearchBar;