import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

function ShowAllCompleted({allTasks,tasks,setTasks,setStatus}){

    function showAllCompleted(){

        let task = allTasks.filter(
            todo=> todo.done !== false
        );

        setTasks(task);     
        setStatus("completed");       
    }

    return(
        <Row className={"justify-content-center"}>
            <Col md={5}>
                <Row className={"justify-content-center"}>
                    <Form.Label>Show Completed</Form.Label>
                </Row>
                <Row className={"justify-content-center"}>
                    <Button variant="primary" type="remove" onClick={() => showAllCompleted()}>
                        Show Completed
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default ShowAllCompleted;