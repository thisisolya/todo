import './App.css';
import TodoList from './todo_list';

function App() {
  return (
    <div className = "container">
      <h1> My to-do list </h1>
      <div className ="input_wrapper">
          <input type = "text" className = "task_input" placeholder = "add a task..."/>
          <button className = "add_button"> <span class = "material-icons material-icons-outlined"> add </span> </button>
      </div>
      <TodoList />
      <div className = "footer">
          <p> You have 3 tasks </p>
          <button className = "clear_all"> Clear all </button>
      </div>
    </div>
  );
}

export default App;
