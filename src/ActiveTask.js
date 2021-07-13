import React, { useState } from "react"
import EditingButtons from "./EditingButtons"


const ActiveTask = ({ oneTask, setIsEditing }) => {

    const [editedText, setEditedText] = useState(oneTask.text);

    const saveChanges = () => {
        oneTask.text = editedText;
        setIsEditing(false);
    }

    const discardChanges = () => {
        setEditedText(oneTask.text);
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