import React from "react";
import FiltrationBar from "../../Components/FiltrationBar/FiltrationContainer";
import CountriesContianer from "./Components/CountriesContainer";
const AllCountries = () => {
  return (
    <>
      <FiltrationBar />
      <CountriesContianer />
    </>
  );
};

export default AllCountries;
