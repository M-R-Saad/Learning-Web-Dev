import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='flex border p-4 justify-center items-center'>
            <Link to="/phones" className='font-bold text-xl text-blue-500 hover:underline'>Phones</Link>
        </div>
    );
};

export default Header;