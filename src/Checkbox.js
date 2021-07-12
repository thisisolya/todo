import React from "react"


const Checkbox = ({ oneTask, changeTaskStatus }) => {

    const initializeStatusChanges = () => {
        changeTaskStatus(oneTask.id)
    }

    return (
        <input type="checkbox" onChange={initializeStatusChanges} />
    )
}


export default Checkbox