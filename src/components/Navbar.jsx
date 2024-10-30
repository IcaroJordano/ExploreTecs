import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        // < !--Imagem e texto-- >
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                    Bootstrap
            </a>
        </nav>
    );
}

export default Header;


