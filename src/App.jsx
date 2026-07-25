import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const editTask = (id) => {
    const newTitle = prompt("Enter new task title:");

    if (!newTitle || !newTitle.trim()) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  };
  const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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