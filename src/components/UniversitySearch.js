import React from "react";
import Select from "react-select";
import UniversityList from "./UniversityList";
import WindowedSelect from "react-windowed-select";
import SelectSearch from "react-select-search";

function UniversitySearch() {
  return (
    <div>
      <WindowedSelect options={UniversityList} />
    </div>
  );
}

export default UniversitySearch;
