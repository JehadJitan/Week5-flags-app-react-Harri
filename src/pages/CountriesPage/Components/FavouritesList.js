import { Typography } from "@mui/material";
import React from "react";
import FavouriteItem from "./FavouriteItem";

const FavouritesList = ({
  favouriteCountries,
  handleDropInFavourites,
  onDeleteFavourate,
}) => {
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
          onDrop={handleDropInFavourites}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          }}
        >
          {favouriteCountries.map((country) => (
            <FavouriteItem
              key={country.name}
              country={country}
              onDelete={onDeleteFavourate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavouritesList;
