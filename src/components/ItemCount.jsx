import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(0)
    const [itemStock, setItemStock] = useState(stock)
    const [itemAgregado, setItemAgregado] = useState(false)

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }
    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter -1)
        }
    }
    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(0);
            onAdd(counter);
            setItemAgregado(true);
        }
    }
    useEffect(() => {
        setItemStock(stock)
    },[stock])
    return(
        <div className="text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-light">{counter}</button>
                <button type="button" className="btn btn-dark" onClick={incrementar}>+</button>
            </div>
            <div>
                {itemAgregado ? <Link to={"/cart"} className="btn btn-success">Finalizar Mi Compra</Link> : <button type="button" className="btn btn-primary" onClick={addToCart}>Agregar al Carrito</button>}            
            </div>
        </div>
    )
}
export default ItemCount;