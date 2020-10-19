import React, {useRef, useState} from 'react';
import './App.css';
import {v4 as uuid} from "uuid";
import TodoList from "./components/TodoList";

function App() {
    const inputRef = useRef();
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState("all")

    const toggleTask = taskId => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, done: !task.done} : task))
    }

    const getRelevantTasks = () => {
        if (status === "completed") {
            return tasks.filter(task => task.done)
        } else if (status === "uncompleted") {
            return tasks.filter(task => !task.done)
        }
        return tasks
    }

    return (
        <div className="App">
            <header>
                <h1>Todo's List</h1>
            </header>
            <button onClick={() => setStatus("all")}>show all</button>
            <button onClick={() => setStatus("completed")}>completed</button>
            <button onClick={() => setStatus("uncompleted")}>uncompleted</button>
            <input ref={inputRef}/>
            <button onClick={() => {
                setTasks((tasks) => ([...tasks, {id: uuid().toString(), name: inputRef.current.value, done: false}]))
            }}>
                Add task
            </button>
            <TodoList tasks={getRelevantTasks()} toggleTask={toggleTask}/>
        </div>
    );
}

export default App;
