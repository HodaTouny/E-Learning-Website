import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/layout/css/styles.css';
import '../assets/css/viewprofile.css';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorCard = () => {
  return (
    <div className="author-card pb-3">
      <div
        className="author-card-cover"
        style={{
          backgroundImage: "url('https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg')",
        }}
      >
        <a className="btn btn-style-1 btn-white btn-sm" href="#">
          <i className="fa fa-award text-md"></i>&nbsp;290 points
        </a>
      </div>
      <div className="author-card-profile">
        <div className="author-card-avatar">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams" />
        </div>
        <div className="author-card-details">
          <h5 className="author-card-name text-lg">Daniel Adams</h5>
          <span className="author-card-position">Joined February 06, 2017</span>
        </div>
      </div>
    </div>
  );
};

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState('Daniel');
  const [lastName, setLastName] = useState('Adams');
  const [email] = useState('daniel.adams@example.com');
  const [phone, setPhone] = useState('+7 (805) 348 95 72');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission, e.g., update profile
    alert('Profile updated successfully.');
  };

  return (
    <form className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-fn">First Name</label>
          <input
            className="form-control"
            type="text"
            id="account-fn"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-ln">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="account-ln"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-email">E-mail Address</label>
          <input className="form-control" type="email" id="account-email" value={email} disabled />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-phone">Phone Number</label>
          <input
            className="form-control"
            type="text"
            id="account-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-pass">New Password</label>
          <input
            className="form-control"
            type="password"
            id="account-pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-confirm-pass">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            id="account-confirm-pass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12">
        <hr className="mt-2 mb-3" />
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="custom-control custom-checkbox d-block">
            <input className="custom-control-input" type="checkbox" id="subscribe_me" defaultChecked />
            <label className="custom-control-label" htmlFor="subscribe_me">
              Subscribe me to Newsletter
            </label>
          </div>
          <button className="btn btn-style-1 btn-primary" type="button" onClick={handleSubmit}>
            Update Profile
          </button>
        </div>
      </div>
    </form>
  );
};

const ProfilePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 pb-5">
          <AuthorCard />
          <nav className="list-group list-group-flush">
            <a className="list-group-item" href="#">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                  <div className="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                </div>
                <span className="badge badge-secondary">6</span>
              </div>
            </a>
            <a className="list-group-item active" href="#">
              <i className="fe-icon-user text-muted"></i>Profile Settings
            </a>
            <a className="list-group-item" href="#">
              <i className="fe-icon-map-pin text-muted"></i>Addresses
            </a>
            <a className="list-group-item" href="#">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fe-icon-heart mr-1 text-muted"></i>
                  <div className="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                </div>
                <span className="badge badge-secondary">3</span>
              </div>
            </a>
            <a className="list-group-item" href="#">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fe-icon-tag mr-1 text-muted"></i>
                  <div className="d-inline-block font-weight-medium text-uppercase">My Tickets</div>
                </div>
                <span className="badge badge-secondary">4</span>
              </div>
            </a>
          </nav>
        </div>

        <div className="col-lg-8 pb-5">
          <ProfileSettings />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
