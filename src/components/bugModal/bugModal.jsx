import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeBug } from "../../features/modal/bugModal.js";
import 'antd/dist/antd.css';
import { Input, Modal } from "antd";
import './bugModal.css';

export default function BugModal() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const bugModal = useSelector((state) => state.bugModal.value);
  const dispatch = useDispatch();
  
  const handleOk = () => {
      dispatch(closeBug());
  };
  
  const handleCancel = () => {
      dispatch(closeBug());
  };
  
  return (
      <div>
          <Modal
          title="Report a Bug"
          visible={bugModal}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add"
          width={1000}
          >
            <Input className="input" addonBefore="Title" onChange={(e) => setTitle(e.target.value)}/>
            <Input className="input" addonBefore="Error Message" onChange={(e) => setError(e.target.value)}/>
          </Modal>
      </div>
);
}
