import React from 'react';
import Special from './Special';

const Myself = () => {
    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>Myself</h3>
            <section>
                <Special name='Orihime'></Special>
            </section>
        </div>
    );
};

export default Myself;