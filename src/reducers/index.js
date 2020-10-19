import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    TaskReducer,
    visibilityFilter
})