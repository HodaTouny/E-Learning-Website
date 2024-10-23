import React, { useState, useEffect } from 'react';
import UserStats from './UserStats';
import CourseStats from './CourseStats';
import ContactStats from './ContactStats';
import '../assets/css/bootstrap.css';
import '../assets/css/dashboard.css';
import axios from 'axios';


const Dashboard = () => {
    const [userStats, setUserStats] = useState(null);
    const [courseStats, setCourseStats] = useState(null);
    const [contactStats, setContactStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`/admin/user-stats`);
                setUserStats(userResponse.data);

                const courseResponse = await axios.get(`/admin/course-stats`);
                setCourseStats(courseResponse.data);

                const contactResponse = await axios.get(`/admin/contact-stats`);
                setContactStats(contactResponse.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchData();
    }, []);

    if (!userStats || !courseStats || !contactStats) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header container">
                <h2>Admin Dashboard</h2>
            </div>
            <div className="dashboard-content container">
                <div className='row justify-content-center gap-3'>
                    <div className="col-lg-3 col-md-3 col-sm-3 info-box">
                        <h4 className='number'>Total Users: {userStats.totalUsers}</h4>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 info-box">
                        <h4 className='number'>Total Courses: {courseStats.totalCourses}</h4>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 info-box">
                        <h4 className='number'>Total Subscribers: {contactStats.totalSubscribers}</h4>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                        <UserStats data={userStats} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <CourseStats data={courseStats} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ContactStats data={contactStats} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
