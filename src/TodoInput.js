import React from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ textInput, setTextInput, tasks, setTasks, isDone, setIsDone }) => {

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    }


    const handleAddButton = (e) => {
        e.preventDefault();
        setTasks([...tasks, { text: textInput, id: uuidv4(),  completed: isDone, }]); 
        setTextInput("");
    }

    return (
        <form className="input-wrapper">
            <input type="text" className="task-input" value={textInput} placeholder="add a task..." onChange={handleInputChange} />
            <button className="add-button" type="submit" onClick={handleAddButton} disabled={textInput.length >= 1 ? false : true}>
                <span className="material-icons material-icons-outlined">
                    add
                </span>
            </button>
        </form>
    )
}

export default TodoInput

