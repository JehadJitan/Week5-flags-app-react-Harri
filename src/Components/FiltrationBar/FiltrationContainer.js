import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import "./SearchBar.css";

const Header = () => {
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

export default Header;
