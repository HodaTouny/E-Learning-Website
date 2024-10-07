import React, { useEffect, useState } from 'react';

import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';

import logo from '../assets/img/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [collapsed, setCollapsed] = useState(true); // For toggling collapse

    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle toggling the navbar when clicking the button
    const handleNavbarToggle = () => {
        setCollapsed(!collapsed); // Toggle the collapsed state
    };

    return (
        <header className="default-header">
            <nav
                className={`navbar navbar-expand-lg ${collapsed ? 'navbar-light' : 'navbar-dark'} ${scrolled ? 'header-scrolled sticky' : ''
                    }`}
            >
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavbarToggle} // Toggle on click
                        aria-expanded={!collapsed} // Dynamically change aria-expanded
                        aria-label="Toggle navigation"
                    >
                        <span className="lnr lnr-menu"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end align-items-center ${collapsed ? '' : 'show'}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#courses">
                                    Courses
                                </a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Pages
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#elements">
                                        Elements
                                    </a>
                                    <a className="dropdown-item" href="#course-details">
                                        Course Details
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Blog
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#blog-home">
                                        Blog Home
                                    </a>
                                    <a className="dropdown-item" href="#blog-single">
                                        Blog Details
                                    </a>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#contacts">
                                    Contacts
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <button className="search">
                                    <span className="lnr lnr-magnifier" id="search"></span>
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
