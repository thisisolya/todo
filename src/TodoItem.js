import React, { useState } from "react"
import PassiveTask from "./PassiveTask"
import ActiveTask from "./ActiveTask"


const TodoItem = ({ oneTask, deleteTask, changeTaskStatus }) => {

    const [currentTask, editCurrentTask] = useState(false);

    const [editedTask, setEditedTask] = useState(oneTask.text);

    const [hover, setHover] = useState(false);

    const activateTaskEditing = () => {
        editCurrentTask(true)
    }

    const deactivateTaskEditing = () => {
        editCurrentTask(false)
    }

    const setHoverActive = () => {
        setHover(true)
    }

    const setHoverPassive = () => {
        setHover(false)
    }

    const saveChanges = () => {
        oneTask.text = editedTask;
        deactivateTaskEditing();
    }

    const discardChanges = () => {
        setEditedTask(oneTask.text);
        deactivateTaskEditing();
    }

    return (
        currentTask ? <ActiveTask
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            saveChanges={saveChanges}
            discardChanges={discardChanges}
        />
            : <PassiveTask
                setHoverPassive={setHoverPassive}
                setHoverActive={setHoverActive}
                editedTask={editedTask}
                hover={hover}
                deleteTask={deleteTask}
                oneTask={oneTask}
                activateTaskEditing={activateTaskEditing}
                changeTaskStatus={changeTaskStatus} />
    )
}


export default TodoItem