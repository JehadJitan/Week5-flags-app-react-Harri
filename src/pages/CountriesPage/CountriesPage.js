import React from "react";
import FiltrationBar from "../../Components/FiltrationBar/FiltrationContainer";
import { useCountriesController } from "../../Hooks/useCountriesController";
import CountriesContianer from "./Components/CountriesContainer";
import "./CountriesPage.css";

const CountriesPage = () => {
  const {
    countries,
    areCountriesLoading,
    handleDropInFavourites,
    favouriteCountries,
    handleDeleteFavourite,
    region,
    setRegion,
    isFavouriteCountry,
    handleToggleFavourite,
    handleChangeSearchByName,
  } = useCountriesController();
  return (
    <>
      <FiltrationBar
        region={region}
        setRegion={setRegion}
        onChangeSearchByName={handleChangeSearchByName}
      />
      <CountriesContianer
        countries={countries}
        areCountriesLoading={areCountriesLoading}
        handleDropInFavourites={handleDropInFavourites}
        favouriteCountries={favouriteCountries}
        onDeleteFavourite={handleDeleteFavourite}
        isFavouriteCountry={isFavouriteCountry}
        onToggleFavourite={handleToggleFavourite}
      />
    </>
  );
};

export default CountriesPage;
