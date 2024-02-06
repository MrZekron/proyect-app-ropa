function Navar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Style Root</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mujeres
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ropa superior</a></li>
                                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                                    <li><a className="dropdown-item" href="#">Ropa interior</a></li>
                                    <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hombres
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ropa superior</a></li>
                                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                                    <li><a className="dropdown-item" href="#">Ropa interior</a></li>
                                    <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Infantes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ropa superior</a></li>
                                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                                    <li><a className="dropdown-item" href="#">Ropa interior</a></li>
                                    <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Iniciar sesion</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Busqueda</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navar