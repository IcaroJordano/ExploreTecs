import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div>

            <nav>
                <button className=""></button>
                <button type="button" className="btn btn-danger">Danger</button>
                <Link to={'/'}> Home </Link>
                <Link to={'/page2'}>Page 2</Link>
                <Link to={'/page3'}> Page 3 </Link>
            </nav>

            <div className="carousel-item">
                <img src="..." alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>aaaa</h5>
                        <p>aaa</p>
                    </div>
            </div>
        </div>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Link</a>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     Dropdown
        //                 </a>
        //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                     <a className="dropdown-item" href="#">Ação</a>
        //                     <a className="dropdown-item" href="#">Outra ação</a>
        //                     <div className="dropdown-divider"></div>
        //                     <a className="dropdown-item" href="#">Algo mais aqui</a>
        //                 </div>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#">Desativado</a>
        //             </li>
        //         </ul>
        //         <form className="form-inline my-2 my-lg-0">
        //             <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
        //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
        //         </form>
        //     </div>
        // </nav>
    )
}