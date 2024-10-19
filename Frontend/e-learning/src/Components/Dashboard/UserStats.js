import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const UserStats = ({ data }) => {
    const colors = ['#b336e3', '#C0C0C0', '#7443ca'];

    const roleData = data.usersByRole.map((role, index) => ({
        name: role._id,
        value: role.count,
        fill: colors[index % colors.length]
    }));

    const registrationData = data.registrationsOverTime.map(item => ({
        name: `${item._id.year}-${item._id.month}`,
        value: item.count
    }));

    return (
        <div className="user-stats-container">
            <div className="chart-section">
                <h6 className="text-center">Users by Role</h6>
                <PieChart width={390} height={400}>
                    <Pie
                        data={roleData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                    >
                        {roleData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>

            <div className="chart-section">
                <h6 className="text-center">User Registrations Over Time</h6>
                <LineChart width={390} height={300} data={registrationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default UserStats;
