import React, { useEffect, useState } from 'react';

import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/allCourses.css';

const AllCourses = () => {
    return (
        <>
            <section class="author-archive">
                <div class="container">
                    <h1>Filter Courses</h1>
                    <input type="radio" id="All" name="categories" value="All" checked />
                    <input type="radio" id="CSS" name="categories" value="CSS" />
                    <input type="radio" id="JavaScript" name="categories" value="JavaScript" />
                    <input type="radio" id="jQuery" name="categories" value="jQuery" />
                    <input type="radio" id="WordPress" name="categories" value="WordPress" />
                    <input type="radio" id="Slider" name="categories" value="Slider" />
                    <input type="radio" id="fullPage.js" name="categories" value="fullPage.js" />
                    <ol class="filters">
                        <li>
                            <label for="All">All</label>
                        </li>
                        <li>
                            <label for="CSS">CSS</label>
                        </li>
                        <li>
                            <label for="JavaScript">JavaScript</label>
                        </li>
                        <li>
                            <label for="jQuery">jQuery</label>
                        </li>
                        <li>
                            <label for="WordPress">WordPress</label>
                        </li>
                        <li>
                            <label for="Slider">Slider</label>
                        </li>
                        <li>
                            <label for="fullPage.js">fullPage.js</label>
                        </li>
                    </ol>

                    <ol class="posts">
                        <li class="post" data-category="CSS JavaScript">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-build-a-dead-simple-parallax-effect-with-css-javascript--cms-33061?_ga=2.146015156.1249101154.1555312171-2126893531.1553152868" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-build-a-dead-simple-parallax-effect-with-css-javascript--cms-33061?_ga=2.146015156.1249101154.1555312171-2126893531.1553152868" target="_blank">Quick Tip: Create a Very Simple Parallax Effect With CSS & JavaScript
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS JavaScript">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-portfolio-page-with-css-javascript--cms-32933?_ga=2.268974834.267848227.1555345574-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/chart-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-portfolio-page-with-css-javascript--cms-32933?_ga=2.268974834.267848227.1555345574-242901505.1471790948" target="_blank">How to Build a Static Portfolio Page With CSS & JavaScript
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="JavaScript WordPress">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/dropdown-navigation-how-to-maintain-the-selected-option-on-page-load-on-a-wordpress-site--cms-32211?_ga=2.3551667.267848227.1555345574-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/pre-wp.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                            <li>
                                                <a href="">WordPress</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/dropdown-navigation-how-to-maintain-the-selected-option-on-page-load-on-a-wordpress-site--cms-32211?_ga=2.3551667.267848227.1555345574-242901505.1471790948" target="_blank">Dropdown Navigation: How to Maintain the Selected Option On WordPress
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS JavaScript">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/dropdown-navigation-how-to-maintain-the-selected-option-on-page-load--cms-32210?_ga=2.192885033.267848227.1555345574-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/load-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/dropdown-navigation-how-to-maintain-the-selected-option-on-page-load--cms-32210?_ga=2.192885033.267848227.1555345574-242901505.1471790948" target="_blank">Dropdown Navigation: How to Maintain the Selected Option on Page Load
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-enhance-a-page-with-css-animations--cms-32100?_ga=2.3551667.267848227.1555345574-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/animations-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-enhance-a-page-with-css-animations--cms-32100?_ga=2.3551667.267848227.1555345574-242901505.1471790948" target="_blank">Enhance the Way a Web Page Loads With CSS Animations
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086?_ga=2.225771033.267848227.1555345574-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/flex-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086?_ga=2.225771033.267848227.1555345574-242901505.1471790948" target="_blank">How to Build a Full-Screen Responsive Page With Flexbox</a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="fullPage.js">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/how-to-create-an-animated-spirit-day-presentation-with-fullpagejs--cms-32005?_ga=2.171060384.1249101154.1555312171-2126893531.1553152868" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/spirit-pre.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">fullPage.js</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/how-to-create-an-animated-spirit-day-presentation-with-fullpagejs--cms-32005?_ga=2.171060384.1249101154.1555312171-2126893531.1553152868" target="_blank">How to Create an Animated Spirit Day Presentation With fullPage.js
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS JavaScript">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-manipulate-cursor-appearance-with-css--cms-31825?_ga=2.149104566.1249101154.1555312171-2126893531.1553152868" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-pre.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-manipulate-cursor-appearance-with-css--cms-31825?_ga=2.149104566.1249101154.1555312171-2126893531.1553152868" target="_blank">Quick Tip: How to Manipulate the Cursor Appearance With CSS
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="jQuery CSS Slider">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-full-screen-responsive-carousel-slider-with-owljs--cms-31771?_ga=2.214527703.1129106392.1555690352-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/pre-oo.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">jQuery</a>
                                            </li>
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">Slider</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-a-full-screen-responsive-carousel-slider-with-owljs--cms-31771?_ga=2.214527703.1129106392.1555690352-242901505.1471790948" target="_blank">How to Build a Full-Screen Responsive Carousel Slider With Owl.js
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="jQuery CSS Slider">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-an-attractive-responsive-image-gallery-with-slickjs--cms-31355?_ga=2.245039813.1129106392.1555690352-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/slick-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">jQuery</a>
                                            </li>
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">Slider</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/how-to-build-an-attractive-responsive-image-gallery-with-slickjs--cms-31355?_ga=2.245039813.1129106392.1555690352-242901505.1471790948" target="_blank">How to Build an Attractive Responsive Image Gallery With slick.js
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="CSS JavaScript">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/a-simple-javascript-technique-for-filling-star-ratings--cms-29450?_ga=2.239800003.1129106392.1555690352-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/stars-pre.png" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">CSS</a>
                                            </li>
                                            <li>
                                                <a href="">JavaScript</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/a-simple-javascript-technique-for-filling-star-ratings--cms-29450?_ga=2.239800003.1129106392.1555690352-242901505.1471790948" target="_blank">A Simple JavaScript Technique for Filling Star Ratings
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li class="post" data-category="jQuery fullPage.js">
                            <article>
                                <figure>
                                    <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-scroll-animations-with-fullpagejs-and-animatecss--cms-25235?_ga=2.245041733.1129106392.1555690352-242901505.1471790948" target="_blank">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/scroll-preview.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <ol class="post-categories">
                                            <li>
                                                <a href="">jQuery</a>
                                            </li>
                                            <li>
                                                <a href="">fullPage.js</a>
                                            </li>
                                        </ol>
                                        <h2 class="post-title">
                                            <a href="https://webdesign.tutsplus.com/tutorials/quick-tip-scroll-animations-with-fullpagejs-and-animatecss--cms-25235?_ga=2.245041733.1129106392.1555690352-242901505.1471790948" target="_blank">Quick Tip: Scroll Animations With fullPage.js and Animate.css
                                            </a>
                                        </h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    );
};

export default AllCourses;

{/* 
<>
    <div className="container">
                <h1> All Courses </h1>
            </div>
            <section class="py-5">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="single-popular-course">
                                    <div class="thumb">
                                        <img class="f-img img-fluid mx-auto" src={pic1} alt="" / />
                                    </div>
                                    <div class="details">
                                        <div class="d-flex justify-content-between mb-20">
                                            <p class="name">programming language</p>
                                            <p class="value">$150</p>
                                        </div>
                                        <a href="#">
                                            <h4>Learn Angular JS Course for Legendary Persons</h4>
                                        </a>
                                        <div class="bottom d-flex mt-15">
                                            <ul class="list">
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                            </ul>
                                            <p class="ml-20">25 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="single-popular-course">
                                    <div class="thumb">
                                        <img class="f-img img-fluid mx-auto" src={pic1} alt="" / />
                                    </div>
                                    <div class="details">
                                        <div class="d-flex justify-content-between mb-20">
                                            <p class="name">programming language</p>
                                            <p class="value">$150</p>
                                        </div>
                                        <a href="#">
                                            <h4>Learn Angular JS Course for Legendary Persons</h4>
                                        </a>
                                        <div class="bottom d-flex mt-15">
                                            <ul class="list">
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                            </ul>
                                            <p class="ml-20">25 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="single-popular-course">
                                    <div class="thumb">
                                        <img class="f-img img-fluid mx-auto" src={pic1} alt="" / />
                                    </div>
                                    <div class="details">
                                        <div class="d-flex justify-content-between mb-20">
                                            <p class="name">programming language</p>
                                            <p class="value">$150</p>
                                        </div>
                                        <a href="#">
                                            <h4>Learn Angular JS Course for Legendary Persons</h4>
                                        </a>
                                        <div class="bottom d-flex mt-15">
                                            <ul class="list">
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                            </ul>
                                            <p class="ml-20">25 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="single-popular-course">
                                    <div class="thumb">
                                        <img class="f-img img-fluid mx-auto" src={pic1} alt="" / />
                                    </div>
                                    <div class="details">
                                        <div class="d-flex justify-content-between mb-20">
                                            <p class="name">programming language</p>
                                            <p class="value">$150</p>
                                        </div>
                                        <a href="#">
                                            <h4>Learn Angular JS Course for Legendary Persons</h4>
                                        </a>
                                        <div class="bottom d-flex mt-15">
                                            <ul class="list">
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fa fa-star"></i></a>
                                                </li>
                                            </ul>
                                            <p class="ml-20">25 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</> */}