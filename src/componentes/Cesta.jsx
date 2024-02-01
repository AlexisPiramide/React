import {TablaCesta} from './TablaCesta'

function Cesta({listaArticulos,listaCesta,setlistaCesta}) {
    let precioTotal;
        if(listaCesta.length != 0){
        listaCesta.forEach(articulo => {
            precioTotal += articulo.precio;
        });
    }



    return (
    <table>
        <thead>
             <tr>
                <th> Nombre </th>
                <th> Precio </th>
            </tr>
        </thead>
        <tbody>
            <TablaCesta listaCesta={listaCesta}></TablaCesta>
            <tr>
                <th> Total Cesta </th>
                <th> {precioTotal} </th>
            </tr>
        </tbody>
    </table>)
}

export default Cesta