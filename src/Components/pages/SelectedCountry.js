import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SelectedCountry = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Week5-flags-app-react-Harri`;
    navigate(path);
  };

  const location = useLocation();
  return (
    <>
      <Button variant="contained" className="backBtn" onClick={routeChange}>
        <ArrowBackIcon fontSize="small" className="arrowIcon" />
        Back
      </Button>
      <article className="detailedCountryContainer">
        <div className="flagDiv">
          <img src={location.state.flag} />
        </div>
        <div className="countryDetails">
          <h2 className="countryName">{location.state.name}</h2>
          <div className="details">
            <div className="firstColumn">
              <ul>
                <li>
                  <span className="inputLabel">Native Name: </span>
                  <span>{location.state.native}</span>
                </li>
                <li>
                  <span className="inputLabel">Population: </span>
                  <span>{location.state.population}</span>
                </li>
                <li>
                  <span className="inputLabel">Region: </span>
                  <span>{location.state.region}</span>
                </li>
                <li>
                  <span className="inputLabel">Sub Region: </span>
                  <span>{location.state.subRegion}</span>
                </li>
                <li>
                  <span className="inputLabel">Capital: </span>
                  <span>{location.state.capital}</span>
                </li>
              </ul>
            </div>
            <div className="secondColumn">
              <ul>
                <li>
                  <span className="inputLabel">Top Level Domain: </span>
                  <span>{location.state.tld}</span>
                </li>
                <li>
                  <span className="inputLabel">Currencies: </span>
                  <span>{location.state.currency}</span>
                </li>
                <li>
                  <span className="inputLabel">Languages: </span>
                  <span>{location.state.lang}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="borderCountries">
            <div className="borderCountriesLabel">
              <h4>Border Countries:</h4>
            </div>
            <div className="borderCountriesButton">
              {location.state.border.map(function (borderCountry, i) {
                return (
                  <Button
                    variant="contained"
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
