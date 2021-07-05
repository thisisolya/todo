import React from "react";
import AddTask from "./add_task";
import TodoList from "./todo_list";
import ReviewList from "./review_list";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> My to-do list </h1>
        <AddTask />
        <TodoList />
        <ReviewList />
      </div>
    );
  }
}

export default TodoApp;
