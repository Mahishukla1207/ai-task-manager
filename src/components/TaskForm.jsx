function TaskForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        className="w-full border rounded-lg p-3 mb-3"
      />

      <textarea
        placeholder="Task description"
        className="w-full border rounded-lg p-3 mb-3"
      />

      <select className="w-full border rounded-lg p-3 mb-3">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full hover:bg-blue-700">
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;