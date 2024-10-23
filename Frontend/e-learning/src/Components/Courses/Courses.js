import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`/getCourses`);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="course-container">
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.courseID} className="course-card">
            <Link to={`/course/${course.courseID}`}>
              <img src={`http://localhost:5000/${course.image}`} loading="lazy" alt={course.name} className="course-image" />
            </Link>
            <div className="course-details">
            <Link to={`/course/${course.courseID}`}>
              <h3>{course.name}</h3>
            </Link>

              {/* <p>{course.description}</p> */}
              {/* <p>Category: {course.category}</p> */}
              {/* {course.price && <p>Price: ${course.price}</p>} */}
              <p>Created On: {new Date(course.createdDate).toLocaleDateString()}</p>
              <p>{course.isPremium ? 'Premium Course' : 'Free Course'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
