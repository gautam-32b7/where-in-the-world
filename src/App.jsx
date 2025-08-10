import { useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import SearchFilterByRegionFlex from "./components/SearchFilterByRegionFlex.jsx";
import CountriesGrid from "./components/CountriesGrid.jsx";
import CountryProfile from "./components/CountryProfile.jsx";

import { data } from "./assets/data.js";
import { Trie } from "./utils/Trie.js";

export default function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});
  const [showCountryProfile, setShowCountryProfile] = useState(false);

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

  // Insert country in Trie
  const trie = useMemo(() => {
    const t = new Trie();
    data.forEach((country) => t.insert(country.name));
    return t;
  }, []);

  // Fetch country details
  const fetchCountryDetails = (country) => {
    setCountryDetails(data.find((c) => c.name === country));
    setShowCountryProfile(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {showCountryProfile || (
        <SearchFilterByRegionFlex
          onFilterByRegion={handleFilterByRegion}
          trie={trie}
          fetchCountryDetails={fetchCountryDetails}
        />
      )}
      {showCountryProfile || (
        <CountriesGrid
          countries={filteredCountries.length > 0 ? filteredCountries : data}
        />
      )}
      {showCountryProfile && <CountryProfile country={countryDetails} />}
    </div>
  );
}
