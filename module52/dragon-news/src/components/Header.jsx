import React from 'react';
import logo from '../assets/logo.png';
import { format } from './../../node_modules/date-fns/format';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-12 gap-5'>
            <img src={logo} alt="" />
            <p className='text-xl text-accent'>
                Journalism Without Fear or Favour
            </p>
            <p className='font-semibold'>
                {format(new Date(), 'EEEE , MMMM dd, yyyy')}
            </p>
        </div>
    );
};

export default Header;