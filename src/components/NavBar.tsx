import Logo from '../assets/logo.svg'

function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Real Estate Ai Planner" width="100" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/*<li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#blocs">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Compromissos</a>
                            </li>*/}
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Todos os produtos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" target='_blank' href="https://www.smartimobiliario.com.br/">RE.AI.s <i className="bi bi-arrow-right-circle"></i></a></li>
                                    <li><a className="dropdown-item" target='_blank' href="https://deixacommarta.com.br/">Marta Inteligência Imobliária <i className="bi bi-arrow-right-circle"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
