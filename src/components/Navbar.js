import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NaviBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex">
                <Navbar.Brand href="#home">Baliness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav 
                    className="me-auto my-2 my-lg-0" 
                    style={{ maxHeight: '100px' }}>
                </Nav>
                <Nav>
                    <NavDropdown title="Wisata" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Nusa Penida</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Ubud</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Kuta</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kuliner" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sate Lilit</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Nasi Jinggo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ayam Betutu</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NaviBar;