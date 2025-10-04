import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {

    const navigation = useNavigation();
    const navigating = Boolean(navigation.location);

    return (
        <div>
            <Header />
            {navigating && <div className='h-2 bg-blue-500 animate-pulse'>Loading...</div>}
            <div className='flex justify-center items-center gap-8'>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;