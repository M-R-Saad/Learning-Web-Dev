import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header.jsx';

const Root = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;