import React, {useCallback} from "react";
import {Col, Row} from "react-bootstrap";

function Task(props)
{
    const toggleTask = useCallback(() => {
        props.toggleTask(props.id);
    }, [props.id]);

    return (
        <Row >
            <Col md={8}>
                <Row >
                    <Col md={3}>
                        <input type="checkbox" checked={props.done}
                               onChange={toggleTask} className={"task-checkbox"}/>
                    </Col>
                    <Col md={6}>
                        {props.name}
                    </Col>
                    <Col md={3}>
                        <span className="material-icons"></span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Task;