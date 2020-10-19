import React, {useContext, useRef, useCallback} from "react";
import {Col, Row} from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import {toggleTask} from '../actions';

function Task(props)
{
    const dispatch = useDispatch();
    const vaxi = useSelector(state => state.TaskReducer)

    function toggleTaskInState() {    
        console.log(props.id)
        dispatch(toggleTask(props.id));
        console.log(vaxi)
    }
    
    // const toggleTask = useCallback(() => {
    //     props.toggleTask(props.id);
    // }, [props.id]);

    
    return (
        <Row >
            <Col md={8}>
                <Row >
                    <Col md={3}>
                        <input type="checkbox" checked={props.done}
                               onChange={toggleTaskInState} className={"task-checkbox"}/>
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