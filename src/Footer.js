import React from "react";

const Footer = ({ tasksArray, deleteTask }) => {

    const initializeDelete = (e) => {
        const clearAllButton = {
            id: e.target.getAttribute("id")
        };
        deleteTask(clearAllButton.id);
    }

    return (
        <div className="footer">
            <p>Total amount of tasks: {tasksArray}</p>
            <button id="clear-all" onClick={initializeDelete}>Clear all</button>
        </div>
    );
}
export default Footer;
