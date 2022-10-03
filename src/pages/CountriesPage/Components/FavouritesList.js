import { Typography } from "@mui/material";
import React from "react";
import FavouriteItem from "./FavouriteItem";

const favouritesList = () => {
  return (
    <>
      <div className="favouritesContainer">
        <Typography
          variant="h5"
          component="h5"
          color="text.primary"
          className="favouritesTitle"
          sx={{ fontWeight: 800 }}
        >
          Favourites
        </Typography>
        <div
          className="favouritesList"
          id="style-1"
          ondrop="dropHandler(event)"
          ondragover="dragoverHandler(event)"
        >
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
        </div>
      </div>
    </>
  );
};

export default favouritesList;
