import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection.jsx';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Home = () => (
    <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
    </main>
);

export default Home;
