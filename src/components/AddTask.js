import React, {useRef, useState} from 'react';
import { addTask } from '../actions/actions'
import { v4 as uuid } from 'uuid';

const AddTask = ({dispatch}) => {
    const inputRef = useRef();

 
 return(
 <div>
      <input ref={inputRef}/>

<button onClick={(e) => {
  e.preventDefault()
  if (!inputRef.current.value.trim()) {
    return
  }
  const guid = uuid().toString();
    dispatch(addTask(guid,inputRef.current.value))
    inputRef.current.value = ''
        }}>
        Add task
        </button>
    </div>)
}
  
  export default AddTask