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
            {/* <ProfileStudent/> */}
            {/* <ProfileTrainer/> */}
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/courses" element={<AllCourses />} />
                <Route path="/CourseDetails" element={<CourseDetails />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />

                {/* <Route path="/backend-courses" element={<Courses />} /> */}
                <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
            
        </>
    );
}

export default App;