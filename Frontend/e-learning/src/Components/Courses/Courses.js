// src/components/Courses.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import { Link } from 'react-router-dom';
import '../assets/css/Courses.css';

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

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
