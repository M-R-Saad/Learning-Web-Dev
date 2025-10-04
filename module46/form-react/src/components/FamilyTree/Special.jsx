import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name }) => {

    const asset = useContext(AssetContext);

    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm'>
            <h3 className='text-2xl font-bold my-4 text-center'>{name}</h3>
            <p className='text-center font-semibold'>Asset: {asset}</p>
        </div>
    );
};

export default Special;