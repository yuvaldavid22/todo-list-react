import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

export default combineReducers({
    TaskReducer,
    visibilityFilterReducer
})