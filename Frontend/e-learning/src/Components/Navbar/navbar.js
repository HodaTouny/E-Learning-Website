import React, { useEffect, useState, useContext } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';

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
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavbarToggle = () => {
        setCollapsed(prev => !prev);
    };

    const handleLogout = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            
            if (!accessToken || !refreshToken) {
                alert("You are not logged in.");
                return;
            }
            console.log(accessToken, refreshToken);
            await axios.post('http://localhost:5000/education/logout', {
                refreshToken: refreshToken 
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}` 
                }
            });
    
            localStorage.clear();
            setUser(null);
            alert("Logout successful"); 
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error.response ? error.response.data : error);
            alert("Logout failed. Please try again.");
        }
    };

    const isHomePage = location.pathname === '/';
    const isLoginPage = location.pathname === '/Login';
    const isRegisterPage = location.pathname === '/Register';
    const isAllCoursesPage = location.pathname === '/courses';
    const isDashboardPage = location.pathname === '/dashboard';
    const headerClass = (isAllCoursesPage || isDashboardPage) ? 'default-header dark-navbar' : 'default-header';

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleConnectClick = () => {
        if (isHomePage) {
            scroller.scrollTo('ContactUs', {
                smooth: true,
                duration: 500,
                offset: -70,
            });
        } else {
            navigate('/', { state: { scrollToContact: true } });
        }
    };

    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollToContact) {
            setTimeout(() => {
                scroller.scrollTo('ContactUs', {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                });
            }, 100); 
        }
    }, [location]);

    const renderNavLinks = () => {
        const commonLinks = (
            <>
                <li className="nav-item">
                    <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${isActive('/about-us')}`} to="/about-us">About</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${isActive('/courses')}`} to="/courses">All Courses</Link>
                </li>
                <li className="nav-item" style={{ cursor: 'pointer' }} onClick={handleConnectClick}>
                    <Link className="nav-link">
                        Connect
                    </Link>
                
                </li>
            </>
        );
    
        if (isLoginPage) {
            return (
                <>
                    {commonLinks}
                    <li className="nav-item">
                        <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                </>
            );
        }
    
        if (isRegisterPage) {
            return (
                <>
                    {commonLinks}
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                </>
            );
        }
    
        if (!user) {
            return (
                <>
                    {commonLinks}
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                </>
            );
        }
    
        if (user.role === 'Admin') {
            return (
                <>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/allteachers">All Teachers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                    </li>
                </>
            );
        }
    
        return (
            <>
                {commonLinks}
                <li className="nav-item">
                    <Link className="nav-link" to={user.role === 'Teacher' ? '/teacher-profile' : '/profile-student'}>
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                </li>
            </>
        );
    };

    return (
        <header className={headerClass}>
            <nav className={`navbar navbar-expand-lg ${collapsed ? 'navbar-light' : 'navbar-dark'} ${scrolled ? 'header-scrolled sticky' : ''}`}>
                <div className="container p-3">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={handleNavbarToggle} aria-expanded={!collapsed} aria-label="Toggle navigation">
                        <span className="lnr lnr-menu"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end align-items-center ${collapsed ? '' : 'show'}`}>
                        <ul className="navbar-nav">
                            {renderNavLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
