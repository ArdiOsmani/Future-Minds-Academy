import React from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask, deleteTask }) => {
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
