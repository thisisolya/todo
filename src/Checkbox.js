import React from "react"


const Checkbox = ({ oneTask, editTaskProperties }) => {

    const initializeStatusChanges = () => {
        editTaskProperties( oneTask.completed =!oneTask.completed )
    }

    return (
        <input type="checkbox" checked={oneTask.completed} onChange={initializeStatusChanges} />
    )
}


export default Checkbox