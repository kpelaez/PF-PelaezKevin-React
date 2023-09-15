import React from 'react'
import CartWidget from '../Cartwidget/CartWidget'
import MiBoton from '../Boton/MiBoton'

export default function NavBar() {
  return (
    <nav>
        <h3>CompuKev</h3>
        
        <CartWidget/> 

        <MiBoton Titulo="Celulares"/>
        <MiBoton Titulo="Monitores"/>
        <MiBoton Titulo="Memorias"/>
        

    </nav>

    )
}
