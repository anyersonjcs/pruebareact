import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onDelete={onDelete} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
