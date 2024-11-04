import React from 'react';
import '../styles/projects.css';
import tableTennisProjectImage from '../assets/table-tennis-project.jpg';
import ragnarProjectImage from '../assets/ragnar-project.png';

const projects = [
    {
        id: 1,
        title: 'Score Scout',
        description: 'An API for managing table tennis tournaments. It is built using Java Spring and allows to create and play tournaments using tables and brackets.',
        imageUrl: tableTennisProjectImage,
        repoUrl: 'https://github.com/LuminiteTime/Tournament-Microservice'
    },
    {
        id: 2,
        title: 'Ragnar',
        description: 'An open-source solution for analyzing, summarizing, and asking questions in chat about documents using RAG-models. It is built using Python and Svelte.',
        imageUrl: ragnarProjectImage,
        repoUrl: 'https://gitlab.pg.innopolis.university/m.trifonov/ragnar',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A brief description of Project Three. It implements advanced algorithms and data structures.',
        imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
        repoUrl: '#',
    }
];

const ProjectsSection = () => (
    <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
            {projects.map(project => (
                <div className="project-card" key={project.id}>
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default ProjectsSection;
