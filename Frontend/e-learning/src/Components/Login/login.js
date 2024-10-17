import React, { useState } from 'react';
import '../assets/Login/css/style.css';
import img2 from '../assets/Login/images/image-2.png';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/Login/images/image-1.png';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../userContext';
import { useContext } from 'react';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {setUser } = useContext(UserContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPasswordError('');

        try {
            const response = await fetch('http://localhost:5000/education/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                startTokenRefresh();
                navigate('/');
            } else {
                console.error('Login failed:', data.message);
                if (data.message === "User not found") {
                    setEmailError(data.message);
                } else if (data.message === "Wrong password") {
                    setPasswordError(data.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            console.error('No refresh token found');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/education/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
            } else {
                console.error('Failed to refresh token');
                // Handle token refresh failure (e.g., logout)
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
                            <input type="text" className="form-control" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>

                        <div className="form-holder">
                            <span className="lnr lnr-lock"></span>
                            <input type="password" className="form-control" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && <p className="error">{passwordError}</p>}
                        </div>

                        <button type='submit'>
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
