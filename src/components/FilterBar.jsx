function FilterBar({ filter, setFilter, isDark }) {
  const buttons = ["All", "Pending", "Completed"];

  return (
    <div className="mt-4 flex gap-3">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`rounded-lg px-4 py-2 transition-colors duration-300 ${
            filter === btn
              ? "bg-blue-600 text-white"
              : isDark
              ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;