import React from 'react';
import Task from './Task'

const TodoList = ({tasks,toggleTask}) => {
    
    return (
        <div className="todos collection">
            {console.log(tasks)}
            {tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    done={task.done}
                    onChange={toggleTask}
                />
            ))}
        </div>
    )
}

export default TodoList