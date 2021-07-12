import React from "react"
import Checkbox from "./Checkbox"
import DefaultButtons from "./DefaultButtons"


const PassiveTask = ({ oneTask, hover, changeTaskStatus, activeTask, deleteTask, taskEdition }) => {

    return (
        <div className="task">
            <Checkbox changeTaskStatus={changeTaskStatus} oneTask={oneTask} />
            <p className={`${oneTask.completed ? "completed" : null}`}>{taskEdition || oneTask.text}</p>
            {hover && <DefaultButtons oneTask={oneTask} activeTask={activeTask} deleteTask={deleteTask} />}
        </div>
    )
}



export default PassiveTask