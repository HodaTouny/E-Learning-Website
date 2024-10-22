import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Courses.css';
import { UserContext } from '../userContext'; 
import Alert from '../SuccessAlert/SuccessAlert';

const CourseDetail = () => {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [lessonProgress, setLessonProgress] = useState({});
  const [enrollStatus, setEnrollStatus] = useState(null);
  const [alertType, setAlertType] = useState('success');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(''); 

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await axios.get(`${process.env.REACT_APP_API_URL}/getCourse/${id}`);
        setCourse(courseResponse.data);
  
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userId = JSON.parse(storedUser).userID;
          
          if (user && user.enrolledCourses) {
            const enrolled = user.enrolledCourses.some(
              (enrolledCourse) => enrolledCourse.courseId === parseInt(id)
            );
            setIsEnrolled(enrolled);
          }
        }
      } catch (error) {
        setError('Error fetching course details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourse();
  }, [id, user]);
  
  // Check if user exists before accessing user.role
  const userRole = user ? user.role : null;

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const user = JSON.parse(localStorage.getItem('user'));

      if (course.isPremium) {
        const email = user.email;
        const billDetails = `Course: ${course.name}, Price: ${course.price}$`;

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/payment/initiate`,
          { userId: user.userID, email, billDetails },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setEnrollStatus(response.data.message || 'OTP sent to your email.');
        setOtpSent(true);
        setAlertType('success');

      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/education/enrollcourse`,
          { studentId: user.userID, courseId: course.courseID },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setEnrollStatus('Successfully enrolled in the course!');
        setAlertType('success');
        setIsEnrolled(true); 
        setUser((prevUser) => ({
          ...prevUser,
          enrolledCourses: [
            ...prevUser.enrolledCourses,
            { courseId: course.courseID, courseName: course.name },
          ],
        }));
      }
    } catch (error) {
      setEnrollStatus(error.response?.data?.message || 'Enrollment failed. Try again.');
      setAlertType('error');
    }
  };

  const handleOtpVerification = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const user = JSON.parse(localStorage.getItem('user'));

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/verify`,
        { userId: user.userID, otp },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setEnrollStatus(response.data.message || 'Payment verified successfully.');
      setAlertType('success');
      setOtpSent(false); 
      setOtp(''); 

      await axios.post(
        `${process.env.REACT_APP_API_URL}/education/enrollcourse`,
        { studentId: user.userID, courseId: course.courseID },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setIsEnrolled(true);
      setUser((prevUser) => ({
        ...prevUser,
        enrolledCourses: [
          ...prevUser.enrolledCourses,
          { courseId: course.courseID, courseName: course.name },
        ],
      }));

      await axios.post(
        `${process.env.REACT_APP_API_URL}/education/addbalance`,
        { teacherID: course.teacherID, amount: course.price * 0.8 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

    } catch (error) {
      setEnrollStatus(error.response?.data?.message || 'OTP verification failed. Try again.');
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
                  src={`${process.env.REACT_APP_API_URL}/${course.image}`}
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
                        <div key={index} className="mb-4" style={{borderBottom: '1px solid #ddd'}}>
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
                                {expandedLesson === index ? 'Hide Details' : 'View Details'}
                              </p>
                            </li>
                          {expandedLesson === index && ( 
                            <div className="lesson-details">
                              {lesson.video ? (
                                <video
                                  controls
                                  src={`${process.env.REACT_APP_API_URL}/${lesson.video}`}
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
