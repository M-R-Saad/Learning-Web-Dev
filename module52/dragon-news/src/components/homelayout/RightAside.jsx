import React from 'react';
import Logins from '../Logins';
import Socials from './../Socials';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-8'>
            <Logins></Logins>
            <Socials></Socials>
        </div>
    );
};

export default RightAside;