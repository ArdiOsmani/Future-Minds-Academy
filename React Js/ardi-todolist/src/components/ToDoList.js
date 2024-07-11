import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleCompleted, updateTask, deleteTask }) => {
  return (
    <ul id="task-list" className="row-direction task-list">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          index={index}
          toggleCompleted={toggleCompleted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;


