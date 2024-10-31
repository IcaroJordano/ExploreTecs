import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (
        <header className=' w-full bg-black overflow-visible z-50 fixed top-0'>
            <div className='h-8 flex justify-center text-white'> Lorem ipsum dolor sit amet consectetur </div>
            <div className=' justify-between flex w-full items-center '>
                <Navbar expand="sm"  className="h-20 text-white z-50">
                    <Container className=' text-white'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-black ' />
                        <Navbar.Collapse id="basic-navbar-nav" className='visible bg-black text-white'>
                            <Nav className="me-auto bg-black text-white">
                                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                                <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" className='text-white' id="basic-nav-dropdown">
                                    <NavDropdown.Item className='text-white' href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item className='text-white' href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item >
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <div className='w-3/12 h-full items-center justify-around flex '>
                    <button className='border rounded-full h-10 w-10 '>1</button>
                    <button className='border rounded-full h-10 w-10 '>2</button>
                </div>
            </div>

        </header>
    );
}

export default Header;


