import React from "react";
import { v4 as uuid } from 'uuid';
import {Button, Col, Form, Row} from "react-bootstrap";
import {addTask} from '../actions';
import {useDispatch,useSelector} from 'react-redux';


function AddTask({tasks,setTasks,setAllTasks,status}) {
    const inputText = React.useRef(null);
    const dispatch = useDispatch();
    const vaxi = useSelector(state => state.TaskReducer)

    function addTaskToState(name) {
        if(name !== '') {
            const guid = uuid().toString();
            
            if(status!=="completed") {
            setTasks((tasks) =>
                ([...tasks, {id: guid, name: name, done: false}]));
            }
                        
            setAllTasks((tasks) =>
                ([...tasks, {id: guid, name: name, done: false}]));
            
            dispatch(addTask(guid,name));

            inputText.current.value = '';
        }        
    }
   
    return(
        <Row className={"justify-content-center"}>
            <Col md={5}>
                <Row className={"justify-content-center"}>
                    <Form.Label>Enter new task:</Form.Label>
                </Row>
                <Row className={"justify-content-center"}>
                    <input ref={inputText} />
                </Row>
                <Row className={"justify-content-center"}>
                    <Button variant="primary" type="submit" onClick={() => addTaskToState(inputText.current.value)}>
                        Submit
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default AddTask;