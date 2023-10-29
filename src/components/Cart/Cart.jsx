import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem  from '../CartItem/CartItem'

const Cart = () =>{

    const { cart, clearCart, totalCant, total} = useContext(CartContext)

    if(totalCant === 0 ){
        return (
            <div>
                <h1>No hay items</h1>
                <Link to='/' className="Option">Ver Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p=><CartItem key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick ={()=> clearCart()} className="Button">Vaciar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart