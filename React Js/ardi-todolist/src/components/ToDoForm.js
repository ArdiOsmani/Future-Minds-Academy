 import { useEffect, useState } from "react";
 
 const ToDoForm=({addTask})=>{

    const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date && time) {
      addTask({ task, date, time, isImportant, color, isCompleted: false });
      setTask('');
      setDate('');
      setTime('');
      setIsImportant(false);
      setColor('#000000');
    }
  };


    return(
        <form id="todo-form m-1 p-1">
      <div className="form-group">
        <label for="task">Task</label>
        <input type="text" id="task" name="task" placeholder="Enter your task..."/>
      </div>
      <div className="form-group">
        <label for="datetime">Date and Time</label>
        <input type="datetime-local" id="datetime" name="datetime"/>
      </div>
      <div className="row form-group-row">
        <div className="form-group checkbox-wrapper">Important
          <input type="checkbox" id="important" name="important"/>
          <label for="important">
            <span className="tick_mark"></span>
          </label>
        </div>
        <div className="form-group">
          <label for="color">Color</label>
          <input type="color" id="color" name="color"/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">ADD NEW TASK</button>
      <div className="button-group">
        <button type="button" className="btn btn-primary-outline btn-all">All</button>
        <button type="button" className="btn btn-primary-outline btn-all">Today</button>
        <button type="button" className="btn btn-primary-outline btn-all">Tomorrow</button>
        <button type="button" className="btn btn-primary-outline btn-all">Yesterday</button>
      </div>
    </form>
    );
}

export default ToDoForm;