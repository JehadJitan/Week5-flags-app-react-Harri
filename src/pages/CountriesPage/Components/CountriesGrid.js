import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React from "react";
import "../CountriesPage.css";
import CountryCard from "./CountryCard";

const Countries = ({
  countries,
  areCountriesLoading,
  isFavouriteCountry,
  onToggleFavourite,
}) => {
  if (areCountriesLoading || !countries.length) {
    return (
      <Grid container alignItems="center" justifyContent="center" height="100%">
        <Grid item>
          {areCountriesLoading ? (
            <CircularProgress />
          ) : (
            <Typography className="noMatchFound">No Results Found</Typography>
          )}
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={10}>
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
          isFavourite={isFavouriteCountry(country.name.common)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </Grid>
  );
};

export default Countries;
