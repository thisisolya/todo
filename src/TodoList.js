import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ tasksArray, deleteTask, changeTaskStatus }) => {

    return (
        <div className="todo-list">
            {tasksArray.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    key={oneTask.id}
                    deleteTask={deleteTask}
                    changeTaskStatus={changeTaskStatus}
                />
            )}
        </div>
    );
}


export default TodoList;
