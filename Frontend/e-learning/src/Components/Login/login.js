import React, { useState } from 'react';
import '../assets/Login/css/style.css';
import img2 from '../assets/Login/images/image-2.png';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/Login/images/image-1.png';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


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
    
                navigate('/')
                
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
