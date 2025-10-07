import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import CountryCard from "../components/CountryCard.jsx";

import { countries } from "../assets/data/countries.js";
import Trie from "../utils/Trie.js";

import { Search, ChevronDown, ChevronUp } from "lucide-react";

// List of available regions for filtering countries in the drop down menu
const regionsItem = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Home() {
  const [isRegion, setIsRegion] = useState(false);
  const [selectedRegion, isSelectedRegion] = useState("");
  const navigate = useNavigate();

  // Handles region selection: updates the selected region
  // and closes the region dropdown menu
  const handleSelectedRegion = (region) => {
    isSelectedRegion(region);
    setIsRegion(false);
  };

  // Filter countries by the selected region.
  // If no region is selected, include all countries.
  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  // Inserting countries into Trie data structure
  const [trie] = useState(() => {
    const t = new Trie();
    countries.forEach((country) => t.insert(country.name));
    return t;
  });

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // useEffect to update autocomplete suggestions whenever the input changes
  useEffect(() => {
    if (input.length > 0) {
      const results = trie.search(input);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input, trie]);

  // Handle user selection from the suggestions dropdown.
  const handleSelection = (word) => {
    setInput(word);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.length) {
      return;
    }
    navigate(`/${input}`);
    setInput("");
  };

  return (
    <div>
      {/* Search input for filtering countries by name */}
      <div className="p-4 md:p-8 md:flex items-start justify-between">
        <div className="relative">
          <form onSubmit={handleSubmit} className="mb-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for a country (e.g India)"
                className="font-[inherit] border py-2 px-10 w-sm border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </form>

          {/* Conditionally display the autocomplete dropmenu */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="border border-gray-300 absolute w-full rounded-lg overflow-hidden">
              {suggestions.map((word, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelection(word)}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-50"
                >
                  {word}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropdown menu to filter countries by region */}
        <div className="relative">
          <button
            onClick={() => setIsRegion((t) => !t)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer mb-1"
          >
            <span>Filter by Region</span>
            {isRegion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isRegion && (
            <ul className="bg-white border border-gray-100 rounded-lg absolute left-0  w-full z-10">
              {regionsItem.map((region) => (
                <li
                  onClick={() => handleSelectedRegion(region)}
                  key={region}
                  className="py-1 px-2 cursor-pointer hover:bg-gray-50"
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Grid displaying the list of coutries using CountryCard component */}
      <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {filteredCountries.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}
