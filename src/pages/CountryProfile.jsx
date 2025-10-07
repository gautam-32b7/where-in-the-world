import { Link, useParams } from "react-router";

import { countries } from "../assets/data/countries.js";
import formatPopulation from "../utils/formatPopulation.js";

import { MoveLeft } from "lucide-react";
import NotFound from "./NotFound.jsx";

export default function CountryProfile() {
  const { slug } = useParams();

  // Find the country object whose slug matches the current URL parameter
  const country = countries.find(
    (country) => country.slug === slug || country.name === slug
  );

  if (!country) {
    return <NotFound />;
  }
  return (
    <div className="p-4 md:p-8 mb-8">
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg w-fit mb-8"
      >
        <MoveLeft size={16} />
        <span>Back</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={country.flag}
            alt={country.name}
            className="object-cover w-full rounded-lg"
          />
        </div>
        {/* Country Information */}
        <div className="px-2.5 py-5">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            {country.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              {/* Native Name */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Native Name:</span>
                <span className="text-gray-600">{country.nativeName}</span>
              </p>

              {/* Population */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Population:</span>
                <span className="text-gray-600">
                  {formatPopulation(country.population)}
                </span>
              </p>

              {/* Region */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Region:</span>
                <span className="text-gray-600">{country.region}</span>
              </p>

              {/* Sub Region */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Sub Region:</span>
                <span className="text-gray-600">{country.subregion}</span>
              </p>

              {/* Capital */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Capital:</span>
                <span className="text-gray-600">{country.capital}</span>
              </p>
            </div>
            <div>
              {/* Top Level Domain */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Top Level Domain:</span>
                <span className="text-gray-600">{country.topLevelDomain}</span>
              </p>

              {/* Currency */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Currency:</span>
                <span className="text-gray-600">{country.currency}</span>
              </p>

              {/* Languages */}
              <p className="flex items-center space-x-3 mb-2">
                <span className="font-medium">Language:</span>
                <span className="text-gray-600">{country.language}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
