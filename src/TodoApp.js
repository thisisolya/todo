import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";
import EditSettings from './EditSettings'


export const EditingContext = React.createContext();

const TodoApp = () => {

  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  }

  const deleteTask = (clickedId) => {
    clickedId ? setTasksArray(tasksArray.filter((clickedTask) => clickedId !== clickedTask.id)) : setTasksArray([])
  }

  const editTaskProperties = (clickedItem) => {
    setTasksArray(tasksArray.map((item) => (item.id === clickedItem.id) ? clickedItem : item))
  }

  const [editingAllowed, seteEditingAllowed] = useState(true);

  const toggleEditingSettings = () => {
      seteEditingAllowed(editingAllowed => !editingAllowed)
  }

  useEffect(() => {
    const saved = localStorage.getItem('tasks') || [];
    setTasksArray(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
  }, [tasksArray])

  return (
    <EditingContext.Provider value={editingAllowed}>
      <div className="container">
        <h1> My to-do list </h1>
        <TodoInput addTaskToArray={addTaskToArray} />
        <EditSettings toggleEditingSettings={toggleEditingSettings}/>
        <TodoList
          tasksArray={tasksArray}
          deleteTask={deleteTask}
          editTaskProperties={editTaskProperties}
        />
        <Footer
          tasksArrayLength={tasksArray.length}
          deleteTask={deleteTask} />
      </div>
    </EditingContext.Provider>

  );
}


export default TodoApp;

