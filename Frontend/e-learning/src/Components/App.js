import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Home from './home/home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllCourses from './Courses/allCourses';
import ViewProfile from './ProfileManagment/ViewProfile';
import Wishlist from './ProfileManagment/enrolledcourses';
import CourseDetails from './CourseDetails/coursedetails';
import UploadCourseForm from './UploadCourseForm/UploadCourseForm';
import CourseDetail from './Courses/CourseDetail';

function App() {
    return (
        <>
            <Navbar />
            {/* <PopularCourses /> */}
            {/* <AllCourses /> */}
            {/* <CourseDetails/> */}
            {/* <Login /> */}
            {/* <Register /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<AllCourses />} />
                <Route path="/CourseDetails" element={<CourseDetails />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/EditProfile" element={<ViewProfile />} />

                {/* <Route path="/backend-courses" element={<Courses />} /> */}
                <Route path="/course/:id" element={<CourseDetail />} />
                <Route path="/add-course-form" element={<UploadCourseForm />} />
            </Routes>
            
        </>
    );
}

export default App;