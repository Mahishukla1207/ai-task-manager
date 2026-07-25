function Stats({ tasks, isDark }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      accent: "bg-gradient-to-br from-blue-500 to-blue-600 text-white",
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      accent: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white",
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      accent: "bg-gradient-to-br from-amber-500 to-orange-500 text-white",
    },
  ];

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl p-5 shadow-md transition-all duration-300 hover:-translate-y-1 ${card.accent} ${
            isDark ? "ring-1 ring-white/10" : ""
          }`}
        >
          <p className="text-sm font-medium opacity-90">{card.title}</p>
          <p className="mt-2 text-3xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
