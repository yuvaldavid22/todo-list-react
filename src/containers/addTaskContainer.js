import React from 'react';
import { connect } from 'react-redux'
import { addTask } from '../slices/TasksSlice'

const mapDispatch = { addTask }

let AddTask = ({ addTask  }) => {
    let input

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            addTask(input.value)
    
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
  AddTask = connect(null,mapDispatch)(AddTask)
  
  export default AddTask