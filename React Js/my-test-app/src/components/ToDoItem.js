import {useEffect, useState} from 'react';
import ToDoList from './ToDoList';

const ToDoItem = ({ task, index, toggleCompleted, updateTask }) => {
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
  };

  return (
    <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
      {task.task} - {task.date} {task.time}
    </li>
  );

}

export default ToDoItem;