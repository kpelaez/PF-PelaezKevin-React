import React from 'react'
import  logoCarrito from './assets/carro.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {totalCant}= useContext(CartContext)

  return (
    
    <Link to='/cart' className='CartWidget'>
      <img className='CartImg' src={logoCarrito} alt='logo carrito'/>
      {totalCant}
    </Link>
  )
}

export default CartWidget
