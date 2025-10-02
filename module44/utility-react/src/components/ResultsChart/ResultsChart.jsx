import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart, Bar } from 'recharts';

const gymStats = [
    { month: "Jan", members: 120, revenue: 220, classes: 80 },
    { month: "Feb", members: 140, revenue: 180, classes: 95 },
    { month: "Mar", members: 100, revenue: 260, classes: 70 },
    { month: "Apr", members: 180, revenue: 200, classes: 110 },
    { month: "May", members: 160, revenue: 240, classes: 90 },
    { month: "Jun", members: 200, revenue: 280, classes: 130 },
    { month: "Jul", members: 150, revenue: 210, classes: 100 },
    { month: "Aug", members: 220, revenue: 250, classes: 140 },
    { month: "Sep", members: 170, revenue: 230, classes: 120 },
    { month: "Oct", members: 240, revenue: 300, classes: 160 },
    { month: "Nov", members: 190, revenue: 270, classes: 140 },
    { month: "Dec", members: 260, revenue: 290, classes: 180 }
];


const ResultsChart = () => {
    return (
        <div className='flex mx-16 mb-16 gap-8'>
            <LineChart width={800} height={400} data={gymStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="members" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                <Line type="monotone" dataKey="classes" stroke="#ffc658" />
            </LineChart>

            <AreaChart width={800} height={400} data={gymStats}>
                <defs>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorClasses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="members" stroke="#8884d8" fillOpacity={1} fill="url(#colorMembers)" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="classes" stroke="#ffc658" fillOpacity={1} fill="url(#colorClasses)" />
            </AreaChart>

            <BarChart width={800} height={400} data={gymStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="members" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <Bar dataKey="classes" fill="#ffc658" />
            </BarChart>
        </div>
    );
};

export default ResultsChart;