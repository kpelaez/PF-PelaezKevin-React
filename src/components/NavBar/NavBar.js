import React from 'react'
import CartWidget from '../Cartwidget/CartWidget'
import MiBoton from '../Boton/MiBoton'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  return (
    <nav>
        <Link to='/'>
          <h3>CompuKev</h3>
        </Link>
        
      <div className='menu'>
        <NavLink to={`/category/1`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Celulares</NavLink>
        <NavLink to={`/category/2`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Monitores</NavLink>
        <NavLink to={`/category/3`} className={({isActive}) => isActive? 'ActiveOption':'Option'}>Memorias</NavLink>
      </div>

      <CartWidget/> 

    </nav>

    )
}
