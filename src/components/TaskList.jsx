function TaskList({ tasks, deleteTask, toggleComplete }) {
    console.log("toggleComplete prop:", toggleComplete);
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-xl shadow p-5 mb-4 ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <h3
              className={`font-bold text-lg ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h3>

            <p
              className={`mt-2 ${
                task.completed
                  ? "line-through text-gray-500"
                  : "text-gray-600"
              }`}
            >
              {task.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                {task.priority}
              </span>

              <div className="space-x-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`px-4 py-2 rounded-lg text-white ${
                    task.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
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