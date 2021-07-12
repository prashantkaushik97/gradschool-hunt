import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function NavUser() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Nav>
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link">
          {user?.displayName}
        </NavLink>
      </li>
      <li className="nav-item">
        <button onClick={logoutOfApp}>Logout</button>
      </li>
    </Nav>
  );
}

export default NavUser;
