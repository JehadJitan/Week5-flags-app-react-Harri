import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({ onChange, placeholder }) => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const name = e.target.value;
    setSearch(name);
    onChange(name);
  }

  return (
    <Paper
      id="headerSearch"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "calc(100vw - 70%)",
        height: 55,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="search" disableRipple>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        type="text"
        placeholder={placeholder}
        inputProps={{ "nunito-sans": placeholder }}
        onChange={handleSearch}
        value={search}
        onBlur={() => setSearch((t) => t.trim())}
      />
    </Paper>
  );
};

export default SearchBar;
