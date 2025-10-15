import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import Statistics from './../../components/Statistics/Statistics';
import Loading from '../../components/Loading/Loading';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading message="Loading our best doctors..." />}>
                <Doctors></Doctors>
            </Suspense>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;