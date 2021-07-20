import React, { useState } from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db, provider } from "../firebase";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
function ProfileScores() {
  const user = useSelector(selectUser);
  const [greQ, setGreQ] = useState("");
  const [greV, setGreV] = useState("");
  const [greAWA, setGreAWA] = useState("");
  const [listeingI, setListeningI] = useState("");
  const [readingI, setReadingI] = useState("");
  const [speakingI, setSpeakingI] = useState("");
  const [writingI, setWritingI] = useState("");
  const [listeningT, setListeningT] = useState("");
  const [readingT, setReadingT] = useState("");
  const [speakingT, setSpeakingT] = useState("");
  const [writingT, setWritingT] = useState("");
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchScores = async () => {
    setInfo([]);
    db.collection("users")
      .doc(user?.email)
      .collection("academics")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();

          setInfo((arr) => [...arr, data]);
        });
      });
  };
  useEffect(() => {
    fetchScores();
  }, []);
  return (
    <Container>
      {console.log(info)}
      <Info className="gradScore">
        <GradScore>
          <Logo>
            <SchoolIcon />
          </Logo>
          <h5>IELTS</h5>
          <h6>Listening: {info[1]?.listeingI}</h6>
          <h6>Reading: {info[1]?.readingI}</h6>
          <h6>Writing: {info[1]?.writingI}</h6>
          <h6>Speaking: {info[1]?.speakingI}</h6>
        </GradScore>
      </Info>
      <Info className="publications">
        <Publications>
          <Logo>
            <DescriptionIcon />
          </Logo>
          <h5>GRE</h5>
          <h6>Quants: {info[0]?.greQ}</h6>
          <h6>Verbal: {info[0]?.greV}</h6>
          <h6>AWA: {info[0]?.greAWA}</h6>
        </Publications>
      </Info>
      <Info className="experience">
        <Experience>
          <Logo>
            <WorkIcon />
          </Logo>
          <h5>TOEFL</h5>
          <h6>Total: 11 months</h6>

          <h6>Listening: {info[2]?.listeingT}</h6>
          <h6>Reading: {info[2]?.readingT}</h6>
          <h6>Writing: {info[2]?.writingT}</h6>
          <h6>Speaking: {info[2]?.speakingT}</h6>
        </Experience>
      </Info>
      <Info className="projects">
        <Publications>
          <Logo>
            <BuildIcon />
          </Logo>
          <h5>Projects</h5>
          <h6>Total: 6</h6>

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
  cursor: default;
  h4 {
    margin-left: auto;
    margin-right: auto;
  }
  h5 {
    margin-left: auto;
    margin-right: auto;
    color: green;
  }
  h6 {
    margin-left: auto;
    margin-right: auto;
  }
  .experience {
  }
  .publications {
    margin: 0 0 0 0;
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
  span {
    text-align: center;
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

export default ProfileScores;
