import TablaArticulos from './TablaArticulos';
import SearchBar from './SearchBar';

function Articulos({filterText,setFilterText,listaArticulos}) {
    

    return (
        <>
            <SearchBar filterText={filterText} setFilterText={setFilterText}></SearchBar>
            <table>
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Precio </th>
                        <th> Unidades </th>
                        <th> Acción </th>
                    </tr>
                </thead>
                <tbody>
                    <TablaArticulos  listaArticulos={listaArticulos} filterText={filterText}></TablaArticulos>
                </tbody>
            </table>
        </>
    );

}

export default Articulos