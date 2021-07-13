import React from "react";

const Footer = ({ tasksArrayLength, deleteTask }) => {

    const initializeDelete = () => {
        deleteTask();
    }

    if (!tasksArrayLength) return null;
    return (<div className="footer">
        <p>Total amount of tasks: {tasksArrayLength}</p>
        <button onClick={initializeDelete}>Clear all</button>
    </div>
    );
}


export default Footer;
