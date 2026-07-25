function TaskList({ tasks }) {
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
            className="bg-white rounded-lg shadow p-4 mb-3"
          >
            <h3 className="font-bold">
              {task.title}
            </h3>

            <p>{task.description}</p>

            <span className="text-blue-600 text-sm">
              {task.priority}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;