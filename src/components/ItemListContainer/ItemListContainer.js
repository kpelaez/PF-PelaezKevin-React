import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getProductos} from '../../Asincronicos'


export default function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([])
  
  useEffect(()=>{
    getProductos()
      .then(response =>{
          setProductos(response)
      })
      .catch(error =>{
        console.error(error)
      })

  }, [])

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList productos = {productos}/>
    </div>
  )
}
