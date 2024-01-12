import iconFB from "../assets/facebook.svg"
import iconIG from "../assets/instagram.svg"
const ItemListConteiner = ({greeting}) => {
    return(
        <div className="container my-5 text-center">
            <div class="alert alert-dark" role="alert">
                <h1 className="display-6">
                {greeting}
                </h1>
            </div>
            <a href="http://www.facebook.com/lonerahispano">
                <img src={iconFB} alt="logo de facebook" width={40}/>
            </a>
            <a className="p-2" href="https://www.instagram.com/lonerahispanoargentina/">
                <img src={iconIG} alt="logo de instagram" width={40} />
            </a>
        </div>
    )
}
export default ItemListConteiner;