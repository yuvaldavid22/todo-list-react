import { connect } from 'react-redux'
import { toggleTask } from '../actions/actions'
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

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: id => {
      dispatch(toggleTask(id))
    }
  }
}

const TasksContainers = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TasksContainers