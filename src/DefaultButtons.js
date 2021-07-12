import React from "react"


const DefaultButtons = ({ deleteTask, oneTask, activateTaskEditing }) => {

    const initializeDelete = () => {
        deleteTask(oneTask.id)
    }

    const actvateTask = () => {
        activateTaskEditing()
    }

    return (
        <div>
            <button className="edit" onClick={actvateTask} >
                <span className="material-icons material-icons-outlined">
                    edit
                </span>
            </button>
            <button className="delete" onClick={initializeDelete}>
                <span className="material-icons material-icons-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}


export default DefaultButtons