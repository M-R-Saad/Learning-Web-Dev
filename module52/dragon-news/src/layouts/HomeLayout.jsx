import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from './../components/Header';
import LatestNews from './../components/LatestNews';
import Navbar from './../components/Navbar';
import LeftAside from './../components/homelayout/LeftAside';
import RightAside from './../components/homelayout/RightAside';
import Loading from '../components/Loading';

const HomeLayout = () => {

    const { state } = useNavigation();

    return (
        <div className='max-w-[1540px] mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>
            <div className='sticky top-0 z-10'>
                <Navbar></Navbar>
            </div>
            <main className='grid grid-cols-4 gap-6'>
                <aside className='sticky top-26 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-2'>
                    { state === 'loading' ? <Loading></Loading> : <Outlet></Outlet> }
                </section>
                <aside className='sticky top-26 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;