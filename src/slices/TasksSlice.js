import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
      addTask(state, action) {
        const guid = uuid().toString();
        state.push({ id:guid, name:action.payload, done: false })
      },
      toggleTask(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        if (todo) {
          todo.done = !todo.done
        }
      }
    }
  })
  
  export const { addTask, toggleTask } = tasksSlice.actions
  
  export default tasksSlice.reducer