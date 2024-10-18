import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CourseStats = ({ data }) => {
    // Ensure the data is present and has the correct structure
    if (!data || !data.coursesByCategory) {
        return <div>No course data available.</div>;
    }

    const courseData = data.coursesByCategory.map(item => ({
        name: item._id, 
        free: item.freeCourses || 0, 
        premium: item.premiumCourses || 0, 
    }));


    return (
        <div className="course-stats-container">
            <h6 className="text-center">Courses by Category and Type</h6>
            <BarChart width={490} height={300} data={courseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="free" fill="#b336e3" />
                <Bar dataKey="premium" fill="#7443ca" />
            </BarChart>
        </div>
    );
};

export default CourseStats;
