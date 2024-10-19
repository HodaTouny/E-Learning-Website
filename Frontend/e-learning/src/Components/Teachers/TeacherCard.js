import React from 'react';

const TeacherCard = ({ teacher, onDelete }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '14px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white',
            padding: '15px 25px',
            marginTop: '20px',
            color: 'black',
            border: 'none',
            width: '100%',
            maxWidth: '900px',
        }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={teacher.image || 'https://via.placeholder.com/80'} 
                    alt={`${teacher.name}'s profile`}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        marginRight: '20px',
                        objectFit: 'cover', 
                    }}
                />
                <div>
                    <h3 style={{ margin: '0', fontSize: '1.2rem', fontWeight: '600' }}>{teacher.name}</h3>
                    <p style={{ margin: '2px 0', fontSize: '0.9rem', color: 'gray' }}>Email: {teacher.email}</p>
                    <p style={{ margin: '2px 0', fontSize: '0.9rem', color: 'gray' }}>Balance: ${teacher.balance}</p>
                </div>
            </div>

            <button
                onClick={() => onDelete(teacher.email)}
                style={{
                    background: 'linear-gradient(135deg, #b336e3, #7c32ff)',
                    color: 'white',
                    width:'150px',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default TeacherCard;
