import StarIcon from "@mui/icons-material/Star";
import { CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getAllCountries, getCountriesByRegion } from "../../../API/API-List";
import { RegionContext } from "../../../Context/RegionContext";
import "../CountriesPage.css";
import InputLabelValue from "./InputLabelValue";

const Countries = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const [countries, setCountries] = useState([]);

  const regionSpecified = useContext(RegionContext);

  let filterApplied = regionSpecified;
  useEffect(() => {
    if (filterApplied === "") {
      getAllCountries().then((data) => setCountries(data));
    } else {
      getCountriesByRegion(filterApplied)
        .then((data) => setCountries(data))
        .then((data) => console.log(data));
    }
  }, [filterApplied]);

  return (
    <Grid container spacing={10}>
      {countries.map((country) => {
        /**
          @todo:
            const isFavourite = Math.random() > 0.5;
        **/
        return (
          <Grid item xs={12} md={6} lg={4} key={country.name.common}>
            <Link
              className="routeL"
              to="/Week5-flags-app-react-Harri/SelectedCountry"
              key={country.name.common}
              state={{
                name: country.name.common,
              }}
            >
              <Card
                key={country.name.common}
                className="card"
                ondragstart="dragstartHandler(event);"
                ondragend="dragendHandler(event);"
                draggable="true"
              >
                <CardMedia
                  component="img"
                  image={country.flags.svg}
                  alt={country.name.common}
                  sx={{
                    objectFit: "cover",
                    aspectRatio: "16/9",
                  }}
                />
                <CardContent sx={{ p: 3, pb: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="cardTitle"
                    sx={{ fontSize: "24px", fontWeight: 800 }}
                  >
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" component={"span"}>
                    <InputLabelValue>
                      <span className="cardLabel">Population: </span>
                      {country.population.toLocaleString("en")}
                    </InputLabelValue>

                    <InputLabelValue>
                      <span className="cardLabel">Region: </span>
                      {country.region}
                    </InputLabelValue>

                    <InputLabelValue>
                      <span className="cardLabel">Capital: </span>
                      {country.capital}
                    </InputLabelValue>
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
