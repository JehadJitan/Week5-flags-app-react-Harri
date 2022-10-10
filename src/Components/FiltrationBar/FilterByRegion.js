import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SearchBar.css";
import { REGIONS } from "./constants";

const RegionDropDown = ({ selectedRegion, onChangeRegion }) => {
  const handleChangeRegion = (event) => {
    onChangeRegion(event.target.value);
  };

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
        value={selectedRegion}
        onChange={handleChangeRegion}
      >
        {REGIONS.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionDropDown;
