import React, { useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ tasksArray, deleteTask, changeTaskStatus }) => {

    const [hover, setHover] = useState(false);

    const setHoverActive = () => {
        setHover(true)
    }

    const setHoverPassive = () => {
        setHover(false)
    }

    return (
        <div className="todo-list" onMouseEnter={setHoverActive} onMouseLeave={setHoverPassive}>
            {tasksArray.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    key={oneTask.id}
                    deleteTask={deleteTask}
                    changeTaskStatus={changeTaskStatus}
                    hover={hover}
                />
            )}
        </div>
    );
}


export default TodoList;
