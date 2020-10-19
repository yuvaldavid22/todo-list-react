import React from "react";

const Task = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.done} onChange={() => props.onChange(props.id)} className={"task-checkbox"}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Task;