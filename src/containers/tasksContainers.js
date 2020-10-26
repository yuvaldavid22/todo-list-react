import { connect } from 'react-redux'
import { toggleTask } from '../slices/TasksSlice'
import TodoList from '../components/TodoList'
import {VisibilityFilters} from '../actions/actions'

const getVisibleTodos = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.ALL:
      return tasks
    case VisibilityFilters.COMPLETED:
      return tasks.filter(t => t.done)
    case VisibilityFilters.UNCOMPLETED:
      return tasks.filter(t => !t.done)
  }
}

const mapStateToProps = state => {
  return {
    tasks: getVisibleTodos(state.TaskReducer, state.visibilityFilterReducer)
  }
}

const mapDispatchToProps = {
    toggleTask  
}

const TasksContainers = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TasksContainers