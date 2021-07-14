import React, { useState } from "react"
import PassiveTask from "./PassiveTask"
import ActiveTask from "./ActiveTask"


const TodoItem = ({ oneTask, deleteTask, editTaskProperties }) => {

    const [isEditing, setIsEditing] = useState(false);

    return (
        isEditing ? <ActiveTask
            oneTask={oneTask}
            setIsEditing={setIsEditing}
            editTaskProperties={editTaskProperties} />
            : <PassiveTask
                deleteTask={deleteTask}
                oneTask={oneTask}
                setIsEditing={setIsEditing}
                editTaskProperties={editTaskProperties} />
    )
}


export default TodoItem