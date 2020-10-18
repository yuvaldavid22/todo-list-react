import React from "react";
import { v4 as uuid } from 'uuid';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useSelector} from 'react-redux';

function ShowAllUnCompleted({allTasks,tasks,setTasks,setStatus}){

    function showAllUnCompleted(){

        let task = allTasks.filter(
            todo=> todo.done !== true
        );

        setTasks(task);     
        setStatus("uncompleted");       
    }

    return(
        <Row className={"justify-content-center"}>
            <Col md={5}>
                <Row className={"justify-content-center"}>
                    <Form.Label>Show Uncompleted</Form.Label>
                </Row>
                <Row className={"justify-content-center"}>
                    <Button variant="primary" type="remove" onClick={() => showAllUnCompleted()}>
                        Show Uncompleted
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default ShowAllUnCompleted;