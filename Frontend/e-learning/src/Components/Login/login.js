import React, { useState } from 'react';
import '../assets/Login/css/style.css';

import img2 from '../assets/Login/images/image-2.png';
import img1 from '../assets/Login/images/image-1.png';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        }
        else {
            setPasswordError('');
        }

        if (!emailError && !passwordError) {
            // Perform login logic here
            console.log('Login successful!');
        }
    };

    return (
        <>
            <div class="wrapper">
                <div class="inner">
                    <img src={img1} alt="" class="image-1" />
                    <form onSubmit={handleSubmit}>
                        <h3>Login</h3>
                        <div class="form-holder">
                            <span class="lnr lnr-user"></span>
                            <input type="text" class="form-control" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>


                        <div class="form-holder">
                            <span class="lnr lnr-lock"></span>
                            <input type="password" class="form-control" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && <p className="error">{passwordError}</p>}
                        </div>

                        <button type='submit'>
                            <span>Login</span>
                        </button>
                    </form>
                    <img src={img2} alt="" class="image-2" />
                </div>

            </div>
        </>
    );
}

export default Login;
