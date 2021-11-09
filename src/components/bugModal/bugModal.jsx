import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeBug } from "../../features/modal/bugModal.js";
import "antd/dist/antd.css";
import { Input, Modal, Select } from "antd";
import "./bugModal.css";
import { db } from "../../firebase";

const { TextArea } = Input;
const { Option } = Select;

export default function BugModal() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [localProjects, setLocalProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState("Choose a project...");
  const [solutionDesc, setSolutionDesc] = useState("Description of solution...");

  const bugModal = useSelector((state) => state.bugModal.value);
  const dispatch = useDispatch();
  const projects = db.ref("/projects");
  const bugs = db.ref("/bugs");

  useEffect(() => {
    projects.on("value", function (snapshot) {
      setLocalProjects(snapshot.val());
    //   console.log(snapshot.val());
    });
  }, []);

  const handleOk = () => {
    if (!title || !error || solutionDesc === "Description of solution..." || !solutionDesc || selectedProject === "Choose a project...") {
        alert("Missing data for some fields");
        return;
    }
    bugs.push({
        title: title,
        error_message: error,
        solution_url: url,
        solution_description: solutionDesc,
        project_id: selectedProject,

    })
    dispatch(closeBug());
  };

  const handleCancel = () => {
    dispatch(closeBug());
  };

  const updateProject = (newProject) => {
    setSelectedProject(newProject);
    // console.log(newProject);
  }

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
        <Input
          className="input"
          addonBefore="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          className="input"
          addonBefore="Error Message"
          onChange={(e) => setError(e.target.value)}
          value={error}
        />
        <Input
          className="input"
          addonBefore="URL to Solution"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <TextArea className="input" rows={4} value={solutionDesc} onChange={(e) => setSolutionDesc(e.target.value)}/>
        <Select style={{ width: 200 }} onChange={(updateProject)} value={selectedProject}>
            {Object.keys(localProjects).map((keyName, i) => (
                <Option value={keyName}>{localProjects[keyName].name}</Option>
            ))}
        </Select>
      </Modal>
    </div>
  );
}
