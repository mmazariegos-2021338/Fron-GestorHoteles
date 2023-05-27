import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import '../../../public/style.css';
import '../../../public/style-home.css';
import '../../../public/reset.css';

const Cliente = () => {
  return (
    <div>
        <Outlet></Outlet>
        <br></br>
        <h1><img src="../../../public/facturas.png"/></h1>
        <ul class="productos">
                <li>
                    <h2>Hotel VIP</h2>
                    <img src="../../../public/75.png"/>
                    <p class="producto-descripcion">Bienvenidos a Nuestro Hoteles</p>
                    <p class="producto-precio">$ 1000</p>
                </li>
                <li>
                    <h2>Hoteles 5 estrellas</h2>
                    <img src="../../../public/79.png"/>
                    <p class="producto-descripcion">Hoteles con Berificacion</p>
                    <p class="producto-precio">$ 500.00</p>
                </li>
                <li>
                    <h2>Hoteles de la Ciudad</h2>
                    <img src="../../../public/74.png"/>
                    <p class="producto-descripcion">Paquete completo </p>
                    <p class="producto-precio">$ 300.00</p>
                </li>
               
            </ul>
       
      
    </div>
  )
}

export default Cliente
