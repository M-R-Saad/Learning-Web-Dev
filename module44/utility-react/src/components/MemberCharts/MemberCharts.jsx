import React from 'react';
import { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area } from 'recharts';

const MemberCharts = ({ memberPromise }) => {

    const memberResponse = use(memberPromise);
    const memberData = memberResponse.data;

    // console.log(memberData);

    const memberChartData = memberData.map(memberData => {
        const member = {
            id: memberData.id,
            name: memberData.name,
            age: memberData.age,
            startWeight: memberData.weightProgress.start,
            currentWeight: memberData.weightProgress.current,
            workOutHours: memberData.workoutHours,
            attendance: memberData.attendance,
            caloriesBurned: memberData.caloriesBurned,
        }

        const weightChange = member.currentWeight - member.startWeight;
        member.weightChange = weightChange;

        return member;
    });

    console.log(memberChartData);

    return (
        <div className='flex mx-16 mb-16 gap-8'>
            <BarChart width={800} height={400} data={memberChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="startWeight" fill="#8884d8" />
                <Bar dataKey="currentWeight" fill="#82ca9d" />
            </BarChart>

            <LineChart width={800} height={400} data={memberChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="age" stroke="#8884d8" />
                <Line type="monotone" dataKey="attendance" stroke="#82ca9d" />
            </LineChart>

            <AreaChart width={800} height={400} data={memberChartData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="workOutHours" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="caloriesBurned" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    );
};

export default MemberCharts;