import React, { useState } from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask, deleteTask }) => {

    const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDate, setEditedDate] = useState(task.date);
  const [editedTime, setEditedTime] = useState(task.time);
  const [editedIsImportant, setEditedIsImportant] = useState(task.isImportant);
  const [editedColor, setEditedColor] = useState(task.color);

  const handleSave = () => {
    updateTask(index, {
      task: editedTask,
      date: editedDate,
      time: editedTime,
      isImportant: editedIsImportant,
      color: editedColor,
      isCompleted: task.isCompleted,
    });
    setIsEditing(false);
    }
    
  return (

    <li style={{ backgroundColor: task.color }}>
      <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.task} - {new Date(task.datetime).toLocaleString()}
      </span>
      <div className="task-icones">
        <span className="material-icons verified" onClick={() => toggleCompleted(index)}>
          {task.isCompleted ? 'cancel' : 'verified'}
        </span>
        <span className="material-icons edit" onClick={() => updateTask(index, task)}>
          edit
        </span>
        <span className="material-icons delete" onClick={() => deleteTask(index)}>
          delete
        </span>
      </div>
    </li>
  );
};

export default ToDoItem;
