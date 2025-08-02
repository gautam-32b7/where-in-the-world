import CountryCard from "./CountryCard";

export default function CountriesGrid({ countries }) {
  return (
    <div className="px-12 py-6 grid md:grid-cols-4 gap-8">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}
