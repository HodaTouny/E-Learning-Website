import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/home/home';
import PopularCourses from './Components/PopularCourses/popularcourses';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllCourses from './Components/Courses/allCourses';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import ViewProfile from './Components/ProfileManagment/ViewProfile';
import CourseDetails from './Components/CourseDetails/coursedetails';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <ContactUs />
    <Footer />
    {/* <PopularCourses /> */}
    {/* <AllCourses /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <CourseDetails/> */}
    {/* <ViewProfile /> */}
  </React.StrictMode>
=======
import App from './Components/App';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router> 
>>>>>>> 1d7c7de60f0f66080bb2c490449ef85df9c7ba1c
);
