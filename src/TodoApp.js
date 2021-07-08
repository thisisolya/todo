import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ReviewList from "./ReviewList";

const TodoApp = () => {

  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(false);


  return (
    <div className="container">
      <h1> My to-do list </h1>
      <TodoInput
        textInput={textInput}
        setTextInput={setTextInput}
        tasks={tasks}
        setTasks={setTasks}
        // completed = {completed}
      />
      <TodoList
        textInput={textInput}
        setTextInput={setTextInput}
        tasks={tasks}
        setTasks={setTasks}
        setCompleted={setCompleted}
        completed = {completed}
      />
      {!tasks.length || <ReviewList tasks={tasks.length} setTasks={setTasks} / >}
    
    </div>
  );
}


export default TodoApp;

