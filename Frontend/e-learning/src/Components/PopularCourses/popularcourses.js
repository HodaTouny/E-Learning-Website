import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/Courses.css';

function PopularCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`/courses/sortByStudents`); 
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    let selectedCourses = courses.slice(0, 4);

    return (
        <section className="popular-course-area section-gap">
            <div className="container-fluid">
                <div className="row justify-content-center section-title">
                    <div className="col-lg-12">
                        <h2>
                            Popular Courses <br />
                            Available Right Now
                        </h2>
                        <p>
                            Embark on an exciting educational journey with our most popular courses! Discover valuable skills and insights to enhance your knowledge and career potential
                        </p>
                    </div>
                </div>
                <section>
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {selectedCourses.map((course, index) => (
                            <div className="col mb-5" key={index}>
                                <div className="card h-100">
                                    <div className="single-popular-course">
                                        <div className="thumb">
                                            <Link to={`/course/${course.courseID}`} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    className="f-img img-fluid mx-auto"
                                                    src={`http://localhost:5000/${course.image}`}
                                                    alt={course.name}
                                                />
                                            </Link>
                                        </div>
                                        <div className="details">
                                            <div className="d-flex justify-content-between mb-20">
                                                <p className="name">{course.category}</p>
                                                <p className="value">
                                                    {course.isPremium ? `$${course.price}` : 'Free'}
                                                </p>
                                            </div>
                                            <Link to={`/course/${course.courseID}`} target="_blank" rel="noopener noreferrer">
                                                <h4>{course.name}</h4>
                                            </Link>
                                            <div className="bottom d-flex mt-15">
                                                <ul className="list">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <p className="ml-20">
                                                    {course.enrolledStudentsCount} Students
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default PopularCourses;
