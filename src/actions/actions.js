export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  ALL: 'all',
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted'
}

/*
 * action creators
 */

export function addTask(id,name) {
  return { type: ADD_TASK, id,name }
}

export function toggleTask(id) {
  return { type: TOGGLE_TASK, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}