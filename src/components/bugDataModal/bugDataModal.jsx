import { useState, useEffect } from 'react';
import { Modal, Row, Typography } from 'antd';
import { closeBugData, getData } from "../../features/modal/bugDataModal.js";
import { useSelector, useDispatch } from "react-redux";
import store from '../../app/store';
import './bugDataModal.css';

const { Text, Link } = Typography;

export default function BugDataModal() {
    const modalVisible = useSelector((state) => state.bugDataModal.value);
    const data = useSelector((state) => state.bugDataModal.data);
    const dispatch = useDispatch();
    console.log(data);

    return (
    <div>
            <Modal
            title={data.title}
            centered
            visible={modalVisible}
            onOk={() => dispatch(closeBugData())}
            cancelButtonProps={{ style: { display: 'none' } }}
            onCancel={() => dispatch(closeBugData())}
            width={1000}
        >
        <p><b>Error Message: </b>{data.error_message}</p>
        <p><b>Solution: </b>{data.solution_description}</p>
        <Row>
        {data.project &&
            <p><b>Project: </b>{data.project.name}</p> 
        }
        </Row>
        </Modal>
    </div>
    )
}