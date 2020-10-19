import React from 'react';
import Task from './Task'

const TodoList = (props) => {
    const {
        tasks,
        toggleTask
    } = props;
    return (
        <div className="todos collection">
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