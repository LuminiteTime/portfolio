import React from 'react';
import { FaEnvelope, FaGithub, FaTelegram } from 'react-icons/fa';
import '../styles/contact.css';

const ContactSection = () => (
    <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-methods">
            <a href="mailto:trifonov2812@gmail.com" className="contact-item">
                <FaEnvelope className="icon"/>
                <span>Email</span>
            </a>
            <a href="https://github.com/LuminiteTime" className="contact-item" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon"/>
                <span>GitHub</span>
            </a>
            <a href="https://t.me/LuminiteTime" className="contact-item" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="icon"/>
                <span>Telegram</span>
            </a>
        </div>
    </section>
);

export default ContactSection;
