import React from "react";
import "./App.css";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectedCountry from "./pages/CountryDetails/SelectedCountry";
import ThemeProvider from "./Context/ThemeProvider";
import { BASE_URL } from "./constants";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path={`${BASE_URL}`} element={<CountriesPage />} />
          <Route
            path={`${BASE_URL}/SelectedCountry/:countryName`}
            element={<SelectedCountry />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
