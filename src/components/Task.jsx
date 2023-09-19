import React, { useState } from 'react';
import { FaTrash, FaCheck, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onToggle }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    if (name.trim() !== '') {
      task.name = name;
      setEditing(false);
    }
  }

  function handleCancel() {
    setEditing(false);
  }

  return (
    <div className="task">
      {editing ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleSave}><FaSave /></button>
          <button onClick={handleCancel}><FaTimes /></button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
          <div>
            <button onClick={() => onToggle(task.id)}><FaCheck /></button>
            <button onClick={handleEdit}><FaEdit /></button>
            <button onClick={() => onDelete(task.id)}><FaTrash /></button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
