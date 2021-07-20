import React, { useContext } from "react";
import { EditingContext } from './TodoApp';


const DefaultButtons = ({ deleteTask, oneTaskId, setIsEditing, isHovered }) => {

    const isEditingAllowed = useContext(EditingContext);

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