function TaskList({ tasks, deleteTask }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">
          No tasks yet.
        </p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl shadow p-5 mb-4"
          >
            <h3 className="font-bold text-lg">
              {task.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {task.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                {task.priority}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;