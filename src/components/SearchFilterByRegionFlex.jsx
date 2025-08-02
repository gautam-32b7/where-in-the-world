import Search from "./Searchbar.jsx";
import FilterByRegion from "./FilterByRegion.jsx";

export default function SearchFilterByRegionFlex({ onFilterByRegion }) {
  return (
    <div className="px-12 py-6 flex items-center justify-between mb-6">
      <Search />
      <FilterByRegion onFilterByRegion={onFilterByRegion} />
    </div>
  );
}
