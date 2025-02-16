import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
import '../styles/about.css';

const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="about" className="about">
            <div className="about-background-pattern"></div>
            <motion.div 
                className="about-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 variants={itemVariants}>About Me</motion.h2>
                
                <motion.div className="about-content" variants={itemVariants}>
                    <div className="about-text">
                        <p>I am an innovative Backend Developer with one year experience building microservices. 
                           Skilled in Java, Scala, Spring, SQL, and PostgreSQL, with working knowledge of Postman 
                           and Docker. Proficient in Agile and Scrum methodologies.</p>
                    </div>
                    
                    <div className="about-highlights">
                        <motion.div className="highlight-card" variants={itemVariants}>
                            <FaLaptopCode className="highlight-icon" />
                            <h3>Backend Development</h3>
                            <p>Specializing in scalable microservices and robust APIs</p>
                        </motion.div>
                        
                        <motion.div className="highlight-card" variants={itemVariants}>
                            <FaGraduationCap className="highlight-icon" />
                            <h3>Education</h3>
                            <p>Computer Science student at Innopolis University</p>
                        </motion.div>
                        
                        <motion.div className="highlight-card" variants={itemVariants}>
                            <FaRegLightbulb className="highlight-icon" />
                            <h3>Problem Solving</h3>
                            <p>Focused on writing clean, optimized, and maintainable code</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
