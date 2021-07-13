import React, { useState } from "react"
import Checkbox from "./Checkbox"
import DefaultButtons from "./DefaultButtons"


const PassiveTask = ({ oneTask, changeTaskStatus, setIsEditing, deleteTask }) => {

    const [hover, setHover] = useState(false);

    return (
        <div className="task" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Checkbox changeTaskStatus={changeTaskStatus} oneTask={oneTask} />
            <p className={`${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            {hover && <DefaultButtons hover={hover} oneTask={oneTask} deleteTask={deleteTask} setIsEditing={setIsEditing} />}
        </div>
    )
}



export default PassiveTask