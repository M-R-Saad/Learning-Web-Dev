import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    console.log(user);

    return (
        <div className='text-center border-2 border-gray-400 m-4 p-4 rounded-lg'>
            <h1 className='text-5xl font-bold text-center mt-4 mb-8 border-b border-gray-400'>This is User Details!</h1>
            <p className='text-3xl font-bold'>{user.name}</p>
            <p className='text-xl font-semibold'>{user.email}</p>
            <p className='text-xl'>{user.phone}</p>
            <p className='text-xl font-bold'>{user.website}</p>
            <p className='text-lg'>{user.address.city}</p>
            <p className='text-lg'>{user.company.name}</p>
        </div>
    );
};

export default UserDetails;