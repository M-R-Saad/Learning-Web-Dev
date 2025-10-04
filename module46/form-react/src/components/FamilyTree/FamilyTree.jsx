import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const asset = "Diamond Ring";
    const [money, setMoney] = useState(0);

    return (
        <div>
            <h2 className='text-3xl font-bold mt-6 text-center'>Family Tree</h2>
            <h2 className='text-2xl font-bold mt-4 text-center'>Family Money: <span className='text-green-500'>{money} $</span></h2>
            <MoneyContext.Provider value={[ money, setMoney ]}>
                <AssetContext.Provider value={asset}>
                    <Grandpa></Grandpa>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default FamilyTree;