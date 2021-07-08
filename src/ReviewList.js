import React from "react";

const ReviewList = ({ tasks, setTasks }) => {

    const clearAll = () => {
        setTasks(tasks = [])
    }

    return (
        <div className="footer">
            <p>Total amount of tasks: {tasks}</p>
            <button className="clear-all" onClick={clearAll}>Clear all</button>
        </div>
    );
}
export default ReviewList;
