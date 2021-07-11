import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavGuest() {
  return (
    <Nav>
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link">
          Sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">
          Sign up
        </NavLink>
      </li>
    </Nav>
  );
}

export default NavGuest;
