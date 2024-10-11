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


function Home() {
    return (
        <>
            <section className="home-banner-area p-5">
                <div className="container homeContainer p-5 pt-0">
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
            <PopularCourses />
        </>
    );
}

export default Home;
