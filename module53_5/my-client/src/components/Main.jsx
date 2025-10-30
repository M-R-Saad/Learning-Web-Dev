import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const Main = () => {
    return (
        <div className='max-w-7xl m-auto border p-12 my-20'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;