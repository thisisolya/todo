import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ textInput, setTextInput, tasks, setTasks, isDone, setIsDone }) => {
    return (
        <div className="todo-list">
            {tasks.map(oneTask =>
                <TodoItem
                    oneTask={oneTask}
                    key={oneTask.id}
                    tasks={tasks}
                    setTasks={setTasks}
                    isDone = {oneTask.completed}
                    setIsDone = {setIsDone}
                />
            )}
        </div>
    );
}

export default TodoList;
