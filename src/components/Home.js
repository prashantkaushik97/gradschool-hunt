import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";


function Home() {
  const [university, setUniversity] = useState(null);
  function onChangeInput(value) {
  }
  return (
    <Layout>
      <Jumbotron className="text-center">
        <UniversitySearch onChange={(value) => {
          setUniversity(value.label)
        }} label="Choose a university"></UniversitySearch>
        <button onClick={()=>console.log(university)}>Pressme</button>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
