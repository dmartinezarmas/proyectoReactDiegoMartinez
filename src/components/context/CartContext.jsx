import { createContext, useState } from "react";


export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let index = cart.findIndex(producto => producto.id === id)
            cart[index].cantidad += cantidad
            setCart([...cart])
        }
        else {
            setCart([...cart, {...item, cantidad: cantidad}])
        }
    }   
    const removeItem = (id) => {
        const items = cart.filter(producto => producto.id != id)
        setCart([...items])
    }
    const clear = () => {
        setCart([])
    }
    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    }
    const CantTotalProductos = () => {
        return cart.reduce((acum, producto) => acum += producto.cantidad, 0);
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acum, producto) => acum += producto.cantidad * producto.price, 0);
    }
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos}}>
        {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider