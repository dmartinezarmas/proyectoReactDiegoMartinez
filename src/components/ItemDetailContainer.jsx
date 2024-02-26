import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./json/productos.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == id);
                resolve(producto);
            }, 0);
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [id]);
    return (
        <>
            <ItemDetail item = {item} />
        </>
    )
}

export default ItemDetailContainer;
