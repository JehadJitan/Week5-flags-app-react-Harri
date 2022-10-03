import React from "react";
import flag from "../../../flags/GF.png";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";

const FavouriteItem = () => {
  return (
    <div className="favouriteItem">
      <div className="favouriteItem-LeftContainer">
        <img src={flag} className="favouriteItem-flag" />
        <Typography variant="h6" component="h6" color="text.primary">
          Germany
        </Typography>
      </div>
      <div className="favouriteItem-RightContainer">
        <CancelIcon color="disabled" />
      </div>
    </div>
  );
};

export default FavouriteItem;
