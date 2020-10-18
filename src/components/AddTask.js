import React from "react";
import { v4 as uuid } from 'uuid';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';


function AddTask({tasks,setTasks,setAllTasks,status}) {
    const inputText = React.useRef(null);

    function addTask(name) {
        if(name !== '') {
            const guid = uuid().toString();
            
            if(status!=="done") {
            setTasks((tasks) =>
                ([...tasks, {id: guid, name: name, done: false}]));
            }
                        
            setAllTasks((tasks) =>
                ([...tasks, {id: guid, name: name, done: false}]));
            
            
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
                    <Button variant="primary" type="submit" onClick={() => addTask(inputText.current.value)}>
                        Submit
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default AddTask;