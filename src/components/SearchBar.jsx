function SearchBar({ searchQuery, setSearchQuery, isDark }) {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full rounded-lg border p-3 shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isDark
            ? "border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      />
    </div>
  );
}

export default SearchBar;