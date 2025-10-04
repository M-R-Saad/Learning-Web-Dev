import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div className='border-2 border-gray-400 px-4 py-4 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-2 text-center'>Dad</h3>
            <section className='grid grid-cols-3 gap-4'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;