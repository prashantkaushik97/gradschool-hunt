import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";

import "./style.css"

import { db, provider } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function ProfileRejects() {
  const user = useSelector(selectUser);

  const [Click, setClick] = useState(true)
  const handleClick = () => {
    setClick(!Click)
  };

  const [info, setInfo] = useState([]);




  const fetchApplications = () => {
    setInfo([]);
    db.collection("users")
      .doc(user?.email)
      .collection("Applications").where("status", "==", "Rejected")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);

        });
      });
  };
  useEffect(() => {
    fetchApplications()
  }, [])
  return (
    <div className="profileApplications">


      <Container>
        {info.map((object, i) => <Info >
          <Logo>
            <SchoolIcon />
          </Logo>
          <GradScore>
            <h5>{object.university}</h5>
            <span>
              {object.course}
            </span>
            <div className='admitted'><span>Rejected</span></div>


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

export default ProfileRejects;
