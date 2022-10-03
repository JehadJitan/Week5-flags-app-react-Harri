import React from "react";
import FavouriteItem from "./FavouriteItem";

const favouritesList = () => {
  return (
    <>
      <div className="favouritesContainer">
        <h2 className="favouritesTitle">Favourites</h2>
        <div
          className="favouritesList"
          id="style-1"
          /**
            @todo:
            ondrop="dropHandler(event);"
            ondragover="dragoverHandler(event);"
        **/
        >
          <FavouriteItem />
          <FavouriteItem />
        </div>
      </div>
    </>
  );
};

export default favouritesList;
