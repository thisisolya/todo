import React from "react";

class ReviewList extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>You have 3 tasks</p>
                <button className="clear-all">Clear all</button>
            </div>
        );
    }
}

export default ReviewList;
