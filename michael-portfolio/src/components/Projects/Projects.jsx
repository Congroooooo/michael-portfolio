import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description: "My own digital showcase built with a modern stack (React, CSS) to feature my skills, services, and projects.",
    tools: ["React", "CSS", "Vite"]
  },
  {
    title: "Capstone Project: [Your Project Title Here]",
    year: "2024-2025",
    description: "Describe your capstone project here. Talk about the goals, your role, the technologies you used, and the outcome.",
    tools: ["Embedded Systems", "Python", "AutoCAD", "3D Printing"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 