import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/css/home.css';

import headerimg from '../assets/img/header-img.png';
import PopularCourses from '../PopularCourses/popularcourses';
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const coursesData = [
    {
        id: 1,
        categories: ['CSS', 'JavaScript'],
        title: 'Quick Tip: Create a Very Simple Parallax Effect With CSS & JavaScript',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-build-a-dead-simple-parallax-effect-with-css-javascript--cms-33061?_ga=2.146015156.1249101154.1555312171-2126893531.1553152868',
    },
    {
        id: 2,
        categories: ['CSS', 'JavaScript'],
        title: 'How to Build a Static Portfolio Page With CSS & JavaScript',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/chart-pre.png',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-build-a-portfolio-page-with-css-javascript--cms-32933?_ga=2.268974834.267848227.1555345574-242901505.1471790948',
    },
    {
        id: 3,
        categories: ['CSS', 'JavaScript'],
        title: 'How to Build a Responsive Multi-Column Layout With CSS Grid',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-column-layout-with-css-grid--cms-32769',
    },
    {
        id: 4,
        categories: ['JavaScript', 'jQuery'],
        title: 'How to Create a Lightbox with HTML, CSS, and jQuery',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-lightbox-with-html-css-and-jquery--cms-32847',
    },
    {
        id: 5,
        categories: ['JavaScript', 'WordPress'],
        title: 'Creating a Responsive Slider with JavaScript and CSS',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-slider-with-javascript-and-css--cms-32945',
    },
    {
        id: 6,
        categories: ['CSS', 'JavaScript'],
        title: 'Quick Tip: Using CSS Variables to Create a Color Theme',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/quick-tip-using-css-variables-to-create-a-color-theme--cms-32887',
    },
    {
        id: 7,
        categories: ['jQuery', 'WordPress'],
        title: 'How to Create an Image Gallery with jQuery and CSS',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-an-image-gallery-with-jquery-and-css--cms-33035',
    },
    {
        id: 8,
        categories: ['CSS', 'JavaScript', 'fullPage.js'],
        title: 'How to Create a Full-Screen Scrolling Website with fullPage.js',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-full-screen-scrolling-website-with-fullpagejs--cms-33108',
    },
    {
        id: 9,
        categories: ['CSS', 'JavaScript'],
        title: 'Creating a CSS Card Layout with Flexbox',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
        link: 'https://webdesign.tutsplus.com/tutorials/how-to-create-a-css-card-layout-with-flexbox--cms-32810',
    },
];

function Home() {
    return (
        <>
            <section className="home-banner-area p-5" id="Home">
                <div className="container homeContainer p-5">
                    <div className="row justify-content-center fullscreen align-items-center m-lg-5 m-xl-5 p-2">
                        <div className="col-lg-5 col-md-8 home-banner-left">
                            <h1 className="text-white">
                                Take the first step <br />
                                to learn with us
                            </h1>
                            <p className="mx-auto text-white mt-20 mb-40">
                                In the history of modern astronomy, there is probably no one
                                greater leap forward than the building and launch of the space
                                telescope known as the Hubble.
                            </p>
                        </div>
                        <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
                            <img className="img-fluid" src="img/header-img.png" alt="" />
                            <img src={headerimg} alt="header-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-area">
                <div className="container-fluid">
                    <div className="feature-inner row">
                        <div className="col-lg-2 col-md-6">
                            <div className="feature-item d-flex">
                                <i className="ti-book"></i>
                                <div className="ml-20">
                                    <h4>New classNamees</h4>
                                    <p>
                                        In the history of modern astronomy, there is probably no one greater leap forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature-item d-flex">
                                <i className="ti-cup"></i>
                                <div className="ml-20">
                                    <h4>Top Courses</h4>
                                    <p>
                                        In the history of modern astronomy, there is probably no one greater leap forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature-item d-flex border-right-0">
                                <i className="ti-desktop"></i>
                                <div className="ml-20">
                                    <h4>Full E-Books</h4>
                                    <p>
                                        In the history of modern astronomy, there is probably no one greater leap forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="PopularCourses" >
                <PopularCourses courses={coursesData} />
            </section>
            <section id="ContactUs">
                <ContactUs />
            </section>
            <section id="Footer" >
                <Footer />
            </section>
        </>
    );
}

export default Home;
