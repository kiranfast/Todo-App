import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('Incomplete');

  const handleAddTask = () => {
    if (taskName && taskDescription) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        status: taskStatus,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
      setTaskStatus('Incomplete');
    }
  };

  return (
    <div className="App">
      <h1>Work Description</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="TASK NAME"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="TASK DESCRIPTION"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        >
          <option value="Incomplete">Incomplete</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
