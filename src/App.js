import React from "react";
import "./App.css";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectedCountry from "./pages/CountryDetails/SelectedCountry";
import ThemeProvider from "./Context/ThemeProvider";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/Week5-flags-app-react-Harri"
            element={<CountriesPage />}
          />
          <Route
            path="/Week5-flags-app-react-Harri/SelectedCountry"
            element={<SelectedCountry />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
