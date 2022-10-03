import React from "react";
import FavouriteList from "./FavouritesList";
import CountriesGrid from "./CountriesGrid";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainContainer = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container columnSpacing={4} px={6}>
      {isLgUp && (
        <Grid item xs={0} lg={3} sx={{ height: "calc(100vh - 300px)" }}>
          <FavouriteList />
        </Grid>
      )}
      <Grid
        id="style-1"
        item
        xs={12}
        lg={9}
        sx={{ height: "calc(100vh - 300px)", overflowY: "auto" }}
      >
        <CountriesGrid />
      </Grid>
    </Grid>
  );
};

export default MainContainer;
