import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './userContext';
import Navbar from './Navbar/navbar';
import Home from './home/home';
import AllCourses from './Courses/allCourses';
import CourseDetails from './CourseDetails/coursedetails';
import CourseDetail from './Courses/CourseDetail';
import Login from './Login/login';
import Register from './Register/register';
import About from './About/About';
import ProfileStudent from './ProfileManagment/student/ProfileSitting';
import ProfileTrainer from './ProfileManagment/trainer/ProfileSitting';
import UploadCourseForm from './ProfileManagment/trainer/UploadCourseForm';
import Footer from './Footer/Footer';

function App() {
    return (
        <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/courses" element={<AllCourses />} />
                    <Route path="/CourseDetails" element={<CourseDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/add-course-form" element={<UploadCourseForm />} />
                    <Route path="/profile" element={<ProfileTrainer />} />
                    <Route path="/profile-student" element={<ProfileStudent />} />
                    <Route path="/teacher-profile" element={<ProfileTrainer />} />
                    <Route path="/course/:id" element={<CourseDetail />} />
                </Routes>
                <section id="Footer" >
                    <Footer />
                </section>
        </UserProvider>
    );
}

export default App;
