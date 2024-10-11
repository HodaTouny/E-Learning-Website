import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar/navbar';
import Home from './home/home';
import PopularCourses from './PopularCourses/popularcourses';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllCourses from './Courses/allCourses';
import Login from './Login/login';
import Register from './Register/register';
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer/Footer'
import ViewProfile from './ProfileManagment/ViewProfile';
import Wishlist from './ProfileManagment/enrolledcourses';
import CourseDetails from './CourseDetails/coursedetails';

function App() {
    return (
        <>
            {/* <PopularCourses /> */}
            {/* <AllCourses /> */}
            {/* <CourseDetails/> */}
            {/* <Login /> */}
            {/* <Register /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AllCourses" element={<AllCourses />} />
                <Route path="/CourseDetails" element={<CourseDetails />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/EditProfile" element={<ViewProfile />} />
            </Routes>
        </>
    );
}

export default App;