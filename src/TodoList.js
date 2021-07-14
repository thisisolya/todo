import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ tasksArray, deleteTask, editTaskProperties }) => {

    return (
        <div className="todo-list">
            {tasksArray.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    key={oneTask.id}
                    deleteTask={deleteTask}
                    editTaskProperties={editTaskProperties}
                />
            )}
        </div>
    );
}


export default TodoList;
