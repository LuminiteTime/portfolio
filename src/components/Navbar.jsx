import React, { useState } from 'react';
import '../styles/navbar.css';
import faviconImage from '../assets/favicon-512x512.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close menu after clicking a link on mobile
        setIsMenuOpen(false);
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <img 
                    src={faviconImage} 
                    alt="coffee icon" 
                    className="navbar-favicon"
                />
                <h1>Coffee and Java{'/'}Scala enjoyer</h1>
            </div>
            
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={scrollToTop}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
                <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
