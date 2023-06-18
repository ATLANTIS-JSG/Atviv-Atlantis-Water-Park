import './style.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Navbar_() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar className='nav' variant="dark" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand onClick={() => navigate("/")} className="logo"><strong>ATLANTIS</strong> </Navbar.Brand>
                    </div>
                    <ul className="nav-links">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Cliente" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar/clientes")}>Cadastrar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/alocar")}>Hospedar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/desalocar")}>Desalocar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/clientes")}>Administrar</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Acomodação" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar/acomodacoes")}>Cadastrar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/acomodacoes")}>Listar</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </ul>
                </Container>
            </Navbar>
        </>
    );
}
export default Navbar_;