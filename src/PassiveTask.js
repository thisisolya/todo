import React, { useState } from "react"
import Checkbox from "./Checkbox"
import DefaultButtons from "./DefaultButtons"


const PassiveTask = ({ oneTask, editTaskProperties, setIsEditing, deleteTask }) => {

    const [isHovered, setisHovered] = useState(false);

    return (
        <div className="task"
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}>
            <Checkbox
                editTaskProperties={editTaskProperties}
                oneTask={oneTask} />
            <p className={`${oneTask.completed ? "completed" : null}`}>{oneTask.text}</p>
            <DefaultButtons
                isHovered={isHovered}
                oneTaskId={oneTask.id}
                deleteTask={deleteTask}
                setIsEditing={setIsEditing} />
        </div>
    )
}



export default PassiveTask