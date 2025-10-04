import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className='border-2 border-gray-400 px-4 py-2 rounded-lg shadow-sm flex flex-col items-center gap-4'>
            <h3 className='text-2xl font-bold my-4 text-center'>Brother</h3>
            <button onClick={() => setMoney(money + 1000)} className='bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600'>Add 1K $</button>
        </div>
    );
};

export default Brother;