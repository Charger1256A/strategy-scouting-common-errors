import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeBug } from "../../features/modal/bugModal.js";
import "antd/dist/antd.css";
import { Input, Modal } from "antd";
import "./bugModal.css";
import { db } from "../../firebase";

const { TextArea } = Input;

export default function BugModal() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [localProjects, setLocalProjects] = useState({});
  const [solutionDesc, setSolutionDesc] = useState("Description of solution...")

  const bugModal = useSelector((state) => state.bugModal.value);
  const dispatch = useDispatch();
  const projects = db.ref("/projects");

  useEffect(() => {
    projects.on("value", function (snapshot) {
      setLocalProjects(snapshot.val());
    });
  }, []);

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
        <TextArea rows={4} value={solutionDesc} onChange={(e) => setSolutionDesc(e.target.value)}/>
      </Modal>
    </div>
  );
}
