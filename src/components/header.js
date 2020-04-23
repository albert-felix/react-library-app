import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const Header = () => {
  return (
    <div className="container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={routes.home}>Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Checkout</Nav.Link>
          </Nav>
          <Button variant="link">SignUp</Button>
          <Button variant="link">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
