import { useState } from "react";

import Header from "./components/Header.jsx";
import SearchFilterByRegionFlex from "./components/SearchFilterByRegionFlex.jsx";
import CountriesGrid from "./components/CountriesGrid.jsx";

import { data } from "./assets/data.js";

export default function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Filter by region
  const handleFilterByRegion = (selectedRegion) => {
    if (selectedRegion !== "All") {
      setFilteredCountries(
        data.filter((country) => country.region === selectedRegion)
      );
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <SearchFilterByRegionFlex onFilterByRegion={handleFilterByRegion} />
      <CountriesGrid
        countries={filteredCountries.length > 0 ? filteredCountries : data}
      />
    </div>
  );
}
