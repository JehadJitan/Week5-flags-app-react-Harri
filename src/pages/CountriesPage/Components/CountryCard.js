import StarIcon from "@mui/icons-material/Star";
import { CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants";
import "../CountriesPage.css";
import CardDetailedText from "./CardDetailedText";

const CountryCard = ({ country, isFavourite, onToggleFavourite }) => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData("countryId", country.name.common);
  };

  const countryPath = `${BASE_URL}/SelectedCountry/${country.name.common}`;

  return (
    <Grid item xs={12} md={6} lg={4} draggable="true">
      <Card
        key={country.name.common}
        className="card"
        onDragStart={handleDragStart}
        draggable="true"
      >
        <Link className="routeL" to={countryPath} key={country.name.common}>
          <CardMedia
            component="img"
            image={country.flags.svg}
            alt={country.name.common}
            sx={{
              objectFit: "cover",
              aspectRatio: "16/9",
            }}
          />
        </Link>
        <CardContent sx={{ p: 3, pb: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="cardTitle"
            sx={{ fontSize: "22px", fontWeight: 800 }}
          >
            {country.name.common}
          </Typography>
          <Typography variant="body2" component={"span"}>
            <CardDetailedText>
              <span className="cardLabel">Population: </span>
              {country.population.toLocaleString("en")}
            </CardDetailedText>
            <CardDetailedText>
              <span className="cardLabel">Region: </span>
              {country.region}
            </CardDetailedText>
            <CardDetailedText>
              <span className="cardLabel">Capital: </span>
              {country.capital}
            </CardDetailedText>
          </Typography>
        </CardContent>
        {isLgDown && (
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={(_) =>
                onToggleFavourite(country.name.common, !isFavourite)
              }
            >
              <StarIcon
                fontSize="large"
                color={isFavourite ? "warning" : "disabled"}
              />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default CountryCard;
