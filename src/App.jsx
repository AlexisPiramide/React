
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import ArticulosDisponibles from './componentes/ArticulosDisponibles/ArticulosDisponibles'; 
import Cesta from './componentes/Cesta/Cesta';
import GET from './componentes/Peticiones/GET';

function App() {
  
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);  
  const [filter,setFilter]=useState('')
  useEffect(() => {
    async function getter(){
      const URL_SERVER = "http://18.213.254.148:3000/";
      try {
        /*nombre_like no funciona en la alpha*/
        const response = await fetch(URL_SERVER + "articulos?nombre="+filter);
        const data = await response.json();
        setArticulosDisponibles(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getter();

  }, [filter]);

  console.log(articulosDisponibles)
  return (
    <>
        <Cesta articulosCesta={articulosCesta}/>
        <ArticulosDisponibles filter={filter} setFilter={setFilter}
          articulosDisponibles={articulosDisponibles.filter((articulo)=>articulo.unidades>0)} 
          setArticulosCesta={setArticulosCesta} 
          setArticulosDisponibles={setArticulosDisponibles}/>
    </>
  )
}

export default App