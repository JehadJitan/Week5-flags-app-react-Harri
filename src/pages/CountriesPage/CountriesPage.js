import React from "react";
import FiltrationBar from "../../Components/FiltrationBar/FiltrationContainer";
import { useCountriesController } from "../../Hooks/useCountriesController";
import CountriesContainer from "./Components/CountriesContainer";
import "./CountriesPage.css";

const CountriesPage = () => {
  const {
    countries,
    areCountriesLoading,
    handleDropInFavourites,
    favouriteCountries,
    handleDeleteFavourite,
    selectedRegion,
    onChangeRegion,
    isFavouriteCountry,
    handleToggleFavourite,
    handleChangeSearchByName,
  } = useCountriesController();
  return (
    <>
      <FiltrationBar
        selectedRegion={selectedRegion}
        onChangeRegion={onChangeRegion}
        onChangeSearchByName={handleChangeSearchByName}
      />
      <CountriesContainer
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
