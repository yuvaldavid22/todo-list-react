import React, {useRef, useState} from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/actions'
import { v4 as uuid } from 'uuid';

const mapStateToProps = (state, ownProps) => {
    return {
  }
}
let AddTask = ({ dispatch }) => {
    let input
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            const guid = uuid().toString();
            dispatch(addTask(guid,input.value))
    
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
  AddTask = connect(mapStateToProps)(AddTask)
  
  export default AddTask