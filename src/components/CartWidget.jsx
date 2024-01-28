import iconPay from "../assets/credit-card.svg"

const CartWidget = () => {
    return(
        <div className="d-flex justify-content-end p-2 my-5 container" >
           <img src={iconPay} width={40} alt="icono de tarjeta de credito"/>
           <button type="button" className="btn btn-dark position-relative m-2">
            Pedidos
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                0
                <span className=""> por pagar</span>
            </span>
            </button>
        </div>
    )
}
export default CartWidget;