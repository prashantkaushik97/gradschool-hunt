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
      .get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setInfo(doc.data())
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
      })
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
          <h5>{info?.academics?.english?.exam}</h5>
          <h6>Listening: {info?.academics?.english?.listeing}</h6>
          <h6>Reading: {info?.academics?.english?.reading}</h6>
          <h6>Writing: {info?.academics?.english?.writing}</h6>
          <h6>Speaking: {info?.academics?.english?.speaking}</h6>
        </GradScore>
      </Info>
      <Info className="publications">
        <Publications>
          <Logo>
            <DescriptionIcon />
          </Logo>
          <h5>GRE</h5>
          <h6>Quants: {info?.academics?.gre?.greQ}</h6>
          <h6>Verbal: {info?.academics?.gre?.greV}</h6>
          <h6>AWA: {info?.academics?.gre?.greAWA}</h6>
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
