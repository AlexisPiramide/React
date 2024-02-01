function TablaArticulos({ listaArticulos, filterText }) {
  listaArticulos.forEach((articulo) => {
      if(articulo.nombre.toLowerCase().includes(filterText.toLowerCase())){
        console.log(articulo) 
        return(
          <tr key={articulo.id}>
            <td>{articulo.nombre}</td>
            <td>{articulo.precio}</td>
            <td>{articulo.unidades}</td>
            <td><button>Comprar</button></td>
        </tr>
        );
      }
    });
}

export default TablaArticulos;

