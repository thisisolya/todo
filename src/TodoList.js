import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks, setCompleted, completed }) => {
    return (
        <div className="todo-list">
            {tasks.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    key={oneTask.id}
                    tasks={tasks}
                    setTasks={setTasks}
                    setCompleted = {setCompleted}
                    completed = {oneTask.completed}
                />
            )}
        </div>
    );
}




export default TodoList;
