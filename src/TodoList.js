import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks, changeStatus }) => {

    const deleteTask = (clickedId) => {
        setTasks(tasks.filter((clickedTask) => clickedTask.id !== clickedId));
    }

    return (
        <div className="todo-list">
            {tasks.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    deleteTask={deleteTask}
                    changeStatus={changeStatus}
                    key={oneTask.id}
                />
            )}
        </div>
    );
}




export default TodoList;
