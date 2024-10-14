import React, { useState } from 'react';
import '../assets/Login/css/style.css';

import img2 from '../assets/Login/images/image-2.png';
import img1 from '../assets/Login/images/image-1.png';

function Register() {
    const [username, setUsername] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [phonenumError, setPhonenumError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) =>
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const validatePhone = (phonenum) => /^\d{10}$/.test(phonenum);

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Username validation
        if (username.trim() === '') {
            setUsernameError('Username is required.');
            valid = false;
        } else {
            setUsernameError('');
        }

        // Phone number validation
        if (!validatePhone(phonenum)) {
            setPhonenumError('Phone number must be 10 digits.');
            valid = false;
        } else {
            setPhonenumError('');
        }

        // Email validation
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            valid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (!validatePassword(password)) {
            setPasswordError(
                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
            );
            valid = false;
        } else {
            setPasswordError('');
        }

        // Confirm Password validation
        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match.');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (valid) {
            // Perform registration logic here
            console.log('Registration successful!');
        }
    };

    return (
        <div className="wrapper">
            <div className="inner">
                <img src={img1} alt="" className="image-1" />
                <form onSubmit={handleSubmit}>
                    <h3>New Account?</h3>

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
                        <span className="lnr lnr-phone-handset"></span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            value={phonenum}
                            onChange={(e) => setPhonenum(e.target.value)}
                        />
                        {phonenumError && <p className="error">{phonenumError}</p>}
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
