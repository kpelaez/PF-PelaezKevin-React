import React from 'react'
import  logoCarrito from './assets/carro.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const {totalCant}= useContext(CartContext)

  return (
    
    <Link to='/cart' className='CartWidget' style={{display: totalCant > 0? 'block': 'none'}}>
      <img className='CartImg' src={logoCarrito} alt='logo carrito'/>
      {totalCant}
    </Link>
  )
}
