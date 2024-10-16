import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Home from './home/home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllCourses from './Courses/allCourses';
import CourseDetails from './CourseDetails/coursedetails';
import CourseDetail from './Courses/CourseDetail';
import Login from './Login/login';
import Register from './Register/register';
import About from './About/About';
import ProfileStudent from './ProfileManagment/student/ProfileSitting';
import ProfileTrainer from './ProfileManagment/trainer/ProfileSitting';
import UploadCourseForm from './ProfileManagment/trainer/UploadCourseForm';

function App() {
    return (
        <>
            <Navbar />
            {/* <PopularCourses /> */}
             {/* <AllCourses />  */}
            {/* <CourseDetails/>
             <UploadCourseForm/> */}
            {/*  <Login />
            <Register />  */}
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/courses" element={<AllCourses />} />
                <Route path="/CourseDetails" element={<CourseDetails />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/add-course-form" element={<UploadCourseForm />} />
                <Route path="/profile" element={ <ProfileTrainer/>} />

                {/* <Route path="/backend-courses" element={<Courses />} /> */}
                <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
            
        </>
    );
}

export default App;
