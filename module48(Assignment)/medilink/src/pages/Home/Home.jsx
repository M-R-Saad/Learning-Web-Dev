import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import Statistics from './../../components/Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;