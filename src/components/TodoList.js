import React,{useCallback,useState,useRef} from 'react';
import Task from './Task'

function TodoList({tasks, setAllTasks, setTasks, allTasks}){
    const allTasksRef = useRef();
    const tasksRef = useRef();
    allTasksRef.current = allTasks
    tasksRef.current=tasks

    const toggleTask = useCallback((taskId) => {
        allTasks = allTasksRef.current;
        tasks = tasksRef.current;
        let toggledTasks = tasks.map(
            task => {
                if(task.id === taskId){
                    task.done = !task.done;
                }
                return task;
            }
        )

        let toggledAllTasks = allTasks.map(
            task => {
                if(task.id === taskId && !toggledTasks.includes(task)){
                    task.done = !task.done;
                }
                return task;
            }
        )
        
        setAllTasks(toggledAllTasks)
        setTasks(toggledTasks);
    },)

    const todoList = tasks.length ? (
        tasks.map(todo=> (
            <Task toggleTask={toggleTask} name={todo.name} key={todo.id} id={todo.id} done={todo.done} />
        ))
    ) : (
        <p className="center">Nothing to see here move along</p>
    )

     return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default TodoList