/*
Global variables for APIs
*/
let allCountriesArray = [];
/*
Fetching APIs
*/
export const getAllCountries = async () => {
  let URL = "https://restcountries.com/v3.1/all";
  const response = await fetch(URL);
  const countries = await response.json();
  allCountriesArray = countries;
  console.log(countries);
  return countries;
};

export const getCountriesByRegion = async (region) => {
  let filtedRegionCountries = [];
  allCountriesArray.forEach((c) => {
    if (c.region === region) {
      filtedRegionCountries.push(c);
    }
  });
  return filtedRegionCountries;
};

export const getSearchedCountry = (name) => {
  let flt = document.getElementById("filterByRegionButton").innerHTML;
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .then(function (response) {
      const countriesData2 = response;
      if (flt !== "Filter by Region") {
        if (countriesData2[0].region === flt) {
          // renderMainPage(countriesData2);
        } else {
          alert(
            `Sorry, ${countriesData2[0].name.common} is not in ${flt}. Please kindly select the correct region or clear your filter`
          );
        }
      } else {
        // renderMainPage(countriesData2);
      }
    })
    .catch((err) => console.log("Error:", err));
};

export const getRegionCountries = (region) => {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => response.json())
    .then(function (response) {
      const countriesData2 = response;
    })
    .catch((err) => console.log("Error:", err));
};

export const getRegionCountriesDynamically = (region) => {
  let filtedRegionCountries = [];
  allCountriesArray.forEach((c) => {
    if (c.region === region) {
      filtedRegionCountries.push(c);
    }
  });
  // renderMainPage(filtedRegionCountries);
};

export const getDetailedCountry = (name) => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .then(function (response) {
      const countriesData2 = response;
      // renderDetailedPage(countriesData2);
    })
    .catch((err) => console.log("Error:", err));
};

export const getCountryByCode = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then(function (response) {
      const countriesData2 = response;
      // renderMainPage(countriesData2);
    })
    .catch((err) => console.log("Error:", err));
};

export const initializeDetailsPage = () => {
  const name = localStorage.getItem("country-name");
  getDetailedCountry(name);
};
