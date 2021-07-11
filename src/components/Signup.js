import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import Header from "./Header";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const signUp = (e) => {
    e.preventDefault();
    if (!fName) {
      return alert("Please enter first name");
    }
    if (!lName) {
      return alert("Please enter last name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: fName,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fName,
            })
          );
          history.push("/updateProfile");
        })
        .catch((error) => alert(error.message));
    });
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
    history.push("/updateProfile");
  };
  return (
    <div className="signup">
      <Header />
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signUp}>
            Create Account
          </button>
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>

        <button onClick={googleSignUp}>Continue with Google</button>
      </div>
    </div>
  );
}

export default Signup;
