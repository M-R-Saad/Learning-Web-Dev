import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>Aunt</h3>
            <section className='grid grid-cols-3 gap-4'>
                <Cousin name='Naruto'></Cousin>
                <Cousin name='Luffy'></Cousin>
                <Cousin name='Zoro'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;