import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
const searchBar = () => {
  return (
    <Paper
      id="headerSearch"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 600,
        height: 60,
        boxShadow: 2,
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "Search for a country..." }}
      />
    </Paper>
  );
};

export default searchBar;
