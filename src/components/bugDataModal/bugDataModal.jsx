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
            title={`${data.title} (${data.name})`}
            centered
            visible={modalVisible}
            onOk={() => dispatch(closeBugData())}
            cancelButtonProps={{ style: { display: 'none' } }}
            onCancel={() => dispatch(closeBugData())}
            width={1000}
        >
        <p><b>Error Message: </b>{data.error_message}</p>
        <div className="link">
        {data.solution_url ? ( <a href={data.solution_url} target="_blank"><b>Solution: </b></a>) : ( <p><b>Solution: </b></p>)}
        <p>&nbsp;{data.solution_description}</p>
        </div>
        
        {data.project &&
        <div className="link">
                <a href={data.project.github_url} target="_blank"><b>Project: </b></a>
                <p>&nbsp;{data.project.name}</p>
            </div>
        }
        </Modal>
    </div>
    )
}