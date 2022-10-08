import React from "react";
import SearchForACountry from "./SearchForACountry";
import FilterByRegion from "./FilterByRegion";
import "./SearchBar.css";

const FiltrationContainer = ({ region, setRegion, onChangeSearchByName }) => {
  return (
    <>
      <div className="searchBar">
        <SearchForACountry onChangeSearchByName={onChangeSearchByName} />
        <FilterByRegion region={region} setRegion={setRegion} />
      </div>
    </>
  );
};

export default FiltrationContainer;
