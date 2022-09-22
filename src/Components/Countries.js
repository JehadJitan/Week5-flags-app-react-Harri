import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export const StyledInputLabel = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
`;

const Countries = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Week5-flags-app-react-Harri/SelectedCountry`;
    navigate(path);
  };

  const countriesStatic = [
    {
      name: "Germany",
      population: "83,240,525",
      region: "Europe",
      capital: "Berlin",
      flag: require("../flags/GF.png"),
      native: "Deutschland",
      subRegion: "Western Europe",
      tld: ".de",
      currency: "Euro",
      lang: "German",
      border: ["ARG", "BOL", "COL"],
    },
    {
      name: "United States of America",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington. D.C.",
      flag: require("../flags/GA.jpg"),
      native: "USA",
      subRegion: "Americas",
      tld: ".us",
      currency: "US Dollars",
      lang: "English",
      border: ["ARG", "BOL", "COL"],
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavik",
      flag: require("../flags/GI.png"),
      native: "Iceland",
      subRegion: "Northern Europe",
      tld: ".is",
      currency: "Krona Kr",
      lang: "Icelandic",
      border: ["ARG", "BOL", "COL"],
    },
    {
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers",
      flag: require("../flags/GAL.png"),
      native: "الجزائر",
      subRegion: "Northern Africa",
      tld: ".dz",
      currency: "Algerian dinar",
      lang: "Arabic",
      border: ["ARG", "BOL", "COL"],
    },
    {
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana",
      flag: require("../flags/GALB.png"),
      native: "Shqipëria",
      subRegion: "Southeast Europe",
      tld: ".al",
      currency: "Albanian Lek",
      lang: "Albanian",
      border: ["ARG", "BOL", "COL"],
    },
    {
      name: "Brazil",
      population: "212,559,409",
      region: "Americas",
      capital: "Brasilia",
      flag: require("../flags/GB.png"),
      native: "Brasil",
      subRegion: "South America",
      tld: ".br",
      currency: "Brazilian Real",
      lang: "Portuguese",
      border: ["ARG", "BOL", "COL"],
    },
  ];

  return (
    <>
      <div className="cardContainer" id="style-1">
        <section className="grid">
          {countriesStatic.map((country) => {
            return (
              <Link
                className="router-link"
                to="/Week5-flags-app-react-Harri/SelectedCountry"
                key={country.name}
                state={{
                  name: country.name,
                  population: country.population,
                  region: country.region,
                  capital: country.capital,
                  flag: country.flag,
                  native: country.native,
                  subRegion: country.subRegion,
                  tld: country.tld,
                  currency: country.currency,
                  lang: country.lang,
                  border: country.border,
                }}
              >
                <Card
                  sx={({ maxWidth: 350 }, { width: 350 })}
                  key={country.name}
                  onClick={routeChange}
                  className="card-h"
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={country.flag}
                      alt={country.name}
                      sx={{ objectFit: "fill" }}
                    />
                    <CardContent sx={{ padding: "2rem" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="cardTitle"
                        sx={{ fontSize: "24px", fontWeight: 700 }}
                      >
                        {country.name}
                      </Typography>
                      <Typography variant="body2" component={"span"}>
                        <StyledInputLabel>
                          <span className="cardLabel">Population: </span>
                          {country.population}
                        </StyledInputLabel>

                        <StyledInputLabel>
                          <span className="cardLabel">Region: </span>
                          {country.region}
                        </StyledInputLabel>

                        <StyledInputLabel>
                          <span className="cardLabel">Capital: </span>
                          {country.capital}
                        </StyledInputLabel>
                      </Typography>
                    </CardContent>
                    <div className="starContainer">
                      <StarIcon className="star" fontSize="large"></StarIcon>
                    </div>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Countries;
