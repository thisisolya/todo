import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ReviewList from "./ReviewList";

const TodoApp = () => {

  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (obj) => {
    setTasks([...tasks, obj]);
  }

  const changeStatus = (currentTask) => {
    setTasks(tasks.map((item) => (item.id === currentTask.id) ? ({ ...item, completed: !currentTask.completed }) : item))
  }

  return (
    <div className="container">
      <h1> My to-do list </h1>
      <TodoInput
        textInput={textInput}
        setTextInput={setTextInput}
        addTask={addTask}
      />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        changeStatus={changeStatus}
      />
      {!tasks.length || <ReviewList tasks={tasks.length} setTasks={setTasks} />}

    </div>
  );
}


export default TodoApp;

