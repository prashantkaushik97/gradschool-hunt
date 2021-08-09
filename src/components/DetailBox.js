import React, { useState } from "react";
import styled from "styled-components";

import "./DetailBox.css";
import ProfileAcademics from "./ProfileAcademics";
import ProfileAdmits from "./ProfileAdmits";
import ProfileApplications from "./ProfileApplications";
import ProfileRejects from "./ProfileRejects";
import ProfileScores from "./ProfileScores";
function DetailBox() {
  const [isAcademics, setAcademics] = useState(true);
  const [isScores, setScores] = useState(false);
  const [isApplications, setApplications] = useState(false);
  const [isAdmits, setAdmits] = useState(false);
  const [isRejects, setRejects] = useState(false);
  function handleToggle(type) {
    if (type == "academics") {
      setAcademics(true);
      setScores(false);
      setApplications(false);
      setAdmits(false);
      setRejects(false);
    } else if (type == "scores") {
      setAcademics(false);
      setScores(true);
      setApplications(false);
      setAdmits(false);
      setRejects(false);
    } else if (type == "applications") {
      setAcademics(false);
      setScores(false);
      setApplications(true);
      setAdmits(false);
      setRejects(false);
    } else if (type == "admits") {
      setAcademics(false);
      setScores(false);
      setApplications(false);
      setAdmits(true);
      setRejects(false);
    } else if (type == "rejects") {
      setAcademics(false);
      setScores(false);
      setApplications(false);
      setAdmits(false);
      setRejects(true);
    }
  }
  let section;

  if (isAdmits) {
    section = <ProfileAdmits />;
  } else if (isApplications) {
    section = <ProfileApplications />;
  } else if (isRejects) {
    section = <ProfileRejects />;
  } else if (isScores) {
    section = <ProfileScores />;
  } else {
    section = <ProfileAcademics />;
  }
  return (
    <Container>
      <Navigator>
        <div
          className={isAcademics ? "active" : null}
          onClick={() => handleToggle("academics")}
        >
          Academics
        </div>
        <div
          className={isScores ? "active" : null}
          onClick={() => handleToggle("scores")}
        >
          Scores
        </div>
        <div
          className={isApplications ? "active" : null}
          onClick={() => handleToggle("applications")}
        >
          Applications
        </div>
        <div
          className={isAdmits ? "active" : null}
          onClick={() => handleToggle("admits")}
        >
          Admits
        </div>
        <div
          className={isRejects ? "active" : null}
          onClick={() => handleToggle("rejects")}
        >
          Rejects
        </div>
      </Navigator>
      {section}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 5px;
  padding-top: 5px;

  width: 900px;
  @media screen and (max-width: 677px) {
    width: 500px;
  }
  @media screen and (max-width: 477px) {
    width: 300px;
  }
  .hidden {
    visibility: hidden;
  }
`;
const Navigator = styled.div`
  display: flex;

  @media screen and (max-width: 477px) {
    width: 300px;
    div {
      padding: 10px 40px 10px 40px;
      :hover {
        background-color: red;
      }
    }
  }
  div {
    margin-left: auto;
    margin-right: auto;
    padding: 10px 40px 10px 40px;
    :hover {
      background-color: lightgray;
    }
  }
  .active {
    border-bottom: 2px solid black;
  }
`;
const Academics = styled.section`
  width: 100%;
`;
const Scores = styled.section`
  width: 100%;
`;
export default DetailBox;
