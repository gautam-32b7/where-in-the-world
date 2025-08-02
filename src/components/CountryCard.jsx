import formatPopulation from "../utils/formatPopulation.js";

export default function CountryCard({ country }) {
  return (
    <article className="border border-gray-300 rounded overflow-hidden">
      <img
        src={country.flag}
        alt={country.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg text-gray-900 font-bold mb-4">{country.name}</h2>
        <p className="flex items-center gap-1 mb-2">
          <span className="text-gray-900 font-medium">Population: </span>
          <span className="text-gray-500">
            {formatPopulation(country.population)}
          </span>
        </p>
        <p className="flex items-center gap-1 mb-2">
          <span className="text-gray-900 font-medium">Region:</span>
          <span className="text-gray-500">{country.region}</span>
        </p>
        <p className="flex items-center gap-1 mb-2">
          <span className="text-gray-900 font-medium">Capital: </span>
          <span className="text-gray-500">{country.capital}</span>
        </p>
      </div>
    </article>
  );
}
