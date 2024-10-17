import React, { useState } from 'react';
import '../../assets/css/profilesitting.css'
import Navbar from '../../Navbar/navbar';
import CourseList from './CourseList';
import EditProfile from '../EditProfile';
import UploadCourseForm from './UploadCourseForm';


function ProfileSitting() {
    const [activeTab, setActiveTab] = useState("editProfile"); // State to track which component is active

    const handleCourseListClick = () => {
        setActiveTab("courselist"); // Show EnrolledCourse component
    };

    const handleEditProfileClick = () => {
        setActiveTab("editProfile"); // Show EditProfile component
    };

    const handleUploadCourseClick = () => {
        setActiveTab("uploadcourse"); // Show EditProfile component
    };
    return (
        <>
            <div class="container mb-4 main-container">
                <div class="row">
                    <div class="col-lg-4 pb-5">
                        <div class="author-card pb-3">
                            <div class="author-card-profile">
                                <div class="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="Daniel Adams" />
                                </div>
                                <div class="author-card-details">
                                    <h5 class="author-card-name text-lg">Daniel Adams</h5>
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
                                        </div><span class="badge badge-secondary">4</span>
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-5">
                        {activeTab === "courselist" && <CourseList />}
                        {activeTab === "editProfile" && <EditProfile />}
                        {activeTab === "uploadcourse" && <UploadCourseForm />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSitting;