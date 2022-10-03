import React from "react";
import FiltrationBar from "../../Components/FiltrationBar/FiltrationContainer";
import CountriesContianer from "./Components/CountriesContainer";
import "./CountriesPage.css";

const CountriesPage = () => {
  return (
    <>
      <FiltrationBar />
      <CountriesContianer />
    </>
  );
};

export default CountriesPage;
