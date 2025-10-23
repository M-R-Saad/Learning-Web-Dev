import React from 'react';
import { Outlet } from 'react-router';
import Header from './../components/Header';
import LatestNews from './../components/LatestNews';
import Navbar from './../components/Navbar';
import LeftAside from './../components/homelayout/LeftAside';
import RightAside from './../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='max-w-[1540px] mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-4 gap-6'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-2'>
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;