import StarIcon from "@mui/icons-material/Star";
import { CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../AllCountries.css";

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
      flag: require("../../../flags/GF.png"),
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
      flag: require("../../../flags/GA.jpg"),
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
      flag: require("../../../flags/GI.png"),
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
      flag: require("../../../flags/GAL.png"),
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
      flag: require("../../../flags/GALB.png"),
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
      flag: require("../../../flags/GB.png"),
      native: "Brasil",
      subRegion: "South America",
      tld: ".br",
      currency: "Brazilian Real",
      lang: "Portuguese",
      border: ["ARG", "BOL", "COL"],
    },
  ];
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container spacing={10}>
      {countriesStatic.map((country) => {
        /**
          @todo:
            const isFavourite = Math.random() > 0.5;
        **/
        return (
          <Grid item xs={12} md={6} lg={4} key={country.name}>
            <Link
              className="routeL"
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
              <Card key={country.name} onClick={routeChange}>
                <CardMedia
                  component="img"
                  image={country.flag}
                  alt={country.name}
                  sx={{ objectFit: "fill", aspectRatio: "16/9" }}
                />
                <CardContent sx={{ p: 3, pb: 0 }}>
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
                    <StyledInputLabel className="inputValue">
                      <span className="cardLabel">Population: </span>
                      {country.population}
                    </StyledInputLabel>

                    <StyledInputLabel className="inputValue">
                      <span className="cardLabel">Region: </span>
                      {country.region}
                    </StyledInputLabel>

                    <StyledInputLabel className="inputValue">
                      <span className="cardLabel">Capital: </span>
                      {country.capital}
                    </StyledInputLabel>
                  </Typography>
                </CardContent>
                {isLgDown && (
                  <CardActions
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton>
                      <StarIcon
                        fontSize="large"
                        /**
                           @todo:
                            color={isFavourite ? "warning" : "disabled"}
                        **/
                      />
                    </IconButton>
                  </CardActions>
                )}
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Countries;
