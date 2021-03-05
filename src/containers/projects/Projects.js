import React from 'react';
import './Projects.css';
import {projects} from '../../portfolio';
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {
    return (
        <div className="project-section" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="project-card-container">
                {projects.projects.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    );
}
