import React, { useState, useEffect } from 'react';
import '../../assets/css/profilesitting.css';
import EnrolledCourse from './EnrolledCourse';
import EditProfile from '../EditProfile';
import img from '../../assets/img/defaultProfile.png'

function ProfileSitting() {
    const [activeTab, setActiveTab] = useState(null);
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
            <div className="container mb-4 main-container" style={{ marginTop: '110px' }}>
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
