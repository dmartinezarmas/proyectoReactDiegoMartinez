import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logoLonera from "../assets/logoLonera.webp"

const NavBar = () => {
    return(
        <div>
            <div className="d-flex justify-content-center">
                <div>
                    <img src={logoLonera} width={100} alt="logo lonera hispano argentina" />
                </div>
                <div className="col-md-10 bg-dark">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/"}>Lonera Hispano Argentina</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary link-light" to={"/category/vinílica"}>LONAS VINÍLICAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary link-light" to={"/category/algodón"}>LONAS DE ALGODÓN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary link-light" to={"/category/mediasombra"}>MEDIAS SOMBRAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary link-light" to={"/category/sintética"}>LONAS SINTÉTICAS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </div>
    )
}
export default NavBar;