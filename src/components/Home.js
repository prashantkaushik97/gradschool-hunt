import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";

function Home() {
  return (
    <Layout>
      <Jumbotron className="text-center">
        <UniversitySearch></UniversitySearch>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
