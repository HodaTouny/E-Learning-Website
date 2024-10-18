import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/profilesitting.css'
import CourseList from './CourseList';
import EditProfile from '../EditProfile';
import UploadCourseForm from './UploadCourseForm';
import img from '../../assets/img/teachprofile.png'


function ProfileSitting() {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);
    const [activeTab, setActiveTab] = useState("editProfile"); // State to track which component is active
    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        const storedToken = localStorage.getItem('accessToken');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setToken(storedToken);
        }
    }, []);

    const handleCourseListClick = () => {
        setActiveTab("courselist"); // Show EnrolledCourse component
    };

    const handleEditProfileClick = () => {
        setActiveTab("editProfile"); // Show EditProfile component
    };

    const handleUploadCourseClick = () => {
        setActiveTab("uploadcourse"); // Show EditProfile component
    };
    if (!userData) {
        return <div>Loading...</div>;
    }
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
                                    <Link to={"/teacher-profile"}>Profile </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-4 main-container">
                <div class="row">
                    <div class="col-lg-4 pb-5">
                        <div class="author-card pb-3">
                            <div class="author-card-profile">
                                <div class="author-card-avatar">
                                    <img src={img} alt="{user.name}" />
                                </div>
                                <div class="author-card-details">
                                    <h5 class="author-card-name text-lg">{userData.name}</h5>
                                    <span className="author-card-email">{userData.email}</span>
                                </div>
                            </div>
                        </div>
                        <div class="wizard">
                            <nav class="list-group list-group-flush">
                                <a class="list-group-item" href="#" onClick={handleEditProfileClick}>
                                    <i class="fa fa-user text-muted"></i>Edit Profile
                                </a>
                                <a class="list-group-item" href="#" onClick={handleUploadCourseClick}>
                                    <i class="fa fa-plus-circle text-muted"></i>Upload New Course
                                </a>
                                <a class="list-group-item" href="#" onClick={handleCourseListClick}>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><i class="fa fa-book mr-1 text-muted"></i>
                                            <div class="d-inline-block font-weight-medium text-uppercase">Courses</div>
                                        </div>
                                        <span class="badge badge-secondary">{userData.createdcoursesS || 0}</span>
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-5">
                        {activeTab === "courselist" && <CourseList User={userData.userID} />}
                        {activeTab === "editProfile" && <EditProfile userData={userData} token={token} />}
                        {activeTab === "uploadcourse" && <UploadCourseForm />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSitting;