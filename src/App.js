import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import UpdateProfile from "./components/UpdateProfile";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          {user ? <Home /> : <Signup />}
        </Route>
        <Route exact path="/signin">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/updateProfile">
        <Header />

          <UpdateProfile />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
