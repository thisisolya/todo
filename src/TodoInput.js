import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const TodoInput = ({ addTaskToArray }) => {

    const [textInput, setTextInput] = useState("");

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        addTaskToArray({ text: textInput, id: uuidv4(), completed: false, });
        setTextInput("");
    }

    return (
        <form>
            <input type="text" value={textInput} placeholder="add a task..." onChange={handleInputChange} />
            <button type="submit" onClick={handleButtonClick} disabled={textInput.length ? false : true}>
                <span className="material-icons material-icons-outlined">
                    add
                </span>
            </button>
        </form>
    )
}


export default TodoInput

