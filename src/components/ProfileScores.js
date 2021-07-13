import React from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
function ProfileScores() {
  return (
    <Container>
      <Info className="div1">
        <Logo>
          <SchoolIcon />
        </Logo>
        <GradScore>
          <h5>Undergrad</h5>
          <span>
            Computer Science and Engineering- Punjabi University, Patiala.
          </span>

          <h3>73%</h3>
        </GradScore>
      </Info>
      <Info className="div2">
        <Logo>
          <DescriptionIcon />
        </Logo>
        <Publications>
          <h5>Publications</h5>
          <span>Revamping </span>

          <h3>73%</h3>
        </Publications>
      </Info>
      <Info className="div3">
        <Logo>
          <DescriptionIcon />
        </Logo>
        <Publications>
          <h5>Publications</h5>
          <span>Revamping </span>

          <h3>73%</h3>
        </Publications>
      </Info>
      <Info className="div4">
        <Logo>
          <DescriptionIcon />
        </Logo>
        <Publications>
          <h5>Publications</h5>
          <span>Revamping</span>

          <h3>73%</h3>
        </Publications>
      </Info>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

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
  .hidden {
    visibility: hidden;
  }
  .percentage {
    font: 700;
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
  margin: auto auto auto auto;
  padding: 10px 10px 10px 10px;
  max-width: 500px;
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
const Publications = styled.div`
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

export default ProfileScores;
