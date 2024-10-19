import React, { useEffect, useState } from 'react';

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
                    <div className="col-lg-3 col-md-3 single-footer-widget">
                        <h4>Top Products</h4>
                        <ul>
                            <li><a href="#">Managed Website</a></li>
                            <li><a href="#">Manage Reputation</a></li>
                            <li><a href="#">Power Tools</a></li>
                            <li><a href="#">Marketing Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 single-footer-widget">
                        <h4>Features</h4>
                        <ul>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Experts</a></li>
                            <li><a href="#">Agencies</a></li>
                        </ul>
                    </div>

                </div>
                <div className="footer-bottom row align-items-center text-align-center">
                    <p className="footer-text m-0 col-lg-8 col-md-12 text-align-center">
                        Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
