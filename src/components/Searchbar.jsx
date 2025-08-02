import { Search } from "lucide-react";

export default function Searchbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLE SUBMIT");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search for a country ..."
          className="pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 w-sm"
        />
      </form>
    </div>
  );
}
