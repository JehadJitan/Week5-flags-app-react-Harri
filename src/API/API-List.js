/*
Global variables for APIs
*/
let allCountriesArray = [];
/*
Fetching APIs
*/
let mainURL = "https://restcountries.com/v3.1/";
export const getAllCountries = async () => {
  let URL = `${mainURL}all`;
  const response = await fetch(URL);
  const countries = await response.json();
  allCountriesArray = countries;
  return countries;
};

export const getCountryDetails = async (name) => {
  let URL = `${mainURL}/name/${name}`;
  const response = await fetch(URL);
  const country = await response.json();
  return country;
};

export const fetchCountriesByName = (name) =>
  fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
    res.status === 200 ? res.json() : []
  );
