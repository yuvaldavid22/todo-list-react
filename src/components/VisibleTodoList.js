import { connect } from 'react-redux'
import { toggleTask } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.done)
    case VisibilityFilters.SHOW_UNCOMPLETED:
      return todos.filter(t => !t.done)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  tasks: getVisibleTodos(state.TaskReducer, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
