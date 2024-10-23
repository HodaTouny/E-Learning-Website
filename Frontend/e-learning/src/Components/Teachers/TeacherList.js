import React, { useEffect, useState } from 'react';
import TeacherCard from './TeacherCard';

import { FaSearch } from 'react-icons/fa';
import axios from 'axios';


const TeachersList = () => {
    const [teachers, setTeachers] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get(`/education/getteachers`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
    
                const data = response.data;
                if (Array.isArray(data)) {
                    setTeachers(data);
                } else {
                    console.error('Expected an array of teachers, but received:', data);
                }
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };
    
        fetchTeachers();
    }, [accessToken]); 

    const handleDelete = async (email) => {
        try {
            await axios.delete(`/education/delete/${email}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.email !== email));
        } catch (error) {
            console.error('Error deleting teacher:', error);
        }
    };

    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="search-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '180px', marginBottom: '20px' }}>
                <div style={{ position: 'relative', width: '900px' }}>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                        style={{
                            width: '100%',
                            borderRadius: '14px',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                            backgroundColor: 'white',
                            padding: '10px 40px',
                            color: 'black',
                            border: '1px solid #E5E4E2'
                        }}
                    />
                      <FaSearch style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                color: '#999',
                        }} />
                </div>
            </div>
            {filteredTeachers.map(teacher => (
                <div className='flex justify-content-center'>
                <TeacherCard key={teacher.email} teacher={teacher} onDelete={handleDelete} />
                </div>
            ))}
        </div>
    );
};

export default TeachersList;
