import React from "react";
import FiltrationBar from "../../Components/FiltrationBar/FiltrationContainer";
import { useContorller } from "../../Hooks/useController";
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
  } = useContorller();
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
        onDeleteFavourate={handleDeleteFavourite}
        isFavouriteCountry={isFavouriteCountry}
        onToggleFavourite={handleToggleFavourite}
      />
    </>
  );
};

export default CountriesPage;
