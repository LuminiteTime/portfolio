import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';
import myPhoto from '../assets/avatar.png';

const HeroSection = () => (
    <section className="hero">
        <div className="hero-content">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I&apos;m <span className="highlight">Mikhail Trifonov</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Enthusiastic Java{'/'}Scala Backend Developer
            </motion.p>
        </div>
        <div className="hero-photo-container">
            <div className="photo-frame">
                <motion.img
                    src={myPhoto}
                    alt="Mikhail Trifonov"
                    className="hero-photo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                />
            </div>
        </div>
        <div className="floating-particles"></div>
    </section>
);

export default HeroSection;
