import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountriesByCode, getCountryDetails } from "../../../API/API-List";
import "../SelectedCountry.css";

const CountryDetailsContainer = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoadingBorders, setIsLoadingBorders] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);

  useEffect(() => {
    getCountryDetails(countryName).then((response) => {
      setCountry(response[0] ?? {});
      setIsLoadingDetails(false);
    });
  }, []);

  useEffect(() => {
    if (isLoadingDetails) {
      return;
    }

    const { borders = [] } = country;

    if (!borders.length) {
      setIsLoadingBorders(false);
      return;
    }

    getCountriesByCode(borders).then((countries) => {
      setBorderCountries(countries);
      setIsLoadingBorders(false);
    });
  }, [country, isLoadingDetails]);

  if (isLoadingDetails)
    return (
      <Stack spacing={5} sx={{ margin: "3rem" }} className="skltn">
        <Skeleton
          variant="rounded"
          width={100}
          height={40}
          className="skltn-backArr"
        />
        <Skeleton
          variant="rounded"
          width={"95vw"}
          height={"60vh"}
          className="skltn-content"
        />
      </Stack>
    );

  const languages = country?.languages ?? {};
  const language = Object.values(languages)?.join(", ");

  const currencies = country?.currencies ?? {};
  const currency = Object.values(currencies)
    .map(({ name }) => name)
    .join(", ");

  const nativeNames = country?.name?.nativeName ?? {};
  const nativeName = Object.values(nativeNames)?.[0]?.common;

  return (
    <article className="detailedCountryContainer">
      <div className="flagDiv">
        <img className="flagImg" src={country?.flags?.svg} />
      </div>
      <div className="countryDetails">
        <Typography variant="h4" color="text.primary" className="countryName">
          {country?.name?.common}
        </Typography>
        <div className="details">
          <div className="firstColumn">
            <ul>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Native Name:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {nativeName}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Population:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {country?.population?.toLocaleString("en")}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Region:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {country?.region}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Sub Region:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {country?.subregion}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Capital:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {country?.capital}
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
                  className="countryDetail"
                >
                  Top Level Domain:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {country?.tld}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Currencies:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {currency}
                </Typography>
              </li>
              <li>
                <Typography
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 700 }}
                  className="countryDetail"
                >
                  Languages:{" "}
                </Typography>
                <Typography component="span" sx={{ color: "text.primary" }}>
                  {language}
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className="borderCountries">
          <div className="borderCountriesLabel">
            <Typography
              component="span"
              sx={{ color: "text.primary", fontWeight: 700 }}
              className="countryDetail"
            >
              Border Countries:
            </Typography>
          </div>
          <div className="borderCountriesButton">
            {isLoadingBorders
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton
                    variant="rounded"
                    width={87}
                    height={30}
                    pl={1.75}
                    key={i}
                  />
                ))
              : borderCountries.slice(0, 3).map((borderCountry) => (
                  <Button
                    sx={{ color: "text.primary", textTransform: "capitalize" }}
                    color="grey"
                    variant="container"
                    className="borderBtn"
                    size="small"
                    key={borderCountry}
                  >
                    {borderCountry}
                  </Button>
                ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryDetailsContainer;
