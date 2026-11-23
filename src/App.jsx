import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text === "") return;

    setTasks([...tasks, { name: text, done: false }]);
    setText("");
  };

  const toggleTask = (index) => {
    const temp = [...tasks];
    temp[index].done = !temp[index].done;
    setTasks(temp);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>React TODO Application</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>

            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;