import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";


const TodoApp = () => {

  let [tasksArray, modifyTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    modifyTasksArray([...tasksArray, task]);
  }


  const deleteTask = (clickedId) => {
    (clickedId === "clear-all") ? (modifyTasksArray(tasksArray = [])) : modifyTasksArray(tasksArray.filter((clickedTask) => clickedId !== clickedTask.id))
  }

  const changeTaskStatus = (currentTask) => {
    modifyTasksArray(tasksArray.map((item) => (item.id === currentTask) ? ({ ...item, completed: !item.completed }) : item))
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
      {tasksArray.length !== 0 && <Footer tasksArray={tasksArray.length} deleteTask={deleteTask} />}
    </div>
  );
}


export default TodoApp;

