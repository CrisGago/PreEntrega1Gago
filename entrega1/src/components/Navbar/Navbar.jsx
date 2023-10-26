import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiCartDownload } from "react-icons/bi";
import "../Navbar/navbar.css";
import "../CartWidget/cartwidget.css"; 

const NavBar = ({ links }) => {

    return (
        <>

            <Navbar expand="lg" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#home">ZONEPARTS eCOMMERCE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Carrito</Nav.Link>
                            <NavDropdown title="Parts" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Ram</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Procesador
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Fuente</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Gamer
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <BiCartDownload style={{ fontSize: '2em' }} />
                                <p style={{ fontWeight: 'bold' }}>0</p> 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;


