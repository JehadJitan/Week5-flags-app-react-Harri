import React from "react";

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
        ></div>
      </div>
    </>
  );
};

export default favouritesList;
