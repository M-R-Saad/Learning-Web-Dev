import React from 'react';
import Navbar from './../../components/Header/Navbar';
import Footer from './../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-[80vh]'>
                <h1 className='text-9xl font-bold text-red-600'>404</h1>
                <h2 className='text-3xl font-semibold mt-4'>Page Not Found</h2>
                <p className='text-lg mt-2'>The page you are looking for does not exist.</p>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;