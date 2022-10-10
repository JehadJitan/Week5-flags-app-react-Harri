import React from "react";
import FilterByRegion from "./FilterByRegion";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

const FiltrationContainer = ({
  selectedRegion,
  onChangeRegion,
  onChangeSearchByName,
}) => {
  return (
    <div className="searchBar">
      <SearchBar
        placeholder="Search for a country..."
        onChange={onChangeSearchByName}
      />
      <FilterByRegion
        selectedRegion={selectedRegion}
        onChangeRegion={onChangeRegion}
      />
    </div>
  );
};

export default FiltrationContainer;
