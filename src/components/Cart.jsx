import { useContext } from "react";
import basura from "../assets/basura.png";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext)
    if (CantTotalProductos() == 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning" role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                {cart.map(producto =>
                                    <tr key={producto.id}>
                                        <td><img src={producto.image} alt={producto.title} width={200} /></td>
                                        <td>{producto.title}</td>
                                        <td>${producto.price}</td>
                                        <td>{producto.cantidad}</td>
                                        <td>${producto.cantidad * producto.price}</td>
                                        <td><a href="#" onClick={() => {removeItem(producto.id)}}><img src={basura} width={30} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4}>Suma Total</td>
                                    <td>${SumaTotalProductos()}</td>
                                    <td>&nbsp;</td>
                                    <td><p><b>Eliminar Carrito</b></p><a href="#" onClick={() => {clear()}}>
                                        <img src={basura} className="m-2" width={50} alt="Eliminar Carrito" title="Eliminar Carrito"  /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}
export default Cart;