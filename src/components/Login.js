import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { LanguageOutlined } from "@material-ui/icons";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import Header from "./Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/profile");
      })
      .catch((error) => alert(error.message));
  };
  const googleSignUp = (e) => {
    e.preventDefault();
    console.log("TRYING MY BEST BRO");

    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(login(payload.user));
        console.log(payload.user);
      })
      .catch((error) => alert(error.message));
    history.push("/");
  };
  return (
    <div className="login">
      <Header />

      <div className="login__info">
        <h1>Sign In</h1>

        <form className="login__form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" onClick={signIn}>
            Login
          </button>
        </form>
        <div className="login__divider">
          <hr />
          <span>OR </span>
          <hr />
        </div>
        <Link to="/signup">
          <button onClick={googleSignUp}>Continue with Google</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
