import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeProject } from "../../features/modal/projectModal.js";
import 'antd/dist/antd.css';
import { Input, Modal, Select } from "antd";
import './projectModal.css';
const { Option } = Select;

export default function ProjectModal() {
  const [name, setName] = useState("");
  const [season, setSeason] = useState("");

  const projectModal = useSelector((state) => state.projectModal.value);
  const dispatch = useDispatch();
  
  const handleOk = () => {
      dispatch(closeProject());
  };
  
  const handleCancel = () => {
      dispatch(closeProject());
  };

  const updateSeason = (newSeason) => {
    setSeason(newSeason);
  }
  
  return (
      <div>
          <Modal
          title="Add a Project"
          visible={projectModal}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add"
          width={1000}
          >
            <Input className="input" addonBefore="Project Name" onChange={(e) => setName(e.target.value)}/>
            <Select defaultValue="Choose an option..." style={{ width: 200 }} onChange={(updateSeason)}>
                <Option value="Off Season">Off Season</Option>
                <Option value="Build Season">Build Season</Option>
                <Option value="Personal">Personal</Option>
            </Select>
          </Modal>
      </div>
);
}
