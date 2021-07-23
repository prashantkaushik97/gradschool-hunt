import React, { useState } from "react";
import { logout, selectUser } from "../features/userSlice";
import { db, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./UpdateProfile.css";
import Header from "./Header";
function UpdateExperience() {
    const user = useSelector(selectUser);
    const history = useHistory();
    const [experience, setExperience] = useState([]);
    const [employer, setEmployer] = useState("");
    const [designation, setDesignation] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [employer1, setEmployer1] = useState("");
    const [designation1, setDesignation1] = useState("");
    const [start1, setStart1] = useState("");
    const [end1, setEnd1] = useState("");
    const [employer2, setEmployer2] = useState("");
    const [designation2, setDesignation2] = useState("");
    const [start2, setStart2] = useState("");
    const [end2, setEnd2] = useState("");
    const [employer3, setEmployer3] = useState("");
    const [designation3, setDesignation3] = useState("");
    const [start3, setStart3] = useState("");
    const [end3, setEnd3] = useState("");
    const [employer4, setEmployer4] = useState("");
    const [designation4, setDesignation4] = useState("");
    const [start4, setStart4] = useState("");
    const [end4, setEnd4] = useState("");
    const addMore = (event) => {
        event.preventDefault();
        let exp = {}
        exp.name = employer
        exp.designation = designation
        exp.start = start
        exp.end = end
        setExperience(arr => [...arr, exp])
        console.log(experience)
    }
    const addUser = (event) => {
        event.preventDefault();
        if (experience.length == 0) {
            if (employer.length != 0) {
                console.log("working", employer)
                db.collection("users")
                    .doc(user?.email)
                    .collection("experience")
                    .doc(employer)
                    .set({
                        designation: designation,
                        startDate: start,
                        endDate: end
                    })
                    .catch(function (error) {
                        console.error("Error adding Product: ", error);
                    });
            }
            else {
                console.log("jobless")
            }
        }
        else {
            experience.forEach(function (arrayItem) {
                var x = arrayItem;
                console.log(x);
                db.collection("users")
                    .doc(user?.email)
                    .collection("experience")
                    .doc(x.employer)
                    .set({
                        designation: x.designation,
                        startDate: x.start,
                        endDate: x.end
                    })
                    .catch(function (error) {
                        console.error("Error adding Product: ", error);
                    });
            });
        }
    };
    return (
        <div>
            <div class="updateProfile__form">
                <form>
                    <div class="row">
                        <h4>Work Experience</h4>
                        <div class="input-group input-group-icon"><input type="text" placeholder="Employer Name" onChange={(e) => setEmployer(e.target.value)} />
                            <div class="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                            </svg></div>
                        </div>
                        <div class="input-group input-group-icon"><input onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Designation" />
                            <div class="input-icon"><i class="fa fa-user"></i></div>
                        </div>
                        <div class="col-half">
                            <div class="input-group">
                                <span>Start date</span>
                                <input type="date" value="startDate" onChange={(e) => setStart(e.target.value)}></input>
                            </div>
                        </div>
                        <div class="col-half">
                            <div class="input-group">
                                <span>End date</span>
                                <input onChange={(e) => setEnd(e.target.value)} type="date" value="endDate"></input>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <h4>Terms and Conditions</h4>
                        <div class="input-group"><input id="terms" type="checkbox" /><label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
                    </div>
                    <button type="submit" onClick={addMore}>
                        Add more
                    </button>
                    <button type="submit" onClick={addUser}>
                        Continue
                    </button>

                    <Link to="/profile">Skip</Link>

                </form>
            </div>
        </div>
    );
}

export default UpdateExperience;
