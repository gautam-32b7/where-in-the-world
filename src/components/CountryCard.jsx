import { Link } from "react-router";

export default function CountryCard({ country }) {
  return (
    <Link
      to={country.slug}
      className="border border-gray-300 rounded-lg overflow-hidden hover:transition-transform duration-200 hover:scale-[1.02]"
    >
      <div>
        <img
          src={country.flag}
          alt={country.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          {/* Name */}
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {country.name}
          </h2>
          {/* Population */}
          <p className="flex items-center space-x-3 mb-2">
            <span className="font-medium">Population:</span>
            <span className="text-gray-600">{country.population}</span>
          </p>
          {/* Region */}
          <p className="flex items-center space-x-3 mb-2">
            <span className="font-medium">Region:</span>
            <span className="text-gray-600">{country.region}</span>
          </p>
          {/* Capital */}
          <p className="flex items-center space-x-3 mb-2">
            <span className="font-medium">Capital:</span>
            <span className="text-gray-600">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
