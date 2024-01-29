import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == 1);
                resolve(producto);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
            console.log(data)
        })
    }, []);
    return (
        <>
            <h1>Item Detail Container</h1>
            <ItemDetail item = {item} />
        </>
    )
}

export default ItemDetailContainer;
