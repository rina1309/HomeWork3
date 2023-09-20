import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addToList = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
    <div className='wrapper'>
      <h1>ToDo List</h1>
      <div className='container'>
        <input
          type="text"
          placeholder="Добавить задачу"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addToList}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

