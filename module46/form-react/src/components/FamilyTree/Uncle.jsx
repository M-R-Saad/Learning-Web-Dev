import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>Uncle</h3>
            <section className='grid grid-cols-3 gap-4'>
                <Cousin name='Goku'></Cousin>
                <Cousin name='Ichigo'></Cousin>
                <Cousin name='Ishida'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;