import Search from "./Searchbar.jsx";
import FilterByRegion from "./FilterByRegion.jsx";

export default function SearchFilterByRegionFlex({
  onFilterByRegion,
  trie,
  query,
  setQuery,
}) {
  return (
    <div className="px-12 py-6 flex items-center justify-between mb-6">
      <Search trie={trie} query={query} setQuery={setQuery} />
      <FilterByRegion onFilterByRegion={onFilterByRegion} />
    </div>
  );
}
