import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/Search">Strive Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link className="text-dark font-weight-bold px-3" to="/Favourites">Favourites</Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>)
  }

  export default NavBar