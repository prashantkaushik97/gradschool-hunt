import React from "react";
import styled from "styled-components";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
function ProfileAcademics() {
  return (
    <Container>
      <GradScore>
        <Logo>
          <AccountBalanceIcon />
        </Logo>
        <Info>
          <span>Undergrad</span>
          <span>Punjabi University, Patiala</span>
          <h4>73%</h4>
        </Info>
      </GradScore>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 10px;
  padding: 10px 40px 10px 40px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  .hidden {
    visibility: hidden;
  }
  .percentage {
    font: 700;
  }
`;
const Logo = styled.div`
  padding: 10px 10px 10px 10px;
  margin: auto auto auto auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  .hidden {
    visibility: hidden;
  }
`;
const Info = styled.div`
  padding: 10px 10px 10px 10px;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  .hidden {
    visibility: hidden;
  }
`;
const GradScore = styled.div`
  margin-top: 10px;
  padding: 10px 10px 10px 10px;
  max-width: 100%;
  border: black 1px solid;
  display: flex;
  justify-content: space-between;
  .hidden {
    visibility: hidden;
  }
`;
export default ProfileAcademics;
