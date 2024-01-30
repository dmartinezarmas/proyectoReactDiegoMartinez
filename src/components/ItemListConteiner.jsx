import iconFB from "../assets/facebook.svg"
import iconIG from "../assets/instagram.svg"
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListConteiner = ({greeting}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout (() => {
                resolve (arrayProductos)
            }, 2000)
        })
        promesa.then(data => {
            setItems(data)
        })
    }, [])
    return(
        <div>
            <div>
                <ItemList items = {items}/>
                <ItemCount stock={10}/>
            </div>
            <div className="container my-5 text-center">
                <div className="alert alert-dark" role="alert">
                    <h1 className="display-6">
                    {greeting}
                    </h1>
                </div>
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
export default ItemListConteiner;