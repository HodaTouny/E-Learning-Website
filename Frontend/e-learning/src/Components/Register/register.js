import React, { useState } from 'react';
import '../assets/Login/css/style.css';
import { useNavigate } from 'react-router-dom'; 
import img2 from '../assets/Login/images/image-2.png';
import img1 from '../assets/Login/images/image-1.png';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => 
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (username.trim() === '') {
            setUsernameError('Username is required.');
            valid = false;
        }
        else {
            setUsernameError('');
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            valid = false;
        }
        else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            valid = false;
        }
        else {
            setPasswordError('');
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        }
        else {
            setConfirmPasswordError('');
        }

        if (!role) {
            valid = false;
        }

        if (valid) {
            const formData = {
                name: username,
                email: email,
                password: password,
                role: role
            };

            try {
                const response = await axios.post(`/education/register`, {
                    formData
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    console.log('Registration successful:', data.message);
                    setSuccessMessage('Registration successful! Redirecting to login page...');
                    setTimeout(() => {
                        navigate('/Login');
                    }, 5000);
                }
                else {
                    console.error('Registration failed:', data.error);
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="wrapper">
            <div className="inner">
                <img src={img1} alt="" className="image-1" />
                <form onSubmit={handleSubmit}>
                    <h3>New Account?</h3>

                    {successMessage && <div className="alert success">{successMessage}</div>}
                    <div className="form-holder">
                        <span className="lnr lnr-user"></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameError && <p className="error">{usernameError}</p>}
                    </div>

                    <div className="form-holder">
                        <span className="lnr lnr-envelope"></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="error">{emailError}</p>}
                    </div>

                    <div className="form-holder">
                        <span className="lnr lnr-lock"></span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>

                    <div className="form-holder">
                        <span className="lnr lnr-lock"></span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                    </div>

                    <div className="form-holder">
                        <span className="lnr lnr-user"></span>
                        <select
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                    </div>

                    <button type="submit">
                        <span>Register</span>
                    </button>
                </form>
                <img src={img2} alt="" className="image-2" />
            </div>
        </div>
    );
}

export default Register;
