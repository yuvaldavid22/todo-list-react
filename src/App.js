import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask'
import TodoList from "./components/TodoList"
import ShowAllUnCompleted from "./components/ShowAllUnCompleted"
import ShowAll from "./components/ShowAll"
import ShowAllCompleted from "./components/ShowAllCompleted"
import VisibleTodoList from "./components/VisibleTodoList"

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
      <ShowAllUnCompleted status={status} setStatus={setStatus} allTasks={allTasks} tasks={tasks} setTasks={setTasks}></ShowAllUnCompleted>
      <ShowAllCompleted status={status} setStatus={setStatus} allTasks={allTasks} tasks={tasks} setTasks={setTasks}></ShowAllCompleted>
      <AddTask status={status} allTasks={allTasks} setAllTasks={setAllTasks} tasks={tasks} setTasks={setTasks}></AddTask>
      <VisibleTodoList status={status} allTasks={allTasks} setAllTasks={setAllTasks} tasks={tasks} setTasks={setTasks}></VisibleTodoList>
    </div>
  );
}


export default App;
