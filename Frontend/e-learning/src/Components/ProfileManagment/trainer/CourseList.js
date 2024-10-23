import '../../assets/css/profilesitting.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SuccessAlert from '../../SuccessAlert/SuccessAlert';

function CourseList(userid) {
    const [courses, setCourses] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`/getCourses`);
                const filteredCourses = response.data.filter(course => course.teacherID === userid.User);
                setCourses(filteredCourses);
            } catch (error) {
                console.error('Failed to fetch courses');
            }
        };

        fetchCourses();
    }, []);

    const deleteHandler = async (courseID,teacherID) => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            await axios.delete(`/deleteCourse/${courseID}`);
            await axios.delete(`/education/deletecourse`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                data: {
                    courseID,
                    teacherID
                }
            });
            
            setCourses(courses.filter(course => course.courseID !== courseID));
            setAlertMessage({ message: 'Course deleted successfully', type: 'success' });
        } catch (error) {
            console.error('Failed to delete the course');
            setAlertMessage({ message: 'Error deleting the course', type: 'error' });
        }
    };

    return (
        <>
            {alertMessage && <SuccessAlert message={alertMessage.message} type={alertMessage.type} />}
            {courses.map((course) => (
                <div class="cart-item d-md-flex justify-content-between">
                    <span class="remove-item">
                        <i class="fa fa-times" onClick={() => deleteHandler(course.courseID,course.teacherID)} ></i>
                    </span>
                    <div class="px-3 my-3">
                        <a class="cart-item-product" href="#">
                            <div className="cart-item-product-thumb justify-content-center">
                                <img style={{ borderRadius: "14px" }} src={`/${course.image}`} alt="Course Thumbnail" />
                            </div>

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
