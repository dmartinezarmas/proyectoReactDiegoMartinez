const ItemDetail = () => {

    return (
        <>
            <h1>Item Detail</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={item.image} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <h1>{item.title}</h1>
                        <h4><b>{item.price}</b></h4>
                        <h4>{item.description}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;