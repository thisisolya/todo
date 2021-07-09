import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";


const TodoApp = () => {

  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  }


  const deleteTask = (clickedId) => {
    clickedId ? setTasksArray(tasksArray.filter((clickedTask) => clickedId !== clickedTask.id)) : setTasksArray([])
  }

  const changeTaskStatus = (clickedId) => {
    setTasksArray(tasksArray.map((item) => (item.id === clickedId) ? ({ ...item, completed: !item.completed }) : item))
  }

  return (
    <div className="container">
      <h1> My to-do list </h1>
      <TodoInput
        addTaskToArray={addTaskToArray}
      />
      <TodoList
        tasksArray={tasksArray}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
      {tasksArray.length !== 0 && <Footer tasksArrayLength={tasksArray.length} deleteTask={deleteTask} />}
    </div>
  );
}


export default TodoApp;

