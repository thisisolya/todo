import React from "react"

const TodoItem = ({ textInput, setTextInput,tasks, setTasks, oneTask, isDone, setIsDone}) => {

    const deleteTask = () => {
         setTasks(tasks.filter((clickedTask) => clickedTask.id !== oneTask.id));
        }
    
    const changeStatus = () => {
        setIsDone(!isDone)
    }


    return (
        <div className="task">
            <input type="checkbox" onChange = {changeStatus} checked = {isDone}/>
            <p className={`task-point ${isDone ? "completed": ""}`}>{oneTask.text}</p>
            <button className="delete-button" onClick={deleteTask}>
                <span className="material-icons material-icons-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}

export default TodoItem

// {`task-point ${isDone ? "completed": ""}`}