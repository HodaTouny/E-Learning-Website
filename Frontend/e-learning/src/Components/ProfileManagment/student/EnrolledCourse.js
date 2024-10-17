import '../../assets/css/profilesitting.css';
import { Link } from 'react-router-dom';

function EnrolledCourse({ courses }) {
    return (
        <>
            <div className="d-flex justify-content-end pb-3">
                <div className="form-inline">
                    <label className="text-muted mr-3" htmlFor="order-sort">Sort courses</label>
                    <select className="form-control" id="order-sort">
                        <option>Course Name</option>
                        <option>Trainer’s Name</option>
                        <option>Status</option>
                        <option>Fee</option>
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
                        {courses && courses.length > 0 ? (
                            courses.map((course, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link className="navi-link" to={`/CourseDetails/${course.courseId}`}>
                                            Course {course.courseId}
                                        </Link>
                                    </td>
                                    <td>Trainer Name Here</td>
                                    <td>
                                        <span className={`badge ${course.isCompleted ? 'badge-success' : 'badge-info'} m-0`}>
                                            {course.isCompleted ? 'Passed' : 'Started'}
                                        </span>
                                    </td>
                                    <td>{course.fee || 'Free'}</td>
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
