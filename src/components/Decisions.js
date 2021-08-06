import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import Select from "react-select";

import "./style.css"

import { db, provider } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectUniversity } from "../features/universitySlice";

function Decisions({ uni }) {
  const user = useSelector(selectUser);
  const university = useSelector(selectUniversity)
  const [decision, setDecision] = useState("admitted")
  const [userProfile, setUserProfile] = useState([])
  const [userAcademics, setuserAcademics] = useState([])
  const [userMap, setUserMap] = useState({ fName: "", lName: "" });
  const [userObject, setuserObject] = useState([])

  const decisions = [
    { value: 'All', label: 'All' },
    { value: 'Admits', label: 'admitted' },
    { value: 'Rejects', label: 'rejected' }
  ]

  const [info, setInfo] = useState([]);

  const styles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0
      }
    })
  };

  const fetchApplications = () => {
    setuserObject([]);

    db.collection("universities")
      .doc(uni)
      .collection("decisions").where("status", "==", decision)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          let data = element.data();
          setInfo((arr) => [...arr, data]);
          console.log(data.user)
          db.collection("users").doc(data.user).get().then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              setuserObject((arr) => [...arr, doc.data()])
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
            //   console.log(querySnapshot)
            //   querySnapshot.forEach((element) => {
            // let user = {}
            //console.log(element.data())
            // user.email = data.user
            // let obj = element.data()
            // let arra = []
            // arra.push(element.data())

            // setuserObject((arr) => [...arr, arra])

            // });
          }).then(console.log("end"));

        });
      });
  };
  useEffect(() => {
    fetchApplications()
  }, [uni, decision])
  return (
    <div style={{ backgroundColor: "white" }}>
      {console.log(userObject)}
      <section className="probootstrap-section" >
        <Select placeholder={<div>Status</div>} options={decisions} onChange={(value) => {
          setDecision(value.label)
        }} styles={styles} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center section-heading">
              <h2>{decision} in  {uni}</h2>
            </div>
          </div>
          {/* END row */}
          {info.map((object, i) =>
            <div className="col-lg-5 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap ">

                <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto" ><img style={{ height: "100px" }} src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                  <div class="">
                    <h4>{userObject[i]?.profile?.fName}</h4>
                    <p class="text-muted">{userAcademics[i]?.greV} <span>| </span><span href="#" class="text-pink">websitename.com</span></p>
                  </div>
                  <ul class="social-links list-inline">
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                  </ul>
                  <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>2563</h4>
                          <p class="mb-0 text-muted">{ }</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>6952</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>6952</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>1125</h4>
                          <p class="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          )}

        </div>
      </section >
    </div>
  );
}
const Container = styled.div`
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      .percentage {
        font: 700;
  }
      .admit{
        color: red;
  }
      `;
const Logo = styled.div`
      margin: auto auto auto auto;
      padding: 10px 40px 10px 40px;

      max-width: 100%;
      display: flex;
      flex-direction: column;
      .hidden {
        visibility: hidden;
  }
      `;
const Info = styled.div`
      margin-right: auto;
      padding: 10px 10px 10px 10px;
      max-width: 100%;
      display: flex;
      .hidden {
        visibility: hidden;
  }
      `;
const GradScore = styled.div`
      max-width: 300px;
      display: flex;
      flex-direction: column;
      h3 {
        color: red;
  }
      .hidden {
        visibility: hidden;
  }
      `;


export default Decisions
