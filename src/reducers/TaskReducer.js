function TaskReducer(state = [],action){
    switch(action.type){
        case 'ADD_TASK':
            return [...state,{id: action.id, name: action.name, done: false}]
        case 'DO_TASK':
            return state.map(task =>{
                if(task.id === action.id){
                    task.done = !task.done;
                }
                return task;   
            })
        default:
            return state 
    }
}

export default TaskReducer;