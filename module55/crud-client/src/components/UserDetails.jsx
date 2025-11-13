import React from 'react';
import { useLoaderData, Link } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    return (
        <div className='w-1/2 mx-auto rounded-lg shadow-lg'>
            <h2 className='text-3xl font-semibold mb-6 text-center'>User Details</h2>
            <div className='border rounded p-4 mt-10 flex flex-col gap-4 justify-center items-center'>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <Link to="/">
                    <button className='btn btn-accent text-white font-extrabold'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default UserDetails;