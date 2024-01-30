import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const incrementar = () => {
        if (counter <= itemStock) {
            setCounter(counter + 1)
        }
    }
    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter -1)
        }
    }
    const onAdd = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter)
        }
    }
    return(
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary">+</button>
            </div>
            <div>
                <button type="button" class="btn btn-dark">Dark</button>
            </div>
        </>
    )
}
export default ItemCount;