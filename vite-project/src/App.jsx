import { useState } from 'react'
import './App.css'

import Cesta from '../src/componentes/Cesta';
import Articulos from '../src/componentes/Articulos';
const articulos = [
  {"id": 1, "nombre": "Laptop HP Pavilion", "precio": 799.99, "unidades": 50},
  {"id": 2, "nombre": "Monitor Dell UltraSharp", "precio": 299.99, "unidades": 30},
  {"id": 3, "nombre": "Teclado mecánico RGB", "precio": 99.99, "unidades": 100},
  {"id": 4, "nombre": "Mouse inalámbrico Logitech", "precio": 49.99, "unidades": 80},
  {"id": 5, "nombre": "Disco duro SSD Samsung 1TB", "precio": 129.99, "unidades": 40},
  {"id": 6, "nombre": "Impresora multifunción Epson", "precio": 199.99, "unidades": 25},
  {"id": 7, "nombre": "Tarjeta gráfica NVIDIA GeForce RTX 3070", "precio": 499.99, "unidades": 10},
  {"id": 8, "nombre": "Memoria RAM Corsair 16GB DDR4", "precio": 79.99, "unidades": 60},
  {"id": 9, "nombre": "Router inalámbrico TP-Link", "precio": 59.99, "unidades": 70},
  {"id": 10, "nombre": "Altavoces Bluetooth JBL", "precio": 129.99, "unidades": 45},
  {"id": 11, "nombre": "Cámara web Logitech HD", "precio": 69.99, "unidades": 35},
  {"id": 12, "nombre": "Auriculares gaming HyperX", "precio": 89.99, "unidades": 55},
  {"id": 13, "nombre": "Tarjeta madre ASUS ROG Strix", "precio": 179.99, "unidades": 20},
  {"id": 14, "nombre": "Fuente de poder EVGA 650W", "precio": 89.99, "unidades": 30},
  {"id": 15, "nombre": "Estuche para laptop Samsonite", "precio": 49.99, "unidades": 40},
  {"id": 16, "nombre": "Adaptador USB-C a HDMI", "precio": 19.99, "unidades": 75},
  {"id": 17, "nombre": "Kit de limpieza para pantalla", "precio": 9.99, "unidades": 100},
  {"id": 18, "nombre": "Soporte ajustable para monitor", "precio": 29.99, "unidades": 50},
  {"id": 19, "nombre": "Antivirus McAfee 1 año", "precio": 39.99, "unidades": 65},
  {"id": 20, "nombre": "Mochila para portátil Case Logic", "precio": 49.99, "unidades": 25}
]


function App() {

  const [listaArticulos, setArticulos] = useState(articulos)
  const [filterText, setFilterText] = useState('')
  const [listaCesta, setlistaCesta] = useState([])

  return (
    <>
      <Cesta listaArticulos={listaArticulos} listaCesta={listaCesta} setlistaCesta={setlistaCesta}></Cesta>
      <Articulos listaArticulos={listaArticulos} filterText={filterText} setFilterText={setFilterText}></Articulos>
    </>
 )
}

export default App
