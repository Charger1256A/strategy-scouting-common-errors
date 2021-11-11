import { useState, useEffect } from "react";
import BugModal from '../../components/bugModal/bugModal';
import ProjectModal from '../../components/projectModal/projectModal';
import BugCard from '../../components/bugCard/bugCard';
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
        console.log(localProjects);
        if (!localProjects) {
            return;
        }
        const rows = [];
        let cols = [];
        var i = 0;
        Object.keys(localProjects).map((project, key) => {
            if (localProjects[project].bugs) {
            Object.keys(localProjects[project].bugs).map((bug, key) => {
                cols.push(<BugCard className="bug-card" title={localProjects[project].bugs[bug].title} type={localProjects[project].bugs[bug].type_of_error} date={localProjects[project].bugs[bug].date}/>)
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
            {/* <div className="container">            {
                Object.keys(localProjects).map((project, key) => (
                    Object.keys(localProjects[project].bugs).map((bug, key) => (
                        <BugCard className="bug-card" title={localProjects[project].bugs[bug].title}/>
                    ))
                ))
            } 
            </div>  */}
            <div>
            {display().map((i, k) => i && i.length > 0 && <Row style={{marginBottom: 10}} key={`row-${k}`}>{i.map((c, ck) => <Col span={6} key={`key-${ck}`}>{c}</Col>)}<br/></Row>)}
            </div>
        </div>
  );
}
