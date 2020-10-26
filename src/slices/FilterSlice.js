import { createSlice } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../actions/actions'

const filterSlice = createSlice({
    name: 'filters',
    initialState: VisibilityFilters.ALL,
    reducers: {
      setFilter(state,action) {
        return action.payload;
      }
    }
  })
  
  export const {setFilter} = filterSlice.actions
  
  export default filterSlice.reducer