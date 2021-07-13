import React from "react"


const DefaultButtons = ({ deleteTask, oneTask, setIsEditing }) => {

    const initializeDelete = () => {
        deleteTask(oneTask.id)
    }

    return (
        <div>
            <button className="edit" onClick={() => setIsEditing(true)} >
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