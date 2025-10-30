import React from 'react';
import { useLoaderData, Link } from 'react-router';

const Phones = () => {

    const phonesData = useLoaderData();
    console.log(phonesData);

    return (
        <div className='flex flex-col gap-8 justify-center items-center border p-12 mt-4'>
            <h2 className='text-3xl font-bold'>Available Phones: <span className='text-red-500'>{phonesData.length}</span></h2>
            <ul className='grid grid-cols-3 gap-x-24 gap-y-12'>
                {phonesData.map(phone => (
                    <li key={phone.id} className='font-semibold text-lg text-purple-500 hover:underline text-center'>
                        <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Phones;