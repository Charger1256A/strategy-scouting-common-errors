import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../features/modal/modalSlice.js'
import { Modal } from "antd";

export default function Home() {
    const modal = useSelector((state) => state.modal.value);
    const dispatch = useDispatch();


    const showModal = () => {
        dispatch(open());
      };
    
      const handleOk = () => {
        dispatch(close());
      };
    
      const handleCancel = () => {
        dispatch(close());
      };
    
    return (
        <div>
            <Modal
            title="Basic Modal"
            visible={modal}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Add"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
  );
}
