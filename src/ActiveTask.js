import React, { useState } from "react"
import EditingButtons from "./EditingButtons"


const ActiveTask = ({ oneTask, setIsEditing, changeTaskStatus }) => {

    const [editedText, setEditedText] = useState(oneTask.text);

    const saveChanges = () => {
        let item = {
            completed: oneTask.completed,
            id: oneTask.id,
            text: editedText,
        }
        changeTaskStatus(item);
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
                setIsEditing={setIsEditing}
                saveChanges={saveChanges} />
        </div>
    )
}


export default ActiveTask