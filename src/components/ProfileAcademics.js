import React from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
function ProfileAcademics() {
  return (
    <Container>
      <Info className="gradScore">
        <GradScore>
          <Logo>
            <SchoolIcon />
          </Logo>
          <h4>Undergrad</h4>
          <h6>73%</h6>

          <span>
            Computer Science and Engineering- Punjabi University, Patiala.
          </span>
        </GradScore>
      </Info>
      <Info className="publications">
        <Publications>
          <Logo>
            <DescriptionIcon />
          </Logo>
          <h5>Publications</h5>

          <PublicationContainer>
            <Conferences>
              <h6>Conferences: 1</h6>
            </Conferences>
            <Journals>
              <h6>Journals: 2 </h6>
            </Journals>
          </PublicationContainer>
        </Publications>
      </Info>
      <Info className="experience">
        <Experience>
          <Logo>
            <WorkIcon />
          </Logo>
          <h5>Experience</h5>
          <span>System Engineer</span>
          <span>System Engineer</span>
        </Experience>
      </Info>
      <Info className="projects">
        <Publications>
          <Logo>
            <BuildIcon />
          </Logo>
          <h5>Projects</h5>
          <span>Revamping Supermarkets with AI and RSSi</span>
        </Publications>
      </Info>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  h4 {
    margin-left: auto;
    margin-right: auto;
  }
  h5 {
    margin-left: auto;
    margin-right: auto;
    color: green;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .experience {
  }
  .publications {
    margin: 0 0 0 0;
  }
  .hidden {
    visibility: hidden;
  }
  .percentage {
    font: 700;
  }
`;
const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 10px 40px 10px 40px;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  .hidden {
    visibility: hidden;
  }
`;
const Info = styled.div`
  padding: 10px 10px 10px 10px;
  max-width: 500px;
  display: flex;
  .hidden {
    visibility: hidden;
  }
`;
const GradScore = styled.div`
  margin-left: auto;
  margin-right: auto;
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
const Publications = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    color: red;
  }
  .hidden {
    visibility: hidden;
  }
`;
const Experience = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    color: red;
  }
  .hidden {
    visibility: hidden;
  }
`;
const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    padding: 0px 10px 0px 10px;
  }
`;
const Conferences = styled.div`
  display: flex;
`;
const Journals = styled.div`
  display: flex;
`;
export default ProfileAcademics;
