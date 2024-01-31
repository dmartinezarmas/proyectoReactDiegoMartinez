import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0)
    const [itemStock, setItemStock] = useState(stock)
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
    const addOn = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter)
            setCounter(0)
        }
    }
    return(
        <div className="text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-light">{counter}</button>
                <button type="button" className="btn btn-secondary" onClick={incrementar}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-dark" onClick={addOn}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;