import {ADD_TASK,TOGGLE_TASK} from '../actions/actions'

function TaskReducer(state = [],action){
    switch(action.type){
        case ADD_TASK:
            return [...state,{id: action.id, name: action.name, done: false}]
        case TOGGLE_TASK:
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