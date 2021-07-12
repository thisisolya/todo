import React from "react"
import EditingButtons from "./EditingButtons"


const ActiveTask = ({ oneTask, passiveTask, hover, setTaskEdition, taskEdition }) => {

    const handleInputChange = (e) => {
        setTaskEdition(e.target.value);
    }

    const discardChanges = () => {
        setTaskEdition(oneTask.text);
    }

    const saveChanges = () => {
        oneTask.text = taskEdition;
    }

    return (
        <div className="task">
            <input type="text" onChange={handleInputChange} value={taskEdition || oneTask.text} />
            {hover && <EditingButtons taskEdition={taskEdition} discardChanges={discardChanges} saveChanges={saveChanges} passiveTask={passiveTask} oneTask={oneTask} />}
        </div>
    )
}


export default ActiveTask