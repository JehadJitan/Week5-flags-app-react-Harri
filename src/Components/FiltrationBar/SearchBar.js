import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchCountry, setSearchCountry] = useState("");
  let countriesss = ["palestine"];
  function handleSearch(e) {
    setSearchCountry(e.target.value);
    searchFiltration();
    console.log("you clicked me");
  }

  function searchFiltration() {
    countriesss.filter((val) => {
      if (searchCountry == "") {
        return val;
      } else if (val.toLowerCase().includes(searchCountry.toLowerCase())) {
        return val;
      }
    });
  }

  return (
    <Paper
      id="headerSearch"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 670,
        height: 60,
        boxShadow: 2,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        type="text"
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "Search for a country..." }}
        onChange={handleSearch}
        onSubmit={handleSearch}
      />
    </Paper>
  );
};

export default SearchBar;
