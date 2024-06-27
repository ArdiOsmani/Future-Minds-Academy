import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleCompleted, updateTask, filterTasks }) => {
  return (
    <div className='col-2 row-direction align-center gap-2 background-container list-height'>
      <div className='row just-between wrapper-full'>
        <button className='col-1' type="submit" onClick={() => filterTasks('all')}>All</button>
        <button className='col-1' type="submit" onClick={() => filterTasks('yesterday')}>Yesterday</button>
        <button className='col-1' type="submit" onClick={() => filterTasks('today')}>Today</button>
        <button className='col-1' type="submit" onClick={() => filterTasks('tomorrow')}>Tomorrow</button>
      </div>
      <hr/>
      <ul className='col-4'>
        {tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            toggleCompleted={toggleCompleted} 
            updateTask={updateTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
