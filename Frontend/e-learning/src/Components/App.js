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
import ViewProfile from './ProfileManagment/ViewProfile';
import Wishlist from './ProfileManagment/enrolledcourses';
import CourseDetails from './CourseDetails/coursedetails';

function App() {
    return (
        <>
          <Navbar />
          <Home />
          <PopularCourses />
          <AllCourses />
          <CourseDetails/>
          <Login />
          <Register />
            <Routes>
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/" element={<ViewProfile />} />
            </Routes>
        </>
    );
}

export default App;