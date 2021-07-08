import React from "react"

const TodoItem = ({ oneTask, deleteTask, changeStatus }) => {

    const initializeDelete = () => {
        deleteTask(oneTask.id)
    }

    const initializeStatusChanges = () => {
        changeStatus(oneTask)
    }

    return (
        <div className="task">
            <input type="checkbox" onChange={initializeStatusChanges} />
            <p className={`task-point ${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            <button className="delete-button" onClick={initializeDelete}>
                <span className="material-icons material-icons-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}

export default TodoItem