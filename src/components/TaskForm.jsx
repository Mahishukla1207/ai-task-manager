import { useState } from "react";

function TaskForm({ addTask, isDark }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setPriority("High");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-6 rounded-xl p-6 shadow-md transition-colors duration-300 ${
        isDark ? "bg-slate-800 text-slate-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="mb-4 text-xl font-semibold">Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`mb-3 w-full rounded-lg border p-3 transition-colors duration-300 ${
          isDark
            ? "border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`mb-3 w-full rounded-lg border p-3 transition-colors duration-300 ${
          isDark
            ? "border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={`mb-3 w-full rounded-lg border p-3 transition-colors duration-300 ${
          isDark
            ? "border-slate-600 bg-slate-700 text-slate-100"
            : "border-gray-300 bg-white text-gray-900"
        }`}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="w-full rounded-lg bg-blue-600 py-3 text-white transition-colors duration-300 hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;