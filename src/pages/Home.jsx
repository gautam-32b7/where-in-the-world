import { useState } from "react";

import { Search, ChevronDown, ChevronUp } from "lucide-react";

const regionsItem = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Home() {
  const [isRegion, setIsRegion] = useState(false);

  return (
    <div>
      {/* Search for a country */}
      <div className="p-4 md:p-8 md:flex items-start justify-between mb-8">
        <form className="mb-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="font-[inherit] border py-2 px-10 w-sm border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </form>

        {/* Filter By Region */}
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

      {/* Countries List */}
      <h2>COUNTRIES LIST</h2>
    </div>
  );
}
