import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();
    
    // Handle scrolling effect to make the navbar sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {  // You can adjust this threshold (50px) based on your needs
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle toggling the navbar when clicking the button
    const handleNavbarToggle = () => {
        setCollapsed(!collapsed); // Toggle the collapsed state
    };

    const isHomePage = location.pathname === '/';
    // Add a special class to 'default-header' if the location is not the homepage
    const isAllCoursesPage = location.pathname === '/courses'; // Adjust the path as needed
    const isCourseDetailsPage = location.pathname === '/CourseDetails'; // Adjust the path as needed
    const headerClass = isAllCoursesPage | isCourseDetailsPage ? 'default-header visibleStyle' : 'default-header'; // Add 'other-page' class for other routes

    return (
        <header className={headerClass}>
            <nav
                className={`navbar navbar-expand-lg ${collapsed ? 'navbar-light' : 'navbar-dark'} ${scrolled ? 'header-scrolled sticky' : ''
                    }`} // Apply 'header-scrolled' and 'sticky' class on scroll
            >
                <div className="container p-3">
                    <a className="navbar-brand" href="#Home">
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
                                {isHomePage ? (
                                    <ScrollLink
                                        className="nav-link"
                                        to="Home" // The section ID to scroll to
                                        spy={true}
                                        smooth={true}
                                        duration={300}
                                        offset={-70} // Adjust offset for sticky navbar height
                                    >
                                        Home
                                    </ScrollLink>
                                ) : (
                                    <Link className="nav-link" to="/"> {/* Link to Home route */}
                                        Home
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">
                                    All Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="ContactUs" smooth={true} duration={500} offset={-70}>
                                    Contact Us
                                </ScrollLink>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="add-course-form" smooth={true} duration={500} offset={-70}>
                                    Add Course
                                </Link>
                            </li>

                             {/* <li className="nav-item">
                                <Link className="nav-link" to="backend-courses" smooth={true} duration={500} offset={-70}>
                                    Backend Courses
                                </Link>
                            </li> */}


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
