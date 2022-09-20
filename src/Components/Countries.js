import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const url = "https://restcountries.com/v3.1/all";

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
      <div className="test" id="style-1">
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
                    >
                      {trimmed}
                    </Typography>
                    <Typography variant="body2" component={"span"}>
                      <h4>
                        <span className="cardLabel">Population: </span>
                        {country.population}
                      </h4>
                      <h4>
                        <span className="cardLabel">Region: </span>
                        {country.region}
                      </h4>
                      <h4>
                        <span className="cardLabel">Capital: </span>
                        {country.capital}
                      </h4>
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
