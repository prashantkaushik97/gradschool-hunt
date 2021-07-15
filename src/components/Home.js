import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";
import { useEffect } from "react";
import axios from "axios";
import "./Home.css"


function Home() {

  const [university, setUniversity] = useState(null);
  const [country, setCountry] = useState("USA");


  var names = []

  const options = [
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' }
  ]
  return (
    <Layout>
      <div className="home">
        <div className="home__search" >
          <div className="home__bar"> <div className="home__country">
            <Select placeholder={<div>Country</div>} options={options} onChange={(value) => {
              setCountry(value.label)
            }} />
          </div>
            <div className="home__university">
              <UniversitySearch label="Choose a university" country={country} />
            </div>
            <button onClick={() => { console.log(country) }}>Search</button>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Home;
