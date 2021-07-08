import React from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ textInput, setTextInput, tasks, setTasks }) => {

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    }


    const handleButtonClick = (e) => {
        e.preventDefault();
        setTasks([...tasks, { text: textInput, id: uuidv4(),  completed: false,  }]); 
        setTextInput("");
    }

    //  You do not need tasks in this component, only the way to add one
    // Create a function to add task to the state which will call setTasks() so you don't have to pass unnecessary prop here

    // [...tasks, { text: textInput, id: uuidv4(),  completed: isDone, }]); 
    //     setTextInput("")

    return (
        <form className="input-wrapper">
            <input type="text" className="task-input" value={textInput} placeholder="add a task..." onChange={handleInputChange} />
            <button className="add-button" type="submit" onClick={handleButtonClick} disabled={textInput.length ? false : true}>
                <span className="material-icons material-icons-outlined">
                    add
                </span>
            </button>
        </form>
    )
}

export default TodoInput

