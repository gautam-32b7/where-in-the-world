import { useState } from "react";

import { ChevronUp, ChevronDown } from "lucide-react";

export default function FilterByRegion() {
  const [showOptions, setShowOptions] = useState(false);

  // OPTIONS -> Africa America Asia Europe Oceania
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClick = (option) => {
    console.log(option);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions((s) => !s)}
        className="px-4 py-3 border border-gray-300 rounded flex items-center gap-3 cursor-pointer mb-1"
      >
        <span>Filter by Region</span>
        {showOptions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {showOptions && (
        <ul className="absolute left-0 top-full border border-gray-300 rounded w-full z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleClick(option)}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
