import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;