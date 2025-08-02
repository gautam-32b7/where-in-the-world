import { useState } from "react";

import Header from "./components/Header.jsx";
import SearchFilterByRegionFlex from "./components/SearchFilterByRegionFlex.jsx";
import CountriesGrid from "./components/CountriesGrid.jsx";

import { data } from "./assets/data.js";

export default function App() {
  const [countries, setCountries] = useState(data);

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <SearchFilterByRegionFlex />
      <CountriesGrid />
    </div>
  );
}
