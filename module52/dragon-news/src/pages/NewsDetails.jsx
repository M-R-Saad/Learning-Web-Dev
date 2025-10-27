import React, { useEffect } from 'react';
import { Outlet, useParams, useLoaderData } from 'react-router';
import Header from './../components/Header';
import LatestNews from './../components/LatestNews';
import Navbar from './../components/Navbar';
import RightAside from './../components/homelayout/RightAside';
import NewsDetailsCard from './../components/NewsDetailsCard';

const NewsDetails = () => {

    const { id } = useParams();
    const newsData = useLoaderData();

    const [news, setNews] = React.useState({});

    useEffect(() => {
        const newsDetails = newsData.find(item => item.id === id);
        setNews(newsDetails);
    }, [id, newsData])

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
                <section className='main col-span-3'>
                    <h2 className='text-xl font-semibold mb-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='sticky top-26 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;