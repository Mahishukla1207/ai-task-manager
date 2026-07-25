function FilterBar({ filter, setFilter }) {
  const buttons = ["All", "Pending", "Completed"];

  return (
    <div className="flex gap-3 mt-4">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-4 py-2 rounded-lg ${
            filter === btn
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;