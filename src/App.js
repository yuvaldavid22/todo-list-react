import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask'
import TodoList from "./components/TodoList"
import RemoveAllChecked from "./components/RemoveAllChecked"
import ShowAll from "./components/ShowAll"

function App() {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
      <h1>Todo's List</h1>
      </header>
      <ShowAll status={status} setStatus={setStatus} allTasks={allTasks} tasks={tasks} setTasks={setTasks}></ShowAll>
      <RemoveAllChecked status={status} setStatus={setStatus} allTasks={allTasks} tasks={tasks} setTasks={setTasks}></RemoveAllChecked>
      <AddTask allTasks={allTasks} setAllTasks={setAllTasks} tasks={tasks} setTasks={setTasks}></AddTask>
      <TodoList allTasks={allTasks} setAllTasks={setAllTasks} tasks={tasks} setTasks={setTasks}></TodoList>
    </div>
  );
}


export default App;
