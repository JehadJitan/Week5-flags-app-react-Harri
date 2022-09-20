import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import DropDown from "./dropDown";
const header = () => {
  /**
        @todo: 
            const [region, setRegion] = useState("");
            const handleChange = (event) => {
                setRegion(event.target.value);
            };
    **/
  return (
    <>
      <header className="header">
        <SearchBar />
        <DropDown />
      </header>
    </>
  );
};

export default header;
