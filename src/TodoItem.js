import React from "react"

const TodoItem = ({ textInput, setTextInput, tasks, setTasks, oneTask, completed, setCompleted }) => {

    const deleteTask = () => {
        setTasks(tasks.filter((clickedTask) => clickedTask.id !== oneTask.id));
    }

    const changeStatus = () => {
        setCompleted(oneTask.completed = !oneTask.completed);
        setCompleted(completed = oneTask.completed);
    }

    return (
        <div className="task">
            <input type="checkbox" onChange={changeStatus}  />
            <p className={`task-point ${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            <button className="delete-button" onClick={deleteTask}>
                <span className="material-icons material-icons-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}

export default TodoItem