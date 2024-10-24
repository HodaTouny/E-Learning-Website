import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ContactStats = ({ data }) => {
    const colors = ['#b336e3', '#C0C0C0'];

    useEffect(() => {
        console.log('ContactStats data:', data);
    }, [data]);

    const contactData = [
        { name: 'Users with Accounts', value: data.usersWithAccount || 0, fill: colors[0] },
        { name: 'Email Subscribers', value: data.emailSubscribers || 0, fill: colors[1] },
    ];

    return (
        <div className="contact-stats-container">
            <h6 className="text-center">Registered vs Unregistered Subscribers</h6>
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
