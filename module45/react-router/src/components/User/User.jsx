import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false);

    const [visitHome, setVisitHome] = useState(false);

    if(visitHome){
        return <Navigate to="/" />
    }

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .then(res => res.json());

    return (
        <div className='border-2 border-gray-400 m-4 p-4 rounded-lg text-center'>
            <p className='text-2xl font-bold mb-2'>Name: {user.name}</p>
            <p className='text-xl font-semibold mb-2'>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link className='text-xl text-blue-500 font-semibold hover:underline' to={`${user.id}`}>Show Details</Link>
            <button className='block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? 'Hide Info' : 'Show Info'}
            </button>
            {
                showInfo && <Suspense fallback={<div>Loading...</div>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button className='block mx-auto mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600' onClick={() => setVisitHome(true)}>
                Visit Home
            </button>
        </div>
    );
};

export default User;