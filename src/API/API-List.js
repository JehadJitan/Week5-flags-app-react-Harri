/*
Global variables for APIs
*/
let allCountriesArray = [];
/*
Fetching APIs
*/
const mainURL = "https://restcountries.com/v3.1/";
export const getAllCountries = async () => {
  let URL = `${mainURL}all`;
  const response = await fetch(URL);
  const countries = await response.json();
  allCountriesArray = countries;
  return countries;
};

export const getCountryDetails = (name) =>
  fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
    res.status === 200 ? res.json() : []
  );
