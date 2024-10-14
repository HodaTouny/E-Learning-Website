import React, { useState } from 'react';
import '../assets/Login/css/style.css';
import { useNavigate } from 'react-router-dom'; 
import img2 from '../assets/Login/images/image-2.png';
import img1 from '../assets/Login/images/image-1.png';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(''); // Default role is empty
    const [image, setImage] = useState(null); // Image state

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => 
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#])[A-Za-z\d#@$!%*?&]{8,}$/.test(password);
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        let valid = true;

        // Username validation
        if (username.trim() === '') {
            setUsernameError('Username is required.');
            valid = false;
        } else {
            setUsernameError('');
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

        // Role validation
        if (!role) {
            valid = false;
            // Optionally set an error message for role if needed
        }

        if (valid) {
            const formData = new FormData();
        formData.append('name', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:5000/education/register', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful:', data.message);
                navigate('/Login');
            } else {
                console.error('Registration failed:', data.error);
                // Handle errors from the backend
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network errors or other unexpected errors
        }
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

                    {/* Role Selection */}
                    <div className="form-holder">
                        <span className="lnr lnr-user"></span>
                        <select
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Role</option> {/* Default option */}
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                    </div>

                    {/* Image Upload */}
                    <div className="form-holder">
                        <span className="lnr lnr-picture"></span>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/png, image/jpeg, image/gif"
                            onChange={handleImageChange}
                        />
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
