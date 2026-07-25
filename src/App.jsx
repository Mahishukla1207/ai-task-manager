import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks}
        deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;