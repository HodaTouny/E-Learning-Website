import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/profilesitting.css';
import EnrolledCourse from './EnrolledCourse';
import EditProfile from '../EditProfile';
import img from '../../assets/img/defaultProfile.png'

function ProfileSitting() {
    const [activeTab, setActiveTab] = useState('editProfile');
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        const storedToken = localStorage.getItem('accessToken');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setToken(storedToken);
        }
    }, []);

    const handleEnrolledCoursesClick = () => {
        setActiveTab('enrolledCourses');
    };

    const handleEditProfileClick = () => {
        setActiveTab('editProfile');
    };

    return (
        <>
            <section class="banner-area">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-10 banner-right" style={{ marginTop: "200px" }}>
                            <h1 class="text-white" style={{ textAlign: "right" }}>
                                My Profile
                            </h1>
                            <p class="mx-auto text-white  mt-20 mb-40">
                                In the history of modern astronomy, there is probably no one greater leap forward than the building.
                            </p>
                            <div class="link-nav">
                                <span class="box">
                                    <Link to={"/"}>Home </Link>
                                    <i class="lnr lnr-arrow-right"></i>
                                    <Link to={"/profile-student"}>Profile </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-4 main-container">
                <div className="row">
                    <div className="col-lg-4 pb-5">
                        <div className="author-card pb-3">
                            <div className="author-card-profile">
                                <div className="author-card-avatar">
                                    <img
                                        src={img}
                                        alt={userData?.name || "User"}
                                    />
                                </div>
                                <div className="author-card-details">
                                    <h5 className="author-card-name text-lg">{userData?.name || "Guest User"}</h5>
                                    <span className="author-card-email">{userData?.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="wizard">
                            <nav className="list-group list-group-flush">
                                <a className="list-group-item" href="#" onClick={handleEditProfileClick}>
                                    <i className="fa fa-user text-muted"></i> Edit Profile
                                </a>
                                <a className="list-group-item" href="#" onClick={handleEnrolledCoursesClick}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="fa fa-list mr-1 text-muted"></i>
                                            <div className="d-inline-block font-weight-medium text-uppercase">Enrolled Courses</div>
                                        </div>
                                        <span className="badge badge-secondary">{userData?.enrolledCourses?.length || 0}</span>
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-5">
                        {activeTab === 'enrolledCourses' && <EnrolledCourse courses={userData?.enrolledCourses} />}
                        {activeTab === 'editProfile' && <EditProfile userData={userData} token={token} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSitting;
