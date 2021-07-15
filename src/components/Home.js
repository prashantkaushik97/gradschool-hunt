import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";
import { useEffect } from "react";
import axios from "axios";
import "./Home.css"
import SearchIcon from '@material-ui/icons/Search';

function Home() {

  const [university, setUniversity] = useState(null);
  const [country, setCountry] = useState("USA");


  const styles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0
      }
    })
  };

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
            }} styles={styles} />
          </div>
            <div className="home__university">
              <UniversitySearch styles={styles} label="Choose a university" country={country} />
            </div>
            <SearchIcon className="home__searchIcon" />
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Home;
