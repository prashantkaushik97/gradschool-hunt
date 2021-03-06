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
import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";
import UpdateExperience from "./components/UpdateExperience";
import SearchDecisions from "./components/SearchDecisions";
import Decisions from "./components/Decisions";
import UpdateAcademics from "./components/UpdateAcademics";
import UpdateProfile from "./components/UpdateProfile";
import Home2 from "./components/Home2";
import ViewProfile from "./components/ViewProfile";
import Article from "./components/Article_sop";
import Article_sop from "./components/Article_sop";
import Article_shortlisting from "./components/Articles/Article_shortlisting";
import Article_topCountries from "./components/Articles/Article_topCountries";

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

          <Home2 />
        </Route>

        <Route exact path="/viewProfile">
          <Header />

          <ViewProfile />
        </Route>
        <Route exact path="/decisions">

          <SearchDecisions />

        </Route>

        <Route exact path="/updateprofile">
          <Header />
          <UpdateProfile />
        </Route>
        <Route exact path="/updateexperience">
          <Header />

          <UpdateExperience />
        </Route>
        <Route exact path="/signup">
          {user ? <Redirect to='/' /> : <Signup />}
        </Route>
        <Route exact path="/signin">
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route exact path="/updateAcademics">
          <Header />

          <UpdateAcademics />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/article_sop">
          <Header />
          <Article_sop />
        </Route>
        <Route exact path="/article_shortlisting">
          <Header />
          <Article_shortlisting />
        </Route>
        <Route exact path="/article_topCountries">
          <Header />
          <Article_topCountries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
