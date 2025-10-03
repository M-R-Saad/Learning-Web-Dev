import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    return (
        <div className='border-2 border-gray-400 m-4 p-4 rounded-lg text-center'>
            <p className='text-2xl font-bold mb-2'>Name: {user.name}</p>
            <p className='text-xl font-semibold mb-2'>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link className='text-xl text-blue-500 font-semibold hover:underline' to={`${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;