import { Link } from "react-router-dom";
import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import { useEffect, useRef } from "react";

import img from '../assets/img/about.png';
import video from '../assets/img/video.mp4';
const About=()=>{
    const videoRef = useRef(null); 
    useEffect(() => {
        const videoElement = videoRef.current;
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                videoElement.play(); 
            } else {
                videoElement.pause(); 
            }
        },
        { threshold: 0.5 } 
    );
    if (videoElement) {
        observer.observe(videoElement);
    }
    return () => {
        if (videoElement) {
            observer.unobserve(videoElement);
        }
    };
}, []);

    return (
        <>
        <section class="banner-area">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-10 banner-right" style={{marginTop:"200px"}}>
          <h1 class="text-white" style={{textAlign:"right"}}>
            About Us
          </h1>
          <p class="mx-auto text-white  mt-20 mb-40">
            In the history of modern astronomy, there is probably no one greater leap forward than the building.
          </p>
          <div class="link-nav">
            <span class="box">
                <Link to={"/"}>Home </Link>
              <i class="lnr lnr-arrow-right"></i>
                <Link to={"/about-us"}>About </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

            <section className="about-area section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-6 about-left">
                            <img className="img-fluid" src={img} alt="About Us" />
                        </div>
                        <div className="offset-lg-1 col-lg-5 col-md-12 about-right">
                            <h1>
                                Explore <br />
                                500+ Courses <br />
                                from 20+ Platforms
                            </h1>
                            <div>
                                <p>
                                    Our e-learning platform empowers educators to upload their courses, creating a diverse range of learning opportunities. 
                                    Whether you're a teacher looking to share your expertise or a student eager to learn, we connect you seamlessly.
                                </p>
                                <p>
                                    Students can browse, purchase, and access high-quality courses tailored to their interests and goals. 
                                    Join us to unlock a world of knowledge and skills at your own pace, while contributing to a community that values 
                                    quality education for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-area section-gap-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="section-title text-white">
                                <h2 className="text-white">
                                    Welcome To <br />
                                    Eclipse
                                </h2>
                                <p>
                                    Discover engaging learning experiences with our expert instructors through these 
                                    curated videos that showcase our courses.
                                </p>
                                <p className="text-white mt-20">
                                    Join us on a journey to unlock your potential with engaging courses and expert instructors.
                                </p>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-md-6 video-left">
                            <div className="single-video">
                                <div className="video-part">
                                    <video ref={videoRef} width="100%" height="315" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
