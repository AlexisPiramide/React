
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import ArticulosDisponibles from './componentes/ArticulosDisponibles/ArticulosDisponibles'; 
import Cesta from './componentes/Cesta/Cesta';
import GET from './componentes/Peticiones/GET';

function App() {
  
  const [articulosDisponibles, setArticulosDisponibles] = useState(getData);
  const [articulosCesta, setArticulosCesta] = useState([]);

  async function getData() {

    const URL_SERVER = "http://18.213.254.148:3000/";
    try {
        const response = await fetch(URL_SERVER + "articulos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

  return (
    <>
        <Cesta articulosCesta={articulosCesta}/>
        <ArticulosDisponibles 
          articulosDisponibles={articulosDisponibles.filter((articulo)=>articulo.unidades>0)} 
          setArticulosCesta={setArticulosCesta} 
          setArticulosDisponibles={setArticulosDisponibles}/>
    </>
  )
}

export default App
