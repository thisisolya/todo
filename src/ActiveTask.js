import React, { useState } from "react"
import EditingButtons from "./EditingButtons"


const ActiveTask = ({ oneTask, setIsEditing, changeTaskStatus }) => {

    const [editedText, setEditedText] = useState(oneTask.text);

    const saveChanges = () => {
        changeTaskStatus(oneTask.id, editedText);
        setIsEditing(false);
    }

    const discardChanges = () => {
        changeTaskStatus();
        setIsEditing(false);
    }

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    }

    return (
        <div className="task">
            <input type="text" onChange={handleInputChange} value={editedText} />
            <EditingButtons
                editedTaskLength={editedText.length}
                discardChanges={discardChanges}
                saveChanges={saveChanges} />
        </div>
    )
}


export default ActiveTask