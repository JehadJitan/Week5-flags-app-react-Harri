import React from "react";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import germany from "./germany.png";
const FavouriteItem = () => {
  const handleClick = () => {
    console.log("should remove country from fav list");
  };
  return (
    <div className="favouriteItem">
      <div className="favouriteItem-LeftContainer">
        <img src={germany} className="favouriteItem-flag" />
        <Typography
          variant="subtitle1"
          component="subtitle1"
          color="text.primary"
          sx={{ fontWeight: 700 }}
        >
          Germany
        </Typography>
      </div>
      <div className="favouriteItem-RightContainer">
        <CancelIcon color="disabled" onClick={handleClick} />
      </div>
    </div>
  );
};

export default FavouriteItem;
