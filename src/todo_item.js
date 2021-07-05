import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="task">
        <input type="checkbox" onClick={this.handleClick} />
        <p className="task-point"> {this.props.title} </p>
        <button className="delete-button"> <span className="material-icons material-icons-outlined"> delete </span> </button>
      </div>
    );
  }
}

export default TodoItem;
