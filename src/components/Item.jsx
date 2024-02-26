import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 card border-0">
            <Link to={"/item/"+ item.id} className="text-dark text-center">
                <img src={item.image} className="p-3" height={250} alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                </div>
            </Link>
        </div>
    )
}
export default Item;