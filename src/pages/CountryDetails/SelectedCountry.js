import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import "./SelectedCountry.css";
import { getCountryDetails } from "../../API/API-List";
import { Link } from "react-router-dom";

const SelectedCountry = () => {
  const location = useLocation();
  console.log(location.state.name);

  const [country2, setCountry2] = useState([]);
  useEffect(() => {
    getCountryDetails(location.state.name).then((response) =>
      setCountry2(response)
    );
  }, []);
  console.log(country2);
  return (
    <>
      <Link className="routeL" to="/Week5-flags-app-react-Harri" key="123">
        <Button
          sx={{ color: "text.primary" }}
          color="grey"
          variant="contained"
          className="backBtn"
          // onClick={routeChange}
        >
          <ArrowBackIcon fontSize="small" className="arrowIcon" />
          Back
        </Button>
      </Link>
      <article className="detailedCountryContainer">
        <div className="flagDiv">
          {/* <img src={country2[0].flags.svg} /> */}
        </div>
        <div className="countryDetails">
          <Typography variant="h5" color="text.primary" className="countryName">
            "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
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
                    "toBeAdded"
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
          <div className="borderCountries">
            <div className="borderCountriesLabel">
              <Typography color="text.primary">Border Countries:</Typography>
            </div>
            {/* <div className="borderCountriesButton">
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
            </div> */}
          </div>
        </div>
      </article>
    </>
  );
};

export default SelectedCountry;
