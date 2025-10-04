import React from 'react';
import Special from './Special';

const Cousin = ({ name }) => {
    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>{name}</h3>
            {
                name === 'Naruto' && <Special name='Hinata'></Special>
            }
        </div>
    );
};

export default Cousin;