import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

function NavBar(props) {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Strive Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Favourites</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>)
  }

  export default NavBar