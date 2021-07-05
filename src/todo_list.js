import React from "react";
import TodoItem from "./todo_item";

function TodoList(props) {
  return (
    <div className = "todo_list">
      <TodoItem title = "a task..."/>
      <TodoItem title = "another task..."/>
      <TodoItem title = "one more task..."/>
    </div>
  );
}
export default TodoList;
