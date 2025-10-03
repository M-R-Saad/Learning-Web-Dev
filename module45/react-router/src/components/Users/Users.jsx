import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();

    console.log(users);

    return (
        <div>
            <h1 className='text-5xl font-semibold text-center my-4'>This is Users!</h1>
        </div>
    );
};

export default Users;