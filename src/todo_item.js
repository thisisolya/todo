import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className = "task">
        <input type = "checkbox" onClick={this.handleClick} />
        <p className = "task_point"> {this.props.title} </p>
        <button className = "delete_button"> <span class = "material-icons material-icons-outlined"> delete </span> </button>
      </div>
    );
  }
}

export default TodoItem;
