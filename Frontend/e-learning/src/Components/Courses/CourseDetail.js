import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Courses.css';
import Alert from '../SuccessAlert/SuccessAlert';

const CourseDetail = ({ studentId }) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [lessonProgress, setLessonProgress] = useState({});
  const [enrollStatus, setEnrollStatus] = useState(null);
  const [alertType, setAlertType] = useState('success');
  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getCourse/${id}`);
        setCourse(response.data);
      } catch (error) {
        setError('Error fetching course details');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post(
        'http://localhost:5000/education/enrollcourse',
        {
          studentId: JSON.parse(localStorage.getItem('user')).userID,
          courseId: id,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      setEnrollStatus('Successfully enrolled in the course!');
      setAlertType('success');
    } catch (error) {
      setEnrollStatus(error.response?.data?.message || 'Enrollment failed. Try again.');
      setAlertType('error');
    }
  };

  const toggleLesson = (index) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  const handleProgress = (index, e) => {
    const progress = (e.target.currentTime / e.target.duration) * 100;
    setLessonProgress((prev) => ({ ...prev, [index]: progress.toFixed(0) }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 banner-right" style={{ marginTop: '200px' }}>
              <h1 className="text-white" style={{ textAlign: 'right' }}>Course Details</h1>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home </Link>
                  <i className="lnr lnr-arrow-right"></i>
                  <Link to="/courses">Courses </Link>
                  <i className="lnr lnr-arrow-right"></i>
                  <Link to={`/course/${course.id}`}>Course Details</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-details-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 course-details-left">
              <div className="main-image">
                <img
                  src={`http://localhost:5000/${course.image}`}
                  alt={course.name}
                  className="img-fluid"
                  style={{ width: '700px', height: '300px' }}
                />
              </div>
              <div className="content-wrapper">
                <h4 className="title">Description</h4>
                <div className="content">{course.description}</div>

                <h4 className="title">Course Outline</h4>
                <div className="content">
                  <ul className="course-list" style={{ flexDirection: 'column' }}>
                    {course.lessons && course.lessons.length > 0 ? (
                      course.lessons.map((lesson, index) => (
                        <div key={index}>
                          <li
                            className="justify-content-between d-flex"
                            onClick={() => toggleLesson(index)}
                            style={{ cursor: 'pointer' }}
                          >
                            <p>{lesson.title} {lessonProgress[index] ? ` - ${lessonProgress[index]}%` : ''}</p>
                            <p className="btn text-uppercase">View Details</p>
                          </li>

                          {expandedLesson === index && (
                            <div className="lesson-details">
                              {lesson.video ? (
                                <video
                                  controls
                                  src={`http://localhost:5000/${lesson.video}`}
                                  className="lesson-video"
                                  onTimeUpdate={(e) => handleProgress(index, e)}
                                >
                                  Your browser does not support the video tag.
                                </video>
                              ) : (
                                <p>No video available for this lesson.</p>
                              )}
                              <p>{lesson.description}</p>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No lessons available for this course.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 right-contents">
              <ul>
                <li>
                  <p className="justify-content-between d-flex">
                    <p>Course Name</p>
                    <span className="or">{course.name}</span>
                  </p>
                </li>
                <li>
                  <p className="justify-content-between d-flex">
                    <p>Trainer’s Name</p>
                    <span className="or">{course.teacherName}</span>
                  </p>
                </li>
                <li>
                  <p className="justify-content-between d-flex">
                    <span>Course Fee</span>
                    <span>{course.isPremium ? course.price : '0'}$</span>
                  </p>
                </li>
                <li>
                  <p className="justify-content-between d-flex">
                    <p>Category</p>
                    <span>{course.category}</span>
                  </p>
                </li>
              </ul>
              <button onClick={handleEnroll} className="btn text-uppercase enroll">
                Enroll the course
              </button>

              <Alert message={enrollStatus} type={alertType} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
