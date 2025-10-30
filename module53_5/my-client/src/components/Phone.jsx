import React from 'react';
import { useLoaderData, Link } from 'react-router';

const Phone = () => {

    const phone = useLoaderData();

    return (
        <div className='flex gap-16 justify-center items-center border mt-4 p-12'>
            <div>
                <img className='w-64 h-auto object-cover' src={phone.image} alt={phone.name} />
            </div>
            <div className='flex flex-col gap-8 w-1/2'>
                <h2 className='text-3xl font-bold'>{phone.name}</h2>
                <p className='text-xl font-semibold'>Price: {phone.price}$</p>
                <p className='text-lg'>Description: {phone.description}</p>
                <Link to="/phones">
                    <button className='bg-blue-500 text-white py-2 px-4 rounded font-bold'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Phone;