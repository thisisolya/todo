import React, { useState } from "react"
import PassiveTask from "./PassiveTask"
import ActiveTask from "./ActiveTask"


const TodoItem = ({ oneTask, deleteTask, changeTaskStatus, hover }) => {

    const [currentTask, editCurrentTask] = useState(false);

    const [taskEdition, setTaskEdition] = useState("");

    const activeTask = () => {
        editCurrentTask(true)
    }

    const passiveTask = () => {
        editCurrentTask(false)
    }


    return (
        currentTask ?
            <ActiveTask taskEdition={taskEdition} setTaskEdition={setTaskEdition} oneTask={oneTask} passiveTask={passiveTask} hover={hover} /> :
            <PassiveTask taskEdition={taskEdition} hover={hover} deleteTask={deleteTask} oneTask={oneTask} activeTask={activeTask} changeTaskStatus={changeTaskStatus} />
    )
}


export default TodoItem