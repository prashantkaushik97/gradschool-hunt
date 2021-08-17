import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './ViewProfile.css'
import { db } from "../firebase";

function ViewProfile() {
    const [info, setInfo] = useState([]);
    const [userObject, setuserObject] = useState([])
    const [EngScore, setEngScore] = useState(null)
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
            }).then(() => {

            });
        db.collection("users").doc(location?.state?.email).get().then((doc) => {
            setuserObject([])
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setuserObject((arr) => [...arr, doc.data()])
                if (userObject[0]?.academics?.english.exam == "IELTS") {
                    let score = parseInt(userObject[0]?.academics?.english.listening) + parseInt(userObject[0]?.academics?.english.reading) + parseInt(userObject[0]?.academics?.english.writing) + parseInt(userObject[0]?.academics?.english.speaking)
                    setEngScore(Math.round(score / 4))

                }
                else {
                    let score = parseInt(userObject[0]?.academics?.english.listening) + parseInt(userObject[0]?.academics?.english.reading) + parseInt(userObject[0]?.academics?.english.writing) + parseInt(userObject[0]?.academics?.english.speaking)
                    setEngScore(Math.round(score))

                }
            } else {
                console.log("No such document!");
            }

        })

    };
    useEffect(() => {
        fetchApplications()


    }, [EngScore])
    return (
        <div className="viewprofile">
            {console.log(EngScore)}
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
                                <li><a href="#"> <i className="fa fa-calendar" /> Activity </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-info col-md-9">

                        <div className="panel">

                            <div className="panel-body bio-graph-info">
                                <h1>Profile</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>GRE </span>: {parseInt(userObject[0]?.academics?.gre.greV) + parseInt(userObject[0]?.academics?.gre.greQ)} - Q{userObject[0]?.academics?.gre.greQ} V{userObject[0]?.academics?.gre.greV} AWA{userObject[0]?.academics?.gre.greAWA}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>{userObject[0]?.academics?.english.exam} </span>: Overall {EngScore} - L:{userObject[0]?.academics?.english.listening} R:{userObject[0]?.academics?.english.reading} W:{userObject[0]?.academics?.english.writing} S:{userObject[0]?.academics?.english.speaking}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Graduation </span>: {userObject[0]?.academics?.undergrad.institute}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Stream</span>: {userObject[0]?.academics?.undergrad.stream}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span> </span>: UI Designer</p>
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
