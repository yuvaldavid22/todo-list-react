import React from 'react';
import './App.css';
import TasksContainers from "./containers/tasksContainers"
import AddTask from "./containers/addTaskContainer"
import FilterSelector from "./components/FilterSelector"

function App() {
    return (
        <div className="App">
            <header>
                <h1>Todo's List</h1>
            </header>
            <FilterSelector></FilterSelector>
            <AddTask/>
            <TasksContainers></TasksContainers>
        </div>
    );
}

export default App;
