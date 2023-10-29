import React from 'react'
import CartWidget from '../Cartwidget/CartWidget'
import MiBoton from '../Boton/MiBoton'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to='/'>
          <h3>CompuKev</h3>
        </Link>
        
        <CartWidget/> 
      <div>
        <NavLink to={`/category/Celular`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Celulares</NavLink>
        <NavLink to={`/category/Monitor`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Monitores</NavLink>
        <NavLink to={`/category/Memorias`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Memorias</NavLink>
      </div>

    </nav>

    )
}
