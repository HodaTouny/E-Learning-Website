import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/css/Footer.css';

const Footer = () => {


    return (
        <footer className="footer-area section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 style={{ color: '#FFF', marginBottom: '20px' }}>Get in Touch</h2>
                    <p style={{ color: '#FFF', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                        We'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out. 
                        Follow us on social media or drop us an email. Stay updated and be closer to our e-learning community!
                    </p>
                </div>
            </div>
            <div className="row">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '40px', marginTop: '30px' }}>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ color: '#FFF' }} />
                    </a>
                    <a href="https://github.com/HodaTouny/E-Learning-Website" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ color: '#FFF' }} />
                    </a>
                    <a href="mailto:your-email@gmail.com">
                        <FaEnvelope style={{ color: '#FFF' }} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
