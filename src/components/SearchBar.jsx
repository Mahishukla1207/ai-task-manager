import { FiSearch } from "react-icons/fi";

function SearchBar({ searchQuery, setSearchQuery, isDark }) {
  return (
    <div className="relative mt-6">
      <FiSearch className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? "text-slate-400" : "text-gray-400"}`} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full rounded-lg border py-3 pl-10 pr-3 shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isDark
            ? "border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      />
    </div>
  );
}

export default SearchBar;