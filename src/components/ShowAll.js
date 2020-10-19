import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

function ShowAll({setTasks,allTasks,setStatus}){

    function showAll(){
        let task = allTasks.filter(
            todo=> todo.done!==true || todo.done!==false
        );

        setTasks(task);     
        setStatus("all");   
    }

    return(
        <Row className={"justify-content-center"}>
            <Col md={5}>
                <Row className={"justify-content-center"}>
                    <Form.Label>Show All</Form.Label>
                </Row>
                <Row className={"justify-content-center"}>
                    <Button variant="primary" type="remove" onClick={() => showAll()}>
                        Show All
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default ShowAll;