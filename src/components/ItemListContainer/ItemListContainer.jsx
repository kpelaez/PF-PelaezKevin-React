import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getProductos, getProductosPorCategoria} from '../../Asincronicos'
import { useParams } from 'react-router-dom'


export default function ItemListContainer() {
  const [productos, setProductos] = useState([])

  // //const {categoryId} = useParams()
  
  // useEffect(()=>{

  //   const funcionAsync = categoryId ? getProductosPorCategoria : getProductos

  //   funcionAsync(categoryId)
  //     .then(response =>{
  //         setProductos(response)
  //     })
  //     .catch(error =>{
  //       console.error(error)
  //       getProductos()
  //     })

  // }, [categoryId])

  useEffect(()=>{
    getProductos()
    .then(response => {
      setProductos(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  console.log(productos)

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}
