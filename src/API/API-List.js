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
  fetch(`${mainURL}/name/${name}`).then((res) =>
    res.status === 200 ? res.json() : []
  );

export const getCountriesByCode = async (codes) => {
  const stringCodes = codes.map(encodeURIComponent).join(",");
  try {
    const res = await fetch(`${mainURL}/alpha?codes=${stringCodes}`);
    const countries = await res.json();
    return countries?.map((country) => country.name.common) ?? [];
  } catch {
    return [];
  }
};
