import React from 'react';
import Logins from '../Logins';
import Socials from './../Socials';
import QZone from './../QZone';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-8'>
            <Logins></Logins>
            <Socials></Socials>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;