import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import useUserProvider from "../store/UserProvider/useUserProvider";

const Header = () => {
  const { isUserLoggedIn } = useUserProvider();

  const logout = () => {
    window.localStorage.removeItem("jwtToken");
    window.localStorage.removeItem("email");
    window.location.reload();
  };

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
              to={routes.home}
            >
              Home
            </NavLink>
            {isUserLoggedIn ? (
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.cart}
              >
                Cart
              </NavLink>
            ) : null}
            {isUserLoggedIn ? (
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.checkout}
              >
                Checkout
              </NavLink>
            ) : null}
          </Nav>
          <Nav>
            {isUserLoggedIn ? (
              <NavLink
                to={routes.userProfile}
                className={"nav-link"}
                activeClassName={"active"}
                size="sm"
                variant="light"
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to={routes.signUp}
                className={"nav-link"}
                activeClassName={"active"}
                size="sm"
                variant="light"
              >
                SignUp
              </NavLink>
            )}
            {isUserLoggedIn ? (
              <Button
                onClick={logout}
                variant="dark"
                activeClassName={"active"}
              >
                Logout
              </Button>
            ) : (
              <NavLink
                to={routes.login}
                className={"nav-link"}
                activeClassName={"active"}
                size="sm"
                variant="light"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
