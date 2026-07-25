function Header({ isDark, toggleTheme }) {
  return (
    <header
      className={`rounded-xl p-6 shadow-md transition-colors duration-300 ${
        isDark ? "bg-slate-800 text-slate-100" : "bg-blue-600 text-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">AI Task Manager 🚀</h1>
          <p className="mt-2 text-sm">
            Organize your work smarter.
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
            isDark
              ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;