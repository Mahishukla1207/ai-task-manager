import { useState } from "react";

function TaskForm({ addTask }) {
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
      className="bg-white p-6 rounded-xl shadow-md mt-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Add New Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-3 mb-3"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-lg p-3 mb-3"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border rounded-lg p-3 mb-3"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        className="bg-blue-600 text-white w-full py-3 rounded-lg"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;