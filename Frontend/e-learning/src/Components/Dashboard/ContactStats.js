import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ContactStats = ({ data }) => {
    const colors = ['#b336e3', '#b336e3'];

    const contactData = [
        { name: 'Users with Accounts', value: data.usersWithAccounts, fill: colors[0] },
        { name: 'Email Subscribers', value: data.emailSubscribers, fill: colors[1] },
    ];

    return (
        <div className="contact-stats-container">
            <h6 className="text-center">Registerd vs UnRegistered Subscribers</h6>
            <PieChart width={400} height={300}>
                <Pie
                    data={contactData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                >
                    {contactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default ContactStats;
