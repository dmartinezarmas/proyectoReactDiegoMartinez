import iconFB from "../assets/facebook.svg"
import iconIG from "../assets/instagram.svg"
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout (() => {
                resolve (id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos )
            }, 0)
        })
        promesa.then(data => {
            setItems(data)
        })
    }, [id])
    return(
        <div>
            <div>
                <ItemList items = {items}/>
            </div>
            <div className="container my-5 text-center">
                <a href="http://www.facebook.com/lonerahispano">
                    <img src={iconFB} alt="logo de facebook" width={40}/>
                </a>
                <a className="p-2" href="https://www.instagram.com/lonerahispanoargentina/">
                    <img src={iconIG} alt="logo de instagram" width={40} />
                </a>
            </div>
        </div>
    )
}
export default ItemListContainer;