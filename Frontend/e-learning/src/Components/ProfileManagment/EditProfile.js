import React, { useState, useEffect } from 'react';
import '../assets/css/profilesitting.css';
import axios from 'axios';

function EditProfile({ userData, token }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (userData) {
            setUserName(userData.name || '');
            setEmail(userData.email || '');
            setPhone(userData.phone || '');
        } else {
            const storedUserData = localStorage.getItem('user');
            if (storedUserData) {
                const parsedData = JSON.parse(storedUserData);
                setUserName(parsedData.name || '');
                setEmail(parsedData.email || '');
                setPhone(parsedData.phone || '');
            }
        }
    }, [userData]);

    const handleUpdateProfile = async () => {
        if (newPassword && newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const updatedData = {
            userId: userData.userID,
            changedData: {
                name: userName,
                phone: phone,
                password: newPassword || undefined,
            }
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/education/editdata`, {
               updatedData},{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const result = await response.json();
                setSuccessMessage('Profile updated successfully!');
                setErrorMessage('');
                localStorage.setItem('user', JSON.stringify(result));
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <form className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-fn">User Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="account-fn"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-email">E-mail Address</label>
                        <input
                            className="form-control"
                            type="email"
                            id="account-email"
                            value={email}
                            disabled
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
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
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
                    <button
                        className="btn btn-style-1 btn-primary"
                        type="button"
                        style={{ backgroundColor: '#7c32ff' }}
                        onClick={handleUpdateProfile}
                    >
                        Update Profile
                    </button>
                </div>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            </form>
        </>
    );
}

export default EditProfile;
