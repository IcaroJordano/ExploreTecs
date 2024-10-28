// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
    <nav class="navbar   ">
        <a class="navbar-brand" href="#">Navbaraaaaa</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"  aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">
                <li class="nav-item ">
                    <a class="nav-link" href="#">Home <span class="sr-only">Página atual</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Destaques</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Preços</a>
                </li>
                <li class="nav-item">
                    <a class="" href="#">Desativado</a>
                </li>
            </ul>
        </div>
    </nav>);
}

export default NavScrollExample;