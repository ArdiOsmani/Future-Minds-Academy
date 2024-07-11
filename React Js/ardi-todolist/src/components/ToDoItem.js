const ToDoItem = ({ }) => {
    return (
        <>
            <li>
                Task 1
                <div className="task-icones">
                    <span className="material-icons verified">verified</span>
                    <span className="material-icons edit">edit</span>
                </div>
            </li>
            <li>
                Task 2
                <div className="task-icones">
                    <span className="material-icons cancel">block</span>
                    <span className="material-icons save">save</span>
                </div>
            </li>
        </>
    );
}

export default ToDoItem;