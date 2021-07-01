import ToDoControl from './components/toDoControl';
import './App.css';
import TasksList from './components/tasksList';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoControl />
      <TasksList />
    </div>
  );
}

export default App;
