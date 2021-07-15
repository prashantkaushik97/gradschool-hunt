import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";
import { useEffect } from "react";
import axios from "axios";



function Home() {

  const [university, setUniversity] = useState(null);
  const [country, setCountry] = useState("USA");
  

  var names = []
 
  const options = [
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' }
  ]
  return (
    <Layout>
      <Jumbotron className="text-center">
      <Select options={options} onChange={(value)=>{
        setCountry(value.label)
      }}/>
{console.log("this is", country)}
        <UniversitySearch label="Choose a university" country={country}/>

        <button onClick={()=>{console.log(country)}}>Pressme</button>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
