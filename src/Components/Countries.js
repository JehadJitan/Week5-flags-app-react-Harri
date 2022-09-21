import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";

const url = "https://restcountries.com/v3.1/all";

export const StyledInputLabel = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
`;

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    };
    getAllCountries();
  }, []);

  return (
    <>
      <div className="cardContainer" id="style-1">
        <section className="grid">
          {countries.map((country) => {
            let trimmed = country.name.common.substring(0, 20);
            return (
              <Card sx={({ maxWidth: 350 }, { width: 350 })} key={country.cca3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={country.flags.png}
                    alt={country.name.common}
                    sx={{ objectFit: "fill" }}
                  />
                  <CardContent sx={{ padding: "2rem" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="cardTitle"
                      sx={{ fontSize: "24px", fontWeight: 700 }}
                    >
                      {trimmed}
                    </Typography>
                    <Typography variant="body2" component={"span"}>
                      <StyledInputLabel>
                        <span className="cardLabel">Population: </span>
                        {country.population}
                      </StyledInputLabel>

                      <StyledInputLabel>
                        <span className="cardLabel">Region: </span>
                        {country.region}
                      </StyledInputLabel>

                      <StyledInputLabel>
                        <span className="cardLabel">Capital: </span>
                        {country.capital}
                      </StyledInputLabel>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Countries;
