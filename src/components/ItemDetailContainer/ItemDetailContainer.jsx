
import {useState, useEffect} from 'react';
import {getProductById} from '../../Asincronicos';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState(null)

    useEffect(()=>{
        getProductById('4')//numero hardcodeado, luego ver la manera de que sea dinamico
            .then(response =>{
                setProducto(response)
            })
            .catch(error =>{
                console.error(error)
            })
    },[])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer