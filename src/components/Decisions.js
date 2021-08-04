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
    setInfo([]);

    db.collection("universities")
      .doc(uni)
      .collection("decisions").where("status", "==", decision)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          let data = element.data();
          setInfo((arr) => [...arr, data]);
          console.log(data.user)
          db.collection("users").doc(data.user).collection("profile").get().then((querySnapshot) => {
            querySnapshot.forEach((element) => {
              let user = element.data();
              console.log(user)
              setUserProfile((arr) => [...arr, user]);
            });
          });
          db.collection("users").doc(data.user).collection("academics").get().then((querySnapshot) => {
            querySnapshot.forEach((element) => {
              let user = element.data();
              console.log(user)
              setuserAcademics((arr) => [...arr, user]);
            });
          });
        });
      });
  };
  useEffect(() => {
    fetchApplications()
  }, [uni, decision])
  return (
    <div className="profileApplications">
      <Select placeholder={<div>Status</div>} options={decisions} onChange={(value) => {
        setDecision(value.label)
      }} styles={styles} />

      <Container>
        {info.map((object, i) => <Info >
          <Logo>
            <SchoolIcon />
          </Logo>
          <GradScore>
            {userProfile[i]?.fName}
            <h5>{object.university}</h5>
            <span>
              {object.course}
            </span>
            <div className='admitted'><span>{object.status}</span></div>


          </GradScore>
        </Info>)}


      </Container>
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
