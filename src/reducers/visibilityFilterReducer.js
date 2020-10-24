import { VisibilityFilters,SET_VISIBILITY_FILTER } from '../actions/actions'

const visibilityFilterReducer = (state = VisibilityFilters.ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterReducer