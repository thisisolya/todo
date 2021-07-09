import React from "react"


const TodoItem = ({ oneTask, deleteTask, changeTaskStatus }) => {

    const initializeDelete = () => {
        deleteTask(oneTask.id)
    }

    const initializeStatusChanges = () => {
        changeTaskStatus(oneTask.id)
    }

    return (
        <div className="task">
            <input type="checkbox" onChange={initializeStatusChanges} />
            <p className={`${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            <button onClick={initializeDelete}>
                <span className="material-icons material-icons-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}


export default TodoItem