import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SelectedCountry.css";
import { Link } from "react-router-dom";
import "./SelectedCountry.css";
import CountryDetailsContainer from "./Components/CountryDetailsContainer";

const SelectedCountry = () => {
  return (
    <>
      <Link className="routeL" to="/Week5-flags-app-react-Harri" key="123">
        <Button
          sx={{ color: "text.primary" }}
          color="grey"
          variant="contained"
          className="backBtn"
        >
          <ArrowBackIcon fontSize="small" className="arrowIcon" />
          Back
        </Button>
      </Link>
      <CountryDetailsContainer />
    </>
  );
};

export default SelectedCountry;
