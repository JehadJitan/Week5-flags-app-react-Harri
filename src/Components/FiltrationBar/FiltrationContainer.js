import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import "./SearchBar.css";

const Header = () => {
  return (
    <>
      <div className="searchBar1">
        <SearchBar />
        <DropDown />
      </div>
    </>
  );
};

export default Header;
