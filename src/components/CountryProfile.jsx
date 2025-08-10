import { MoveLeft } from "lucide-react";
import formatPopulation from "../utils/formatPopulation.js";

export default function CountryProfile({ country }) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currency,
    languages,
    borders,
    flag,
  } = country;
  return (
    <div className="px-12 py-6">
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded text-gray-900 cursor-pointer mb-6
      "
      >
        <span>
          <MoveLeft size={20} />
        </span>
        <span>Back</span>
      </button>

      <div className="grid md:grid-cols-2 items-start gap-6">
        <div className="border border-gray-300 rounded overflow-hidden">
          <img src={flag} className="" />
        </div>
        <div className="p-4">
          <h2 className="text-2xl text-gray-950 font-medium mb-6">{name}</h2>
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Native Name:</span>
                <span className="text-gray-500">{nativeName}</span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Population:</span>
                <span className="text-gray-500">
                  {formatPopulation(population)}
                </span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Region:</span>
                <span className="text-gray-500">{region}</span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Sub Region:</span>
                <span className="text-gray-500">{subregion}</span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Capital:</span>
                <span className="text-gray-500">{capital}</span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">
                  Top Level Domain:
                </span>
                <span className="text-gray-500">{topLevelDomain}</span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Currency:</span>
                <span className="text-gray-500">{currency}</span>
              </p>
              <p className="flex items-center gap-1 mb-2">
                <span className="text-gray-900 font-medium">Language:</span>
                <span className="text-gray-500">{languages}</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-gray-900 font-medium">Border Countries:</p>

            {borders.length === 0 ? (
              <p className="text-gray-500 italic">
                This country is an island nation and has no land borders.
              </p>
            ) : (
              <ul className="grid grid-cols-3 gap-2">
                {borders.map((border, index) => (
                  <li
                    key={index}
                    className="p-2 border border-gray-300 rounded text-gray-500"
                  >
                    {border}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
