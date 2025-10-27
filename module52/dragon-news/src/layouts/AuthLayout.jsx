import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen pb-22'>
            <header className='max-w-[1540px] mx-auto'>
                <Navbar></Navbar>
            </header>   
            <main className='max-w-[1540px] mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;