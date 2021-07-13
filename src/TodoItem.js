import React, { useState } from "react"
import PassiveTask from "./PassiveTask"
import ActiveTask from "./ActiveTask"


const TodoItem = ({ oneTask, deleteTask, changeTaskStatus }) => {

    const [isEditing, setIsEditing] = useState(false);

    return (
        isEditing ? <ActiveTask
            oneTask={oneTask}
            setIsEditing={setIsEditing} />
            : <PassiveTask
                deleteTask={deleteTask}
                oneTask={oneTask}
                setIsEditing={setIsEditing}
                changeTaskStatus={changeTaskStatus} />
    )
}


export default TodoItem