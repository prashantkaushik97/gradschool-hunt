import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './ViewProfile.css'
import { db } from "../firebase";

function ViewProfile() {
    const [info, setInfo] = useState([]);
    const [userObject, setuserObject] = useState([])

    const location = useLocation();
    const fetchApplications = () => {
        setInfo([]);
        db.collection("users")
            .doc(location?.state?.email)
            .collection("Applications")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((element) => {
                    var data = element.data();
                    setInfo((arr) => [...arr, data]);
                });
            });
        db.collection("users").doc(location?.state?.email).get().then((doc) => {
            setuserObject([])
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setuserObject((arr) => [...arr, doc.data()])

            } else {
                console.log("No such document!");
            }

        })
    };
    useEffect(() => {
        fetchApplications()

    }, [])
    return (
        <div className="viewprofile">
            {console.log(userObject)}
            {console.log(info)}
            <div className="container bootstrap snippets bootdey">
                <div className="row">
                    <div className="profile-nav col-md-3">
                        <div className="panel">
                            <div className="user-heading round">
                                <a href="#">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </a>
                                <h1>{userObject[0]?.profile?.fName} {userObject[0]?.profile?.lName}</h1>
                                <p>deydey@theEmail.com</p>
                            </div>
                            <ul className="nav nav-pills nav-stacked">
                                <li className="active"><a href="#"> <i className="fa fa-user" /> Profile</a></li>
                                <li><a href="#"> <i className="fa fa-calendar" /> Recent Activity </a></li>
                                <li><a href="#"> <i className="fa fa-edit" /> Edit profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-info col-md-9">

                        <div className="panel">

                            <div className="panel-body bio-graph-info">
                                <h1>Bio Graph</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>First Name </span>: Camila</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Last Name </span>: Smith</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Country </span>: Australia</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Birthday</span>: 13 July 1983</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Occupation </span>: UI Designer</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Email </span>: jsmith@flatlab.com</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Mobile </span>: (12) 03 4567890</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Phone </span>: 88 (02) 123456</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                {info.map((object, i) => (
                                    <div className="col-md-6">
                                        <div className="panel">

                                            <div className="panel-body">
                                                <span className="viewProfile__status">                                                {object.status}
                                                </span>


                                                <div className="bio-desk">
                                                    <h4 className="red">{object.university}</h4>
                                                    <span>{object.course}</span><br />
                                                    <span>{object.session} {object.year}</span><br />
                                                    <span>Deadline : 15 August</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile
