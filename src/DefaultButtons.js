import React from "react"


const DefaultButtons = ({ deleteTask, oneTaskId, setIsEditing, isHovered }) => {

    if (!isHovered) return null;
    return (<div>
        <button className="edit" onClick={() => setIsEditing(true)} >
            <span className="material-icons material-icons-outlined">
                edit
            </span>
        </button>
        <button className="delete" onClick={() => deleteTask(oneTaskId)}>
            <span className="material-icons material-icons-outlined">
                delete
            </span>
        </button>
    </div>
    );
}


export default DefaultButtons