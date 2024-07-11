import React, { useState } from "react";

export default function ToDoForm({ addTask, filterTasks }) {
  const [task, setTask] = useState('');
  const [datetime, setDatetime] = useState('');
  const [important, setImportant] = useState(false);
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      task,
      datetime,
      important,
      color,
      isCompleted: false,
    };
    addTask(newTask);
    setTask('');
    setDatetime('');
    setImportant(false);
    setColor('');
  };

  return (
    <form id="todo-form" className="m-1 p-1" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter your task..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="datetime">Date and Time</label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={datetime}
          onChange={(event) => setDatetime(event.target.value)}
        />
      </div>
      <div className="row form-group-row">
        <div className="form-group checkbox-wrapper">
          Important
          <input
            type="checkbox"
            id="important"
            name="important"
            checked={important}
            onChange={(event) => setImportant(event.target.checked)}
          />
          <label htmlFor="important">
            <span className="tick_mark"></span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        ADD NEW TASK
      </button>
      <div className="button-group">
        <button type="button" className="btn btn-primary-outline btn-all" onClick={() => filterTasks('all')}>
          All
        </button>
        <button type="button" className="btn btn-primary-outline btn-all" onClick={() => filterTasks('today')}>
          Today
        </button>
        <button type="button" className="btn btn-primary-outline btn-all" onClick={() => filterTasks('tomorrow')}>
          Tomorrow
        </button>
        <button type="button" className="btn btn-primary-outline btn-all" onClick={() => filterTasks('yesterday')}>
          Yesterday
        </button>
      </div>
    </form>
  );
}
