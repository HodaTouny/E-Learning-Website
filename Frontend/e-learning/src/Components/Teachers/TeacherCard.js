import React from 'react';
import img from '../assets/img/defaultProfile.png';
import '../assets/css/linearicons.css';

const TeacherCard = ({ teacher, onDelete }) => {
    return (
        <div className="d-flex flex-row border rounded shadow p-3 my-3 pt-2 bg-white col-12 align-items-center">
            <div className="d-flex col-9">
                <img
                    src={img}
                    alt={`${teacher.name}'s profile`}
                    className="rounded-circle me-3"
                    style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        marginRight: '10px',
                    }}
                />
                <div className="d-flex flex-column col-11 align-items-start">
                    <h3 className="m-0" style={{ fontSize: '1.2rem', fontWeight: '600' }}>{teacher.name}</h3>
                    <p className="m-0 text-muted" style={{ fontSize: '0.9rem' }}>Email: {teacher.email}</p>
                    <p className="m-0 text-muted" style={{ fontSize: '0.9rem' }}>Balance: ${teacher.balance}</p>
                </div>
            </div>
            <div className="d-flex justify-content-end col-3">
                <button
                    onClick={() => onDelete(teacher.email)}
                    className="btn btn-block"
                    style={{
                        background: 'linear-gradient(135deg, #b336e3, #7c32ff)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderRadius: '8px',
                        padding: '10px 16px',
                        transition: 'background 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = '#7c32ff')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'linear-gradient(135deg, #b336e3, #7c32ff)')}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TeacherCard;
