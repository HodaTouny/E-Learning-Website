import React, { useState, useContext } from 'react';
import '../assets/Login/css/style.css';
import img2 from '../assets/Login/images/image-2.png';
import img1 from '../assets/Login/images/image-1.png';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
    
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/education/login`, 
            { email, password }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                startTokenRefresh();
                navigate('/');
            } else {
                const data = response.data;
                if (data.message === "User not found") {
                    setEmailError(data.message);
                } else if (data.message === "Wrong password") {
                    setPasswordError(data.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (errorMessage === "User not found") {
                    setEmailError(errorMessage);
                } else if (errorMessage === "Wrong password") {
                    setPasswordError(errorMessage);
                } else {
                    setEmailError("An unexpected error occurred. Please try again.");
                }
            }
        }
    };
    
    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            return; 
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/education/refresh`, {
                refreshToken},{
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('accessToken', data.accessToken);
            }
        } catch (error) {
            console.error('Error refreshing access token:', error);
        }
    };

    const startTokenRefresh = () => {
        setInterval(async () => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) return;

            const decoded = jwtDecode(accessToken);
            const exp = decoded.exp * 1000; 
            const now = Date.now();

            if (exp - now < 5 * 60 * 1000) {
                await refreshAccessToken();
            }
        }, 60 * 1000); 
    };

    return (
        <>
            <div className="wrapper">
                <div className="inner">
                    <img src={img1} alt="" className="image-1" />
                    <form onSubmit={handleSubmit}>
                        <h3>Login</h3>
                        <div className="form-holder">
                            <span className="lnr lnr-user"></span>
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

                        <button type="submit">
                            <span>Login</span>
                        </button>
                    </form>
                    <img src={img2} alt="" className="image-2" />
                </div>
            </div>
        </>
    );
}

export default Login;
