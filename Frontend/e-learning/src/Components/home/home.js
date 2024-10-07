import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';

import headerimg from '../assets/img/header-img.png';


function Home() {
    return (
        <>
            <section class="home-banner-area p-5">
                <div class="container p-5">
                    <div class="row justify-content-center fullscreen align-items-center m-5 p-2">
                        <div class="col-lg-5 col-md-8 home-banner-left">
                            <h1 class="text-white">
                                Take the first step <br />
                                to learn with us
                            </h1>
                            <p class="mx-auto text-white  mt-20 mb-40">
                                In the history of modern astronomy, there is probably no one
                                greater leap forward than the building and launch of the space
                                telescope known as the Hubble.
                            </p>
                        </div>
                        <div class="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
                            <img class="img-fluid" src="img/header-img.png" alt="" />
                            <img src={headerimg} alt="header-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="feature-area">
                <div class="container-fluid">
                    <div class="feature-inner row">
                        <div class="col-lg-2 col-md-6">
                            <div class="feature-item d-flex">
                                <i class="ti-book"></i>
                                <div class="ml-20">
                                    <h4>New Classes</h4>
                                    <p>
                                        In the history of modern astronomy, there is probably no one greater leap forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="feature-item d-flex">
                                <i class="ti-cup"></i>
                                <div class="ml-20">
                                    <h4>Top Courses</h4>
                                    <p>
                                        In the history of modern astronomy, there is probably no one greater leap forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="feature-item d-flex border-right-0">
                                <i class="ti-desktop"></i>
                                <div class="ml-20">
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
        </>
    );
}

export default Home;
