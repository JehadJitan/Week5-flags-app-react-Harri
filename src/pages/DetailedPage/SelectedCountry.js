import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import "./SelectedCountry.css";

const SelectedCountry = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Week5-flags-app-react-Harri`;
    navigate(path);
  };

  const location = useLocation();
  return (
    <>
      <Button
        sx={{ color: "text.primary" }}
        color="grey"
        variant="contained"
        className="backBtn"
        onClick={routeChange}
      >
        <ArrowBackIcon fontSize="small" className="arrowIcon" />
        Back
      </Button>
      <article className="detailedCountryContainer">
        <div className="flagDiv">
          <img src={location.state.flag} />
        </div>
        <div className="countryDetails">
          <Typography variant="h5" color="text.primary" className="countryName">
            {location.state.name}
          </Typography>
          <div className="details">
            <div className="firstColumn">
              <ul>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Native Name:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.native}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Population:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.population}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Region:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.region}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Sub Region:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.subRegion}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Capital:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.capital}
                  </Typography>
                </li>
              </ul>
            </div>
            <div className="secondColumn">
              <ul>
                <li>
                  <Typography
                    component="span"
                    sx={{ fontWeight: 700, color: "text.primary" }}
                    className="inputLabel"
                  >
                    Top Level Domain:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.tld}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Currencies:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.currency}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 700 }}
                    className="inputLabel"
                  >
                    Languages:{" "}
                  </Typography>
                  <Typography component="span" sx={{ color: "text.primary" }}>
                    {location.state.lang}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
          <div className="borderCountries">
            <div className="borderCountriesLabel">
              <Typography color="text.primary">Border Countries:</Typography>
            </div>
            <div className="borderCountriesButton">
              {location.state.border.map(function (borderCountry, i) {
                return (
                  <Button
                    // variant;=""
                    sx={{ color: "text.primary" }}
                    color="grey"
                    variant="container"
                    className="borderBtn"
                    size="small"
                    key={i}
                  >
                    {borderCountry}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default SelectedCountry;
