import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div className='mt-12 border-2 border-gray-400 px-8 py-4 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>Grandpa</h3>
            <section className='grid grid-cols-3 gap-4 mt-6'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;