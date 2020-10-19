import React,{useCallback,useState,useRef} from 'react';
import Task from './Task'

function TodoList({tasks, setAllTasks, setTasks, allTasks,status}){
    const allTasksRef = useRef();
    const tasksRef = useRef();
    const statusRef = useRef();
    allTasksRef.current = allTasks;
    tasksRef.current=tasks;
    statusRef.current=status;

    const toggleTask = useCallback((taskId) => {
        allTasks = allTasksRef.current;
        tasks = tasksRef.current;
        status = statusRef.current;

        let toggledTasks = tasks.map(
            task => {
                if(task.id === taskId) {
                    task.done = !task.done;
                }

                if(status==="all")
                    return task;
                if(status==="completed" && task.done===true)
                    return task;
                if(status==="uncompleted" && task.done===false)
                    return task;

                return;
            }
        )
        
        toggledTasks = toggledTasks.filter(task => task!==undefined)

        let toggledAllTasks = allTasks.map(
            task => {
                if(task.id === taskId && !toggledTasks.includes(task)){
                    task.done = !task.done;
                }
                return task;
            }
        )

        setTasks(toggledTasks);
        setAllTasks(toggledAllTasks);          
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