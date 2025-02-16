import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJava, FaDatabase, FaJsSquare, FaServer, FaCode, FaTools } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiDocker, SiGit, SiPostman, SiScala } from 'react-icons/si';
import { RiTestTubeFill } from 'react-icons/ri';
import '../styles/skills.css';

const skillCategories = {
    backend: {
        title: "Backend Dev",
        icon: <FaServer />,
        subcategories: {
            languages: {
                title: "Languages",
                skills: [
                    { name: 'Java', icon: <FaJava /> },
                    { name: 'Scala', icon: <SiScala /> },
                ]
            },
            frameworks: {
                title: "Frameworks",
                skills: [
                    { name: 'Spring', icon: <SiSpring /> },
                ]
            }
        }
    },
    data: {
        title: "Data & Storage",
        icon: <FaDatabase />,
        subcategories: {
            databases: {
                title: "Databases",
                skills: [
                    { name: 'PostgreSQL', icon: <SiPostgresql /> },
                    { name: 'SQL', icon: <FaDatabase /> },
                ]
            },
            tools: {
                title: "API Tools",
                skills: [
                    { name: 'Postman', icon: <SiPostman /> },
                ]
            }
        }
    },
    frontend: {
        title: "Frontend & More",
        icon: <FaCode />,
        subcategories: {
            web: {
                title: "Web Technologies",
                skills: [
                    { name: 'JavaScript', icon: <FaJsSquare /> },
                    { name: 'React', icon: <FaReact /> },
                ]
            },
            additional: {
                title: "Additional",
                skills: [
                    { name: 'Python', icon: <FaPython /> },
                ]
            }
        }
    },
    devops: {
        title: "DevOps & Tools",
        icon: <FaTools />,
        subcategories: {
            containerization: {
                title: "Containerization",
                skills: [
                    { name: 'Docker', icon: <SiDocker /> },
                ]
            },
            versionControl: {
                title: "Version Control",
                skills: [
                    { name: 'Git', icon: <SiGit /> },
                ]
            },
            testing: {
                title: "Testing",
                skills: [
                    { name: 'TestContainers', icon: <RiTestTubeFill /> },
                ]
            }
        }
    }
};

const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const categoryVariants = {
        hidden: { y: 50, opacity: 0 },
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

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.skill-category');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="skills" className="skills">
            {/* Добавляем декоративные частицы */}
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Skills & Expertise
            </motion.h2>
            <motion.div
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {Object.entries(skillCategories).map(([key, category], index) => (
                    <motion.div
                        key={key}
                        className="skill-category"
                        variants={categoryVariants}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h3 className="category-title">
                            <span className="category-icon">{category.icon}</span>
                            {category.title}
                        </h3>
                        <div className="subcategories-grid">
                            {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                                <div key={subKey} className="skill-subcategory">
                                    <h4 className="subcategory-title">{subcategory.title}</h4>
                                    <div className="skills-list">
                                        {subcategory.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                className="skill-item"
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                                                }}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ 
                                                    duration: 0.3,
                                                    delay: skillIndex * 0.1
                                                }}
                                            >
                                                <div className="skill-icon-wrapper">
                                                    {skill.icon}
                                                </div>
                                                <span className="skill-name">{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsSection;
