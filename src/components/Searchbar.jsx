import { useState } from "react";

import { Search } from "lucide-react";

export default function Searchbar({ trie, fetchCountryDetails }) {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryDetails(query);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      setSuggestions([]);
    } else {
      setSuggestions(trie.search(value));
    }
  };

  const handleClick = (country) => {
    setQuery(country);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={query}
          placeholder="Search for a country ..."
          name="query"
          onChange={handleChange}
          className="pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 w-sm"
        />
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded w-full mt-1 z-10">
          {suggestions.map((country, index) => (
            <li
              key={index}
              onClick={() => handleClick(country)}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
