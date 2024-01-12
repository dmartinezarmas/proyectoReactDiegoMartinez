import CartWidget from "./CartWidget";
import logoLonera from "../assets/logoLonera.webp"

const NavBar = () => {
    return(
        <div>
            <div className="d-flex justify-content-center">
                <header>
                    <img src={logoLonera} width={100} alt="logo lonera hispano argentina" />
                </header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Lonera Hispano Argentina</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active text-secondary link-light" aria-current="page" href="#">INICIO</a>
                                <a className="nav-link text-secondary link-light" href="#">SOBRE NOSOTROS</a>
                                <a className="nav-link text-secondary link-light" href="#producto">PRODUCTOS</a>
                                <a className="nav-link text-secondary link-light" href="#confeccion">CONFECCION</a>
                                <a className="nav-link text-secondary link-light" href="#cotizaciones">COTIZACIONES</a>
                                <a className="nav-link text-secondary link-light" href="#contacto">CONTACTO</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <CartWidget/>
        </div>
    )
}
export default NavBar;