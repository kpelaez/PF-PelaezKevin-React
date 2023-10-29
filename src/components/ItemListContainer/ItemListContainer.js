import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getProductos, getProductosPorCategoria} from '../../Asincronicos'
import { useParams } from 'react-router-dom'


export default function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([])

  const {categoryId} = useParams()
  
  useEffect(()=>{

    const funcionAsync = categoryId ? getProductosPorCategoria : getProductos
    funcionAsync(categoryId)
      .then(response =>{
          setProductos(response)
      })
      .catch(error =>{
        console.error(error)
      })

  }, [categoryId])

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList productos = {productos}/>
    </div>
  )
}
