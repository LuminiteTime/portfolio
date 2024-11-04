import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJava, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiDocker, SiGit, SiPostman } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { RiTestTubeFill } from 'react-icons/ri';
import '../styles/skills.css';

const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Spring', icon: <SiSpring /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Scrum', icon: <DiScrum /> },
    { name: 'Test\ncontainers', icon: <RiTestTubeFill /> }
];

const SkillsSection = () => (
    <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className="skill-card"
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="skill-icon">{skill.icon}</div>
                    <h3 className="skill-name">{skill.name}</h3>
                </motion.div>
            ))}
        </div>
    </section>
);

export default SkillsSection;
