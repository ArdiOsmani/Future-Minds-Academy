
import ToDoItem from "./ToDoItem";

const ToDoList=({tasks, toggleCompleted, updateTask})=>{
    return(
    <ul id="task-list" className="row-direction task-list ">
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
);
};

export default ToDoList;
