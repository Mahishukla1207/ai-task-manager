import { FiMoon, FiSun, FiCheckCircle } from "react-icons/fi";

function Header({ isDark, toggleTheme }) {
  return (
    <header
      className={`rounded-xl p-6 shadow-md transition-colors duration-300 ${
        isDark ? "bg-slate-800 text-slate-100" : "bg-blue-600 text-white"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="flex items-center justify-center gap-2 text-2xl font-bold sm:justify-start sm:text-3xl">
            <FiCheckCircle className="text-2xl" />
            AI Task Manager
          </h1>
          <p className="mt-2 text-sm">
            Organize your work smarter.
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className={`self-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 sm:self-auto ${
            isDark
              ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          {isDark ? <FiSun className="mr-1 inline" /> : <FiMoon className="mr-1 inline" />}
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;