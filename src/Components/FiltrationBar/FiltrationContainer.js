import React from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import "./SearchBar.css";

const Header = ({ region, setRegion, onChangeSearchByName }) => {
  return (
    <>
      <div className="searchBar1">
        <SearchBar onChangeSearchByName={onChangeSearchByName} />
        <DropDown region={region} setRegion={setRegion} />
      </div>
    </>
  );
};

export default Header;
