import React from "react";
import { useEditingContext } from './EditContext';


const DefaultButtons = ({ deleteTask, oneTaskId, setIsEditing, isHovered }) => {

    const isEditingAllowed = useEditingContext();

    if (!isHovered) return null;
    return (<div>
        {isEditingAllowed && <button className="edit" onClick={() => setIsEditing(true)} >
            <span className="material-icons material-icons-outlined">
                edit
            </span>
        </button>}
        <button className="delete" onClick={() => deleteTask(oneTaskId)}>
            <span className="material-icons material-icons-outlined">
                delete
            </span>
        </button>
    </div>
    );
}


export default DefaultButtons