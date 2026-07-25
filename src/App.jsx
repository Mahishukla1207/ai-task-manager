import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

const STORAGE_KEY = "ai-task-manager-tasks";

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

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <Stats tasks={tasks} />
        <TaskForm addTask={addTask} />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;