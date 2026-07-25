import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

const STORAGE_KEY = "ai-task-manager-tasks";
const THEME_STORAGE_KEY = "ai-task-manager-theme";

function App() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window === "undefined") return [];

    try {
      const storedTasks = window.localStorage.getItem(STORAGE_KEY);
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
    } catch (error) {
      console.error("Failed to load theme from localStorage:", error);
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [isDark]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: trimmedTitle }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesFilter;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-3xl">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isDark={isDark}
        />
        <FilterBar filter={filter} setFilter={setFilter} isDark={isDark} />
        <Stats tasks={tasks} isDark={isDark} />
        <TaskForm addTask={addTask} isDark={isDark} />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
          isDark={isDark}
        />
      </div>
    </div>
  );
}

export default App;