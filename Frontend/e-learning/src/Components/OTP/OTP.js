import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/OTP.css'; 

function OTP() {
    const inputRefs = useRef([]); 
    const [otp, setOtp] = useState(new Array(5).fill(''));

    const isAllInputFilled = () => otp.every((val) => val !== '');

    const verifyOTP = () => {
        if (isAllInputFilled()) {
            const otpString = otp.join('');
            alert(`Your OTP is "${otpString}". OTP is correct`);
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) return; 
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        verifyOTP();
    };

    const handlePaste = (e, index) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, otp.length - index);

        const newOtp = [...otp];
        pasteData.split('').forEach((char, i) => {
            newOtp[index + i] = char;
        });
        setOtp(newOtp);

        const nextInput = inputRefs.current[index + pasteData.length - 1];
        if (nextInput) nextInput.focus();

        verifyOTP();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);

            if (index > 0) inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <section>
            <div className="container mt-5">
                <h1 className="title">Enter OTP</h1>
                <form id="otp-form" onSubmit={(e) => e.preventDefault()}>
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            className={`otp-input ${otp[index] ? 'filled' : ''}`}
                            maxLength={1}
                            value={otp[index]}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={(e) => handlePaste(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                        />
                    ))}
                </form>
                <button id="verify-btn" onClick={verifyOTP}>
                    Verify OTP
                </button>
            </div>
        </section>
    );
}

export default OTP;
