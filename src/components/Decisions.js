import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";

import "./style.css"

import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Decisions({ uni }) {
  const [userEmail, setuserEmail] = useState([])
  const [decision, setDecision] = useState("admitted")
  let history = useHistory();
  const [userObject, setuserObject] = useState([])
  const view = (e, i) => {
    e.preventDefault()
    console.log(i)
    history.push({
      pathname: '/viewprofile',
      state: { email: userEmail[i] }
    });
  }
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
    setuserEmail([])
    setInfo([])
    db.collection("universities")
      .doc(uni)
      .collection("decisions").where("status", "==", decision)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          let data = element.data();
          setInfo((arr) => [...arr, data]);
          setuserEmail((arr) => [...arr, data.user])
          db.collection("users").doc(data.user).get().then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              setuserObject((arr) => [...arr, doc.data()])

            } else {
              console.log("No such document!");
            }

          }).then(console.log(info));

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
          {userObject.map((object, i) =>
            <div className="col-lg-6 col-sm-6">
              <div className="probootstrap-teacher text-center probootstrap ">

                <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto" ><img style={{ height: "100px" }} src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                  <div class="">
                    <h4>{userObject[i]?.profile?.fName}</h4>
                    <p class="text-muted">{info[i].course} <span>| </span><span href="#" class="text-pink">{info[i].status}</span></p>
                  </div>
                  <ul class="social-links list-inline">
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                  </ul>
                  <button onClick={(e) => { view(e, i) }} type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>GRE</h4>
                          <p class="mb-0 text-muted">{parseInt(userObject[i]?.academics?.gre?.greV) + parseInt(userObject[i]?.academics?.gre?.greQ)}</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>IELTS</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>UG</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="mt-3">
                          <h4>Publications</h4>
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
