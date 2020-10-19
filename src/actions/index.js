export const addTask = (id,name) => ({
  type: 'ADD_TASK',
  id,
  name
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTask = id => ({
  type: 'DO_TASK',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'all',
  SHOW_COMPLETED: 'completed',
  SHOW_UNCOMPLETED: 'uncompleted'
}