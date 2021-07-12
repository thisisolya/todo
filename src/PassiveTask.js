import React from "react"
import Checkbox from "./Checkbox"
import DefaultButtons from "./DefaultButtons"


const PassiveTask = ({ oneTask, hover, changeTaskStatus, activateTaskEditing, deleteTask, editedTask, setHoverActive, setHoverPassive}) => {

    const initSetHoverActive = () => {
        setHoverActive()
    }

    const initSetHoverPassive = () => {
        setHoverPassive()
    }

    return (
        <div className="task" onMouseEnter={initSetHoverActive} onMouseLeave={initSetHoverPassive}>
            <Checkbox changeTaskStatus={changeTaskStatus} oneTask={oneTask} />
            <p className={`${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            {hover && <DefaultButtons oneTask={oneTask} activateTaskEditing={activateTaskEditing} deleteTask={deleteTask} />}
        </div>
    )
}



export default PassiveTask