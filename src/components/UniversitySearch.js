import React, { useEffect } from "react";
import Select from "react-select";
import universityList from "./UniversityList";
import WindowedSelect from "react-windowed-select";
import SelectSearch from "react-select-search";
const unversities = [];

for (var key in universityList) {
  
  unversities.push({
    label: universityList[key].label,
    value: universityList[key].label
  });
}

function UniversitySearch({label, onChange}) {

  return (
    <div>
      <h1>{label}</h1>
      <WindowedSelect options={unversities} onChange={onChange}/>
    </div>
  );
}

export default UniversitySearch;
