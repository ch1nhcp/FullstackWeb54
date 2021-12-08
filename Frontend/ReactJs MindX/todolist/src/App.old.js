import React from "react";
import clsx from "clsx";

function App() {
  const [text, setText] = React.useState("");
  const [tasks, setTasks] = React.useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (!storedTasks) {
      return [];
    }
    return JSON.parse(storedTasks);
  });

  const handleAddTask = () => {
    if (text) {
      setTasks((pretask) => [
        ...pretask,
        { content: text },
        { isCompleted: false },
      ]);
      setText("");
      console.log(text, tasks);
    }
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const clsxList = clsx({
    border: tasks.length > 0,
    "divide-y divide-gray-100 mt-8": true,
  });

  return (
    <div className="container mx-auto">
      <div className="mt-3 flex">
        <div className="flex-grow">
          <input
            className="w-full h-full px-2 border rounded"
            value={text}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTask(text);
              }
            }}
            onchange={handleChangeInput}
            placeholder="Enter new task..."
          />
        </div>
        <button className="px-2 py-3 text-white bg-blue-500">Add</button>
      </div>
      <ul className="divide-y divide-gray-100 border mt-8">
        {tasks.map((task, idx) => {
          return (
            <li className="p-2 flex">
              <div className="mr-2 inline-flex items-center flex-grow">
                {task.content}
              </div>
              <button className="px-3 py-2 text-white bg-red-500">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
