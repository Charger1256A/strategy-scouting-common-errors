import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../features/modal/modalSlice.js";
import 'antd/dist/antd.css';
import { Input, Modal } from "antd";

export default function CustomModal() {
  const [title, setTitle] = useState("");

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
          title="Report a Bug"
          visible={modal}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add"
          width={1000}
          >
            <Input addonBefore="Title" onChange={(e) => setTitle(e.target.value)}/>

          </Modal>
      </div>
);
}
