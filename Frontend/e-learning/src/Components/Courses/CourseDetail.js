import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/css/Courses.css';
import { UserContext } from '../userContext'; 
import Alert from '../SuccessAlert/SuccessAlert';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, fetchCourses, verifyOtp } from '../../actions/courseActions';

const CourseDetail = () => {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course) || {};
  const {enrollStatus = "", isEnrolled = false } = useSelector((state) => state.course) || {};

  const [expandedLesson, setExpandedLesson] = useState(null);
  const [lessonProgress, setLessonProgress] = useState({});
  const [alertType, setAlertType] = useState('success');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    dispatch(fetchCourses(id));
  }, [dispatch, id]);

  
  if (!course) return <p>Course not found</p>;


  const storedUser = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('accessToken');
  
  const userRole = user ? user.role : null;

 const handleEnroll = async () => {
  if (storedUser && course) {
    try {
      await dispatch(enrollCourse(course.courseID, storedUser.userID, token));
      const currEnrollStatus = enrollStatus;
      if (currEnrollStatus) {
        setAlertMessage(currEnrollStatus);
        setAlertType(currEnrollStatus.includes("success") ? "success" : "error");
      }
      else{
        setAlertMessage('Enrollment status is unclear. Please check.');
        setAlertType('error');
      }
      setOtpSent(true);
    }
    catch(error){
      if (error.response && error.response.data) {
        setAlertMessage(error.response.data.message);
        setAlertType('error');
      }
      else{
        setAlertMessage('An error occurred during enrollment. Please try again.');
        setAlertType('error');
      }
    }
  }
  else{
    setAlertMessage('User not found or invalid course');
    setAlertType('error');
  }
};




  const handleOtpVerification = async () => {
    if (storedUser) {
      dispatch(verifyOtp(storedUser.userID, otp, course, token));
      setOtpSent(false);
      setOtp('');
      setUser((prevUser) => ({
        ...prevUser,
        enrolledCourses: [
          ...prevUser.enrolledCourses,
          { courseID: course.courseID, courseName: course.name },
        ],
      }));
    }
  };

  const toggleLesson = (index) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  const handleProgress = (index, e) => {
    const progress = (e.target.currentTime / e.target.duration) * 100;
    setLessonProgress((prev) => ({ ...prev, [index]: progress.toFixed(0) }));
  };
  

  return (
    <>
      <Alert message={alertMessage} type={alertType} />
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
                  src={`/${course.image}`}
                  loading="lazy"
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
                        <div key={index} className="mb-4" style={{ borderBottom: '1px solid #ddd' }}>
                          <li
                            className="justify-content-between d-flex"
                            onClick={() => {
                              if (userRole !== 'Student' || (userRole === 'Student' && isEnrolled)) {
                                toggleLesson(index);
                              } else {
                                setAlertMessage('You must be enrolled in this course to view details.');
                                setAlertType('error');
                              }
                            }}
                            style={{ cursor: userRole !== 'Student' || (userRole === 'Student' && isEnrolled) ? 'pointer' : 'not-allowed' }}
                          >
                            <p>{lesson.title} {lessonProgress[index] ? ` - ${lessonProgress[index]}%` : ''}</p>
                            <p className="btn text-uppercase mb-3">
                              {expandedLesson === index ? 'Collapse lesson' : 'Expand lesson'}
                            </p>
                          </li>
                          {expandedLesson === index && (
                            <div className="lesson-details">
                              {lesson.video ? (
                                <video
                                  controls
                                  src={`/${lesson.video}`}
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
                    <span>{course.name}</span>
                  </p>
                </li>
                <li>
                  <p className="justify-content-between d-flex">
                    <p>Trainer</p>
                    <span>{course.teacherName}</span>
                  </p>
                </li>
                <li>
                  <p className="justify-content-between d-flex">
                    <p>Course Fee</p>
                    <span>${course.price}</span>
                  </p>
                </li>
              </ul>
              {userRole === 'Student' && !isEnrolled && (
                <>
                  <button className="btn btn-primary" onClick={handleEnroll}>
                    Enroll Now
                  </button>
                  {course.isPremium && otpSent && (
                    <div className="otp-verification">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <button onClick={handleOtpVerification}>Verify OTP</button>
                    </div>
                  )}
                  {enrollStatus && <p>{enrollStatus}</p>}
                </>
              )}
              {isEnrolled && (
                <div className="alert alert-success" role="alert">
                  You're enrolled in this course!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
