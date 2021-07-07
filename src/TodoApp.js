import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ReviewList from "./ReviewList";

const TodoApp = () => {

  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="container">
      <h1> My to-do list </h1>
      <TodoInput
        textInput={textInput}
        setTextInput={setTextInput}
        tasks={tasks}
        setTasks={setTasks}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <TodoList
        textInput={textInput}
        setTextInput={setTextInput}
        tasks={tasks}
        setTasks={setTasks}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      {tasks.length >=1 && <ReviewList tasks={tasks} setTasks={setTasks} / >}
    
    </div>
  );
}


export default TodoApp;

