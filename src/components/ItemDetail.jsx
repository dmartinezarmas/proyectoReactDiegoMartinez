import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <img src={item.image} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <h1>{item.title}</h1>
                        <h4><b>${item.price}</b></h4>
                        <h4 className="fs-5">{item.description}</h4>
                        <div className="my-5">
                            <ItemCount stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;