import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;