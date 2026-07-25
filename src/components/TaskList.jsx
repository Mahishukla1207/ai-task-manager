import { useState } from "react";
import { FiEdit2, FiTrash2, FiCheckCircle, FiXCircle } from "react-icons/fi";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
  isDark,
}) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEditing = (id) => {
    editTask(id, editValue);
    setEditingId(null);
    setEditValue("");
  };

  return (
    <div className="mt-6">
      <h2 className={`mb-4 text-xl font-semibold ${isDark ? "text-slate-100" : "text-gray-900"}`}>
        Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className={isDark ? "text-slate-400" : "text-gray-500"}>
          No tasks yet.
        </p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`mb-4 animate-[fadeIn_0.25s_ease-out] rounded-xl p-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
              task.completed
                ? isDark
                  ? "bg-emerald-900/40 text-slate-100"
                  : "bg-green-100 text-gray-900"
                : isDark
                ? "bg-slate-800 text-slate-100"
                : "bg-white text-gray-900"
            }`}
          >
            {editingId === task.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className={`w-full rounded-lg border p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? "border-slate-600 bg-slate-700 text-slate-100"
                      : "border-gray-300 bg-white text-gray-900"
                  }`}
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => saveEditing(task.id)}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-700"
                  >
                    <FiCheckCircle />
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-600"
                  >
                    <FiXCircle />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <h3
                className={`text-lg font-bold ${
                  task.completed
                    ? "text-gray-500 line-through"
                    : ""
                }`}
              >
                {task.title}
              </h3>
            )}

            <p
              className={`mt-2 ${
                task.completed
                  ? isDark
                    ? "text-slate-300 line-through"
                    : "text-gray-500 line-through"
                  : isDark
                  ? "text-slate-300"
                  : "text-gray-600"
              }`}
            >
              {task.description}
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span
                className={`w-fit rounded-full px-3 py-1 text-sm ${
                  isDark
                    ? "bg-blue-900/40 text-blue-200"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {task.priority}
              </span>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => startEditing(task)}
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  <FiEdit2 />
                  Edit
                </button>

                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-transform duration-200 hover:-translate-y-0.5 ${
                    task.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  <FiCheckCircle />
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-red-600"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;