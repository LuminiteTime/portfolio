import React from 'react';
import '../styles/navbar.css';
import faviconImage from '../assets/favicon-512x512.png';

const Navbar = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <img 
                    src={faviconImage} 
                    alt="coffee icon" 
                    className="navbar-favicon"
                />
                <h1>Coffee and Java{'/'}Scala enjoyer and simply a good person...</h1>
            </div>
            <ul>
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
