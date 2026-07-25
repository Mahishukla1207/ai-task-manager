function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;