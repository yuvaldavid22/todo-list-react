import { combineReducers } from 'redux'
//import TaskReducer from './TaskReducer'
import tasksReducer from "../slices/TasksSlice"
import filterReducer from "../slices/FilterSlice"

export default combineReducers({
    TaskReducer : tasksReducer,
    visibilityFilterReducer : filterReducer
})