import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-[24rem] font-bold text-center text-red-600 mt-20 -mb-24'>404</h2>
            <h3 className='text-3xl font-semibold text-center'>Sorry, the page you are looking for does not exist.</h3>
            <Link to='/' className='block w-max mx-auto mt-12 px-6 py-3 bg-secondary text-white font-semibold rounded-none'>
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;