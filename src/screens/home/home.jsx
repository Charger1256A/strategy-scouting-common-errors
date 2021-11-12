import { useState, useEffect } from "react";
import BugModal from '../../components/bugModal/bugModal';
import ProjectModal from '../../components/projectModal/projectModal';
import BugCard from '../../components/bugCard/bugCard';
import BugDataModal from '../../components/bugDataModal/bugDataModal';
import { db } from "../../firebase";
import { Row, Col } from 'antd';
import './home.css';

export default function Home() {
    const [bugs, setBugs] = useState();
    const [localProjects, setLocalProjects] = useState({});

    const projects = db.ref("/projects");

    useEffect(() => {
        projects.on("value", function (snapshot) {
            setLocalProjects(snapshot.val());
            console.log(snapshot.val());
          });
    }, [])

    const display = () => {
        // console.log(localProjects);
        if (!localProjects) {
            return;
        }
        const rows = [];
        let cols = [];
        var i = 0;
        var p;
        Object.keys(localProjects).map((project, key) => {
            console.log(localProjects[project].name);
            if (localProjects[project].bugs) {
            Object.keys(localProjects[project].bugs).map((bug, key) => {
                // console.log(localProjects[project].bugs[bug]);
                p = {...localProjects[project].bugs[bug]};
                p.project = localProjects[project];
                cols.push(<BugCard className="bug-card" data={p} />)
                if ((i + 1) % 4 === 0) {
                    rows.push(cols);
                    cols = [];
                }
                i++
            })
        }
        })
        if (cols && cols.length > 0) {
            rows.push(cols);
        }
        console.log(rows);
        return rows;
    }
    
    return (
        <div style={{ margin: "auto", width: "80%", padding: 10 }}>
            <ProjectModal />
            <BugModal />
            <BugDataModal />
            <div>
            {display() && display().map((i, k) => i && i.length > 0 && <Row style={{marginBottom: 10}} key={`row-${k}`}>{i.map((c, ck) => <Col span={6} key={`key-${ck}`}>{c}</Col>)}<br/></Row>)}
            </div>
        </div>
  );
}
