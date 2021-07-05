import React from "react";

class AddTask extends React.Component {
    render() {
        return (
            <div className="input-wrapper">
                <input type="text" className="task-input" placeholder="add a task..." />
                <button className="add-button">
                    <span className="material-icons material-icons-outlined">
                         add 
                    </span> 
                </button>
            </div>
        )
    }
}

export default AddTask;

