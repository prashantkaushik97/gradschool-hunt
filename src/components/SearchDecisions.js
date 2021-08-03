import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Select from "react-select";
import UniversitySearch from "./UniversitySearch";
import { useEffect } from "react";
import axios from "axios";
import "./Home.css"
import SearchIcon from '@material-ui/icons/Search';
import { db, provider } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { university } from "../features/universitySlice";
import { useDispatch } from "react-redux";
import Decisions from "./Decisions";

function SearchDecisions() {
    const [country, setCountry] = useState(null);
    const [resetUni, setResetUni] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [decision, setDecision] = useState(null)
    const search = (e) => {
        e.preventDefault();

        dispatch(
            university({
                university: (document.querySelectorAll(".css-1uccc91-singleValue")[1])?.textContent
            })
        );


    };


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
    const decisions = [
        { value: 'All', label: 'All' },
        { value: 'Admits', label: 'admitted' },
        { value: 'Rejects', label: 'rejected' }
    ]
    return (
        <Layout>
            <div className="home">

                <div className="home__search" >
                    <div className="home__bar"> <div className="home__country">
                        <Select placeholder={<div>Country</div>} options={options} onChange={(value) => {
                            setCountry(value.label)
                            setResetUni(true)
                        }} styles={styles} />
                    </div>
                        <div className="home__university">
                            <UniversitySearch reset={resetUni} styles={styles} label="Choose a university" country={country} />
                        </div>

                        <SearchIcon onClick={(e) => { search(e) }} className="home__searchIcon" />




                    </div>

                </div>
            </div>
            <Decisions></Decisions>
        </Layout >
    );
}

export default SearchDecisions
