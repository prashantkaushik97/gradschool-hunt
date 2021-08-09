import React, { useState } from "react";
import { selectUser } from "../features/userSlice";
import { db, } from "../firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UpdateProfile.css";
import Header from "./Header";

function UpdateProfile() {
    const user = useSelector(selectUser);
    const history = useHistory();
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [country, setcountry] = useState()
    const addUser = (event) => {
        event.preventDefault();



        db.collection("users")
            .doc(user?.email)
            .set({
                profile: {
                    fName: fName,
                    lName: lName,
                    country: country
                }
            })
            .catch(function (error) {
                console.error("Error adding Pprofile ", error);
            });

        history.push("/updateAcademics")
    };
    return (


        <div>
            <Header />
            <div class="updateProfile__form">
                <form>
                    <div class="row">
                        <h4>Profile</h4>



                    </div>
                    <div class="row">
                        <div class="input-group input-group-icon"><input type="text" placeholder="First Name" onChange={(e) => setfName(e.target.value)} />
                            <div class="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                            </svg></div>
                        </div>
                        <div class="input-group input-group-icon"><input onChange={(e) => setlName(e.target.value)} type="text" placeholder="Last Name" />
                            <div class="input-icon"><i class="fa fa-user"></i></div>
                        </div>
                        <div class="input-group input-group-icon"><input onChange={(e) => setcountry(e.target.value)} type="text" placeholder="Country" />
                            <div class="input-icon"><i class="fa fa-user"></i></div>
                        </div>
                    </div>
                    <div class="row">
                        <h4>Terms and Conditions</h4>
                        <div class="input-group"><input id="terms" type="checkbox" /><label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
                    </div>

                    <button type="submit" onClick={addUser}>
                        Continue
                    </button>


                </form>
            </div>
        </div>
    );
}
export default UpdateProfile
