import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../page/routes";

const NaviBar = () => {

    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex">
                <Navbar.Brand>
                    <Link to="/home">
                    Baliness
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav 
                    className="me-auto my-2 my-lg-0" 
                    style={{ maxHeight: '100px' }}>
                </Nav>
                <Nav>
                    <NavDropdown title="Wisata" id="basic-nav-dropdown">
                    <NavDropdown.Item>Nusa Penida</NavDropdown.Item>
                    <NavDropdown.Item>Ubud</NavDropdown.Item>
                    <NavDropdown.Item>Kuta</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kuliner" id="basic-nav-dropdown">
                    <NavDropdown.Item>Sate Lilit</NavDropdown.Item>
                    <NavDropdown.Item>Nasi Jinggo</NavDropdown.Item>
                    <NavDropdown.Item>Ayam Betutu</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NaviBar;