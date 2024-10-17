import React, { useEffect, useState } from 'react';
import '../assets/css/Courses.css';

const SuccessAlert = ({ message, type }) => {
    const [visible, setvisible]=useState(true);
    useEffect(()=>{
        if(message){
            const timer= setTimeout(() => {
                setvisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!message||!visible) return null;

    const alertClass = type === 'success' ? 'notification-success' : 'notification-error';

    return (
        <div className={`notification ${alertClass}`} role="alert">
            {message}
        </div>
    );
};

export default SuccessAlert;
