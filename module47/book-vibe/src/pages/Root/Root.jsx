import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1580px] mx-auto pt-12'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;