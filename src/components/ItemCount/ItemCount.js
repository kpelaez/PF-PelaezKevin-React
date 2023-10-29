import {useState} from 'react';

export default function ItemCount  ({stock, inicial, onAdd}) {
    const [cantidad, setCantidad] = useState(inicial)

    const sumar = () =>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const restar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className='itemCount'>
            <div className='controls'>
                <button className='countBtn' onClick={restar}>-</button>
                <h4 className='numberProd'>{cantidad}</h4>
                <button className='countBtn' onClick={sumar}>+</button>
            </div>
            <div>
                <button className='addBtn' onClick ={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}