import Item from "./Item";

const ItemList = ({items}) => {

    return(
        <div className="container my-5">
            <div className="row">
                {items.map(producto => (
                    <Item key={producto.id} item={producto} />               
                    ))}
            </div>
        </div>
    )
}