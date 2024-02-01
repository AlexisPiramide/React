function TablaCesta({ listaCesta }) {

  if (listaCesta != 0) {
    listaCesta.forEach((articulo) => {
      return (
        <tr key={articulo.id}>
          <td>{articulo.nombre}</td>
          <td>{articulo.precio}</td>
          <td><button>Eliminar</button></td>
        </tr>
      )
    });
  }
}

export { TablaCesta };