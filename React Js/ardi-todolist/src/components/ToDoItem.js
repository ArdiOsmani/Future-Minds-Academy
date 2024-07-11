import React, { useState } from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDatetime, setEditedDatetime] = useState(task.datetime);
  const [editedColor, setEditedColor] = useState(task.color);

  const handleSave = () => {
    updateTask(index, { ...task, task: editedTask, datetime: editedDatetime, color: editedColor });
    setIsEditing(false);
  };

  return (
    <li style={{ backgroundColor: task.color }}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
          />
          <input 
            type="datetime-local" 
            value={editedDatetime} 
            onChange={(e) => setEditedDatetime(e.target.value)} 
          />
          <input 
            type="color" 
            value={editedColor} 
            onChange={(e) => setEditedColor(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.task} - {new Date(task.datetime).toLocaleString()}
          </span>
          <div className="task-icones">
            <span className="material-icons verified" onClick={() => toggleCompleted(index)}>
              {task.isCompleted ? 'cancel' : 'verified'}
            </span>
            <span className="material-icons edit" onClick={() => setIsEditing(true)}>
              edit
            </span>
            <span className="material-icons delete" onClick={() => deleteTask(index)}>
              delete
            </span>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;




