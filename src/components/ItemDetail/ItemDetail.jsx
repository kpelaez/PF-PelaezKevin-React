import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

import {CartContext} from '../../context/CartContext'
import { useContext } from "react"

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

    const [cantAdded,setCantAdded] = useState(0)

    const {addItem } = useContext(CartContext)

    const handleOnAdd = (cant) =>{
        setCantAdded(cant)

        const item = {
            id,name,price
        }

        addItem(item, cant)
    }

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
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