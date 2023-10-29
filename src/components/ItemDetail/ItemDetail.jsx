import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

import {CartContext} from '../../context/CartContext'
import { useContext } from "react"
import './itemdetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

    const [cantAdded,setCantAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (cant) =>{
        setCantAdded(cant)

        const item = {
            id,name,price
        }

        addItem(item, cant)
    }

    return(
        <article className="CardItem-detail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" id="ItemImgDetail"/>
            </picture>
            <section className="sectionDetail">
                <p className="InfoDetail titulo">
                    Categoria: {category}
                </p>
                <p className="InfoDetail cuerpo">
                    Descripcion: {description}
                </p>
                <p className="InfoDetail precio">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
               {
                    cantAdded > 0?(
                        <Link to='/cart' className="Option">Finalizar compra</Link>
                    ):(    
                    <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                    )
               }
            </footer>
        </article>
    )
}

export default ItemDetail