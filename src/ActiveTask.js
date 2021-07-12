import React from "react"
import EditingButtons from "./EditingButtons"


const ActiveTask = ({ saveChanges, discardChanges, setEditedTask, editedTask }) => {


    const handleInputChange = (e) => {
        setEditedTask(e.target.value);
    }

    return (
        <div className="task">
            <input type="text" onChange={handleInputChange} value={editedTask} />
            <EditingButtons
                editedTaskLength={editedTask.length}
                discardChanges={discardChanges}
                saveChanges={saveChanges}
            />
        </div>
    )
}


export default ActiveTask