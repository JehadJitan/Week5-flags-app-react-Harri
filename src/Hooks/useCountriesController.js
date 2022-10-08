import { useEffect, useMemo, useRef, useState } from "react";
import { getAllCountries, getCountryDetails } from "../API/API-List";

export const useCountriesController = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [areCountriesLoading, setAreCountriesLoading] = useState(false);
  const [searchByName, setSearchByName] = useState("");
  const [favouriteIds, setFavouriteIds] = useState(() => {
    let ids = [];
    try {
      ids = JSON.parse(localStorage.getItem("favouriteIds")) ?? [];
    } catch (error) {
      ids = [];
    }
    return new Set(ids);
  });

  const timerId = useRef(undefined);

  useEffect(() => {
    localStorage.setItem("favouriteIds", JSON.stringify([...favouriteIds]));
  }, [favouriteIds]);

  const filteredCountriesByRegion = useMemo(
    () =>
      region
        ? countries.filter((country) => region === country.region)
        : countries,
    [region, countries]
  );

  const favouriteCountries = useMemo(() => {
    const countriesByIds = countries.reduce((acc, country) => {
      acc[country.name.common] = country;
      return acc;
    }, {});

    return [...favouriteIds]
      .filter((id) => countriesByIds[id])
      .map((id) => ({
        flag: countriesByIds[id].flags.svg,
        name: id,
      }));
  }, [countries, favouriteIds]);

  useEffect(() => {
    setAreCountriesLoading(true);
    (!!searchByName?.trim()
      ? getCountryDetails(searchByName.trim())
      : getAllCountries()
    )
      .then((data) => setCountries(data))
      .catch(() => setCountries([]))
      .finally(() => setAreCountriesLoading(false));
  }, [searchByName?.trim()]);

  const handleChangeSearchByName = (name) => {
    const id = timerId.current;
    if (id) {
      clearTimeout(id);
    }
    timerId.current = setTimeout(() => setSearchByName(name), 200);
  };

  const handleToggleFavourite = (id, selected = true) => {
    if (selected && !favouriteIds.has(id)) {
      setFavouriteIds((ids) => new Set([...ids, id]));
      return;
    }

    if (!selected) {
      setFavouriteIds((ids) => {
        const newIds = new Set([...ids]);
        newIds.delete(id);
        return newIds;
      });
    }
  };

  const handleDropInFavourites = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const id = e.dataTransfer.getData("countryId");
    handleToggleFavourite(id, true);
  };

  const handleDeleteFavourite = (id) => handleToggleFavourite(id, false);

  const isFavouriteCountry = (id) => favouriteIds.has(id);

  return {
    countries: filteredCountriesByRegion,
    areCountriesLoading,
    favouriteCountries,
    handleDropInFavourites,
    handleDeleteFavourite,
    region,
    setRegion,
    isFavouriteCountry,
    handleToggleFavourite,
    handleChangeSearchByName,
  };
};
