import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NavGuest from "./NavGuest";
import NavUser from "./NavUser";
import "./Header.css";
function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            Gradschool Hunt
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Universities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Top Universities in USA
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Top Universities in Canada
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Top Universities in UK
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <li className="nav-item">
                <NavLink to="/decisions" className="nav-link">
                  Decisions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link">
                  Test Prep
                </NavLink>
              </li>
            </Nav>
            {user ? <NavUser /> : <NavGuest />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
