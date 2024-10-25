import axios from 'axios';
import '../../assets/css/profilesitting.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EnrolledCourse({ courses }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [sortKey, setSortKey] = useState("");
    useEffect(() => {
        if (sortKey) {
            const sortedCourses = [...enrolledCourses].sort((a, b) => {
                if (sortKey === "name") {
                    return a.courseName.localeCompare(b.courseName);
                } else if (sortKey === "trainer") {
                    return a.teacherName.localeCompare(b.teacherName);
                } else if (sortKey === "status") {
                    return a.isCompleted - b.isCompleted;
                } else if (sortKey === "fee") {
                    return a.isPremium ? a.price - b.price : 0;
                }
                return 0;
            });
            setEnrolledCourses(sortedCourses);
        }
    }, [sortKey, enrolledCourses]);


    useEffect(() => {
    const fetchCourseDetails = async () => {
        const updatedCourses = await Promise.all(
            courses.map(async (course) => {
                try {
                    const response = await axios.get(`http://localhost:5000/getCourse/${course.courseId}`);
                    return { ...course, courseName: response.data.name, teacherName: response.data.teacherName };
                } catch (error) {
                    console.error(`Error fetching course ${course.courseId}: `, error);
                    return { ...course, courseName: 'Unknown Course', teacherName: 'Unknown Teacher' };
                }
            })
        );
        setEnrolledCourses(updatedCourses);
    };

    if (courses && courses.length > 0) {
        fetchCourseDetails();
    }
}, [courses]);
    return (
        <>
            <div className="d-flex justify-content-end pb-3">
                <div className="form-inline">
                    <select className="form-control" id="order-sort"  aria-placeholder='Sort by' onChange={(e) => setSortKey(e.target.value)}>
                        <option value="">Sort by</option>
                        <option value="name">Course Name</option>
                        <option value="trainer">Trainer’s Name</option>
                        <option value="status">Status</option>
                        <option value="fee">Fee</option>
                    </select>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Trainer</th>
                            <th>Status</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledCourses && enrolledCourses.length > 0 ? (
                            enrolledCourses.map((course, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link className="navi-link" to={`/course/${course.courseId}`}>
                                            {course.courseName}
                                        </Link>
                                    </td>
                                    <td>{course.teacherName}</td>
                                    <td>
                                        <span className={`badge ${course.isCompleted ? 'badge-success' : 'badge-info'} m-0`}>
                                            {course.isCompleted ? 'Passed' : 'Started'}
                                        </span>
                                    </td>
                                    <td>{course.isPremium ? course.price : 'Free'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No enrolled courses found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EnrolledCourse;
