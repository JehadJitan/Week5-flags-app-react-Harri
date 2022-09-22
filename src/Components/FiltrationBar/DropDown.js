import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dropDown = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} id="headerDropdown">
      <InputLabel id="demo-simple-select-helper-label">
        Filter by Region
      </InputLabel>

      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Filter by Region"
        sx={{ height: 60, boxShadow: 2 }}
        defaultValue=""
        /**
       @todo: 
          value={region}
          onChange{handleChange}
      **/
      >
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
        <MenuItem value="Filter by Region">Clear Filter</MenuItem>
      </Select>
    </FormControl>
  );
};

export default dropDown;
