import React from 'react';
import swimming from '../assets/swimming.png';
import classes from '../assets/class.png';
import playground from '../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 rounded-md p-4'>
            <h2 className='font-semibold text-xl mb-6'>Q-Zone</h2>
            <div className='flex flex-col gap-4 justify-center'>
                <img src={swimming} alt="" />
                <img src={classes} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;