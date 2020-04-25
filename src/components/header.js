import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.home}>
              Home
            </NavLink>
            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.cart}>
              Cart
            </NavLink>
            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.checkout}>
              Checkout
            </NavLink>
          </Nav>
          <Nav>
          <NavLink
            to={routes.signUp}
            className={"nav-link"}
            activeClassName={"active"}
            size="sm"
            variant="light">
            SignUp
          </NavLink>
          <NavLink 
          to={routes.login}
          className={"nav-link"}
          activeClassName={"active"}
          size="sm"
          variant="light">
            Login
          </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
