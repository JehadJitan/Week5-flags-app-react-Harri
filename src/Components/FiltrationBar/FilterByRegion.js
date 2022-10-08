import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SearchBar.css";

const RegionDropDown = ({ region, setRegion }) => {
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const regionNames = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Clear Filter",
  ];

  return (
    <FormControl sx={{ minWidth: 225, borderRadius: 1 }} id="headerDropdown">
      <InputLabel id="demo-simple-select-helper-label">
        Filter by Region
      </InputLabel>

      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Filter by Region"
        sx={{
          height: 55,
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        disableunderline="true"
        value={region}
        onChange={handleChange}
      >
        {regionNames.map((r) =>
          r !== "Clear Filter" ? (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ) : (
            <MenuItem key={r} value={""}>
              {r}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default RegionDropDown;
