import React from "react";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";

const FavouriteItem = ({ country, onDelete }) => {
  const handleClick = () => {
    onDelete(country.name);
  };
  return (
    <div className="favouriteItem">
      <div className="favouriteItem-LeftContainer">
        <img src={country?.flag} className="favouriteItem-flag" />
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: 700, fontSize: "16px" }}
        >
          {country?.name}
        </Typography>
      </div>
      <div className="favouriteItem-RightContainer">
        <CancelIcon color="disabled" onClick={handleClick} />
      </div>
    </div>
  );
};

export default FavouriteItem;
