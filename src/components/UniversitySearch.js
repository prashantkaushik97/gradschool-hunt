import React, { useEffect, useState } from "react";
import Select from "react-select";
import universityList from "./UniversityList";
import WindowedSelect from "react-windowed-select";
import SelectSearch from "react-select-search";
import axios from "axios";
const unversities = [];
for (var key in universityList) {

  unversities.push({
    label: universityList[key].label,
    value: universityList[key].label
  });
}

function UniversitySearch({ reset, styles, label, country }) {
  const [universities, setUniversities] = useState([]);
  const [uniObj, setUniObj] = useState([]);
  useEffect(() => {

    setUniObj([]);
    if (country == 'USA') {
      setUniObj(unversities)
    } else {

      axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => {
          //  console.log(response.data[1].name)
          for (let i in response.data) {
            let obj = {}
            obj.label = response.data[i].name
            obj.value = response.data[i].name

            setUniObj(arr => [...arr, obj]);
          }
        });
    }

  }, [country]);
  return (

    <div>

      <WindowedSelect
        styles={styles} placeholder={<div>University</div>} options={uniObj} />

    </div>
  );
}

export default UniversitySearch;
