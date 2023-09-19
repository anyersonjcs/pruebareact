import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setNewTask('');
    }
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleDeleteAllTasks() {
    setTasks([]);
  }

  return (
    <div>
      <Header />
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Agregar tarea</button>
        <button onClick={handleDeleteAllTasks}>Borrar todas las tareas</button>
      </div>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
