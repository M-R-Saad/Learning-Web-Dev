import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center gap-8'>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;