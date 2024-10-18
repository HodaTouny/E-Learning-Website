import '../../assets/css/profilesitting.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/navbar';


function CourseList(userid) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getCourses');
                const filteredCourses = response.data.filter(course => course.teacherID === userid.User);
                setCourses(filteredCourses);
            } catch (error) {
                // setError('Error fetching courses');
                // setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <>
            <Navbar />
            { courses.map((course) => (
                <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i
                    class="fa fa-times"></i></span>
                    <div class="px-3 my-3">
                        <a class="cart-item-product" href="#">
                            <div class="cart-item-product-thumb"><img src={`http://localhost:5000/${course.image}`}
                                alt="Product" /></div>
                            <div class="cart-item-product-info">
                                <Link to={`/course/${course.courseID}`} target="_blank" rel="noopener noreferrer">
                                    <h4 class="cart-item-product-title">{course.name}</h4>
                                </Link>
                                <div class="text-lg text-body font-weight-medium pb-1">${course.price}</div>
                                <div class="text-lg text-body font-weight-medium pb-1">{course.enrolledStudentsCount} Enrolled Student</div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CourseList;