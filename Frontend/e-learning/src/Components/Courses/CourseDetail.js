import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Courses.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getCourse/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching course details');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="course-detail-container">
      {course && (
        <div className="course-detail-card">
          <figure>
            <img 
              src={`http://localhost:5000/${course.image}`} 
              alt={course.name} 
              className="course-detail-image" 
            />
            <figcaption>
              <h1>{course.name}</h1>
              <p className="course-category">Category: {course.category}</p>
              {course.price && <p className="course-price">Price: ${course.price}</p>}
              <p>Created On: {new Date(course.createdDate).toLocaleDateString()}</p>
              <p>{course.isPremium ? 'Premium Course' : 'Free Course'}</p>
            </figcaption>
          </figure>
          <div className="course-description">
            <h2>Course Description</h2>
            <p>{course.description}</p>
          </div>
          <div className="course-video-section">
            <h2>Course Video</h2>
            <video 
              controls 
              src={`http://localhost:5000/${course.video}`} 
              className="course-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
