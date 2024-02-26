import { useContext } from "react";
import iconPay from "../assets/credit-card.svg"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext)
    return(
        CantTotalProductos()>0 ? 
        <div className="d-flex justify-content-end p-2 my-5 container" >
                <img src={iconPay} width={40} alt="icono de tarjeta de credito"/>
                <Link to={"/cart"} className="btn btn-dark position-relative m-2">
                Pedidos
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {CantTotalProductos()}
                <span className=""> por pagar</span>
                </span>
                </Link>
        </div>
        : <p>""</p>

    )
}
export default CartWidget;