import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';
import tableTennisProjectImage from '../assets/table-tennis-project.jpg';
import ragnarProjectImage from '../assets/ragnar-project.png';

const projects = [
    {
        id: 1,
        title: 'Score Scout',
        description: 'An API for managing table tennis tournaments. It is built using Java Spring and allows to create and play tournaments using tables and brackets.',
        imageUrl: tableTennisProjectImage,
        repoUrl: 'https://github.com/LuminiteTime/Tournament-Microservice',
        skills: ['Java', 'Spring Boot', 'PostgreSQL']
    },
    {
        id: 2,
        title: 'Ragnar',
        description: 'An open-source solution for analyzing, summarizing, and asking questions in chat about documents using RAG-models. It is built using Python and Svelte.',
        imageUrl: ragnarProjectImage,
        repoUrl: 'https://gitlab.pg.innopolis.university/m.trifonov/ragnar',
        skills: ['Python', 'Svelte', 'ML']
    }
];

const ProjectsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const projectVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="section-background diagonal"></div>
            <div className="section-gradient bottom"></div>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Valuable Projects
            </motion.h2>
            <motion.div 
                className="projects-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map(project => (
                    <motion.div 
                        className="project-card" 
                        key={project.id}
                        variants={projectVariants}
                    >
                        <div className="project-image-container">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="project-image" 
                            />
                            {project.skills && (
                                <div className="project-overlay">
                                    <div className="project-skills">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a 
                                    href={project.repoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> View Repository
                                </a>
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectsSection;