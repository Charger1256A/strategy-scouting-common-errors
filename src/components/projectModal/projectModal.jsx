import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeProject } from "../../features/modal/projectModal.js";
import 'antd/dist/antd.css';
import { Input, Modal, Select } from "antd";
import './projectModal.css';
import { db } from  '../../firebase';

// const db = firebase.ref("/projects");
const { Option } = Select;

export default function ProjectModal() {
  const [name, setName] = useState("");
  const [git, setGit] = useState("");
  const [season, setSeason] = useState("Choose an option...");

  const projectModal = useSelector((state) => state.projectModal.value);
  const dispatch = useDispatch();
  const projects = db.ref("/projects");
  
  const handleAdd = () => {
    if (name === "" || git === "" || season === "Choose an option...") {
        alert("All fields required");
        return;
    }
    projects.push({
          name: name,
          season: season,
          github_url: git
      })
    
    setName("");
    setGit("");
    setSeason("Choose an option...");

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
          onOk={handleAdd}
          onCancel={handleCancel}
          okText="Add"
          width={1000}
          >
            <Input className="input" addonBefore="Project Name" onChange={(e) => setName(e.target.value)} value={name}/>
            <Input className="input" addonBefore="Github Url" onChange={(e) => setGit(e.target.value)} value={git} />
            <Select defaultValue="Choose an option..." style={{ width: 200 }} onChange={(updateSeason)} value={season}>
                <Option value="Off Season">Off Season</Option>
                <Option value="Build Season">Build Season</Option>
                <Option value="Personal">Personal</Option>
            </Select>
          </Modal>
      </div>
);
}
