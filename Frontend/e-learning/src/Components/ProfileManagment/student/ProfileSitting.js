import React, { useState } from 'react';
import '../../assets/css/profilesitting.css'
import Navbar from '../../Navbar/navbar';
import EnrolledCourse from './EnrolledCourse';


function ProfileSitting() {
    const [showEnrolledCourses, setShowEnrolledCourses] = useState(false); // State to toggle EnrolledCourse

    const handleEnrolledCoursesClick = () => {
        setShowEnrolledCourses(!showEnrolledCourses); // Toggle on click
    };
    return (
        <>
            <Navbar />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet" />
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
                                <a class="list-group-item" href="https://www.bootdey.com/snippets/view/bs4-profile-settings-page"
                                    target="__blank"><i class="fa fa-user text-muted"></i>Edit Profile</a>
                                <a class="list-group-item" href="#" onClick={handleEnrolledCoursesClick}>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div><i class="fa fa-tag mr-1 text-muted"></i>
                                            <div class="d-inline-block font-weight-medium text-uppercase">Enrolled courses</div>
                                        </div><span class="badge badge-secondary">4</span>
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-5">
                        {showEnrolledCourses && <EnrolledCourse />} {/* EnrolledCourse component displayed here */}
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript"></script>
        </>
    );
}

export default ProfileSitting;