import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
import CountryDetailsContainer from "./Components/CountryDetailsContainer";
import "./SelectedCountry.css";

const SelectedCountry = () => {
  return (
    <>
      <Link className="routeL" to={BASE_URL}>
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
