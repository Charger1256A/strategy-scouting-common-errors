import { useState, useEffect } from "react";
import BugModal from '../../components/bugModal/bugModal';
import ProjectModal from '../../components/projectModal/projectModal';

export default function Home() {
    
    return (
        <div>
            <ProjectModal />
            <BugModal />
        </div>
  );
}
