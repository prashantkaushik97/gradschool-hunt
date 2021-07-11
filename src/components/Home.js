import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <Jumbotron className="text-center">
        <h1>welcome</h1>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
