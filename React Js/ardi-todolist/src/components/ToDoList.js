import ToDoItem from "./ToDoItem";

const ToDoList=({})=>{
    return(
    <ul id="task-list" className="row-direction task-list">
      <ToDoItem/>
    </ul>    
    );
}

export default ToDoList;