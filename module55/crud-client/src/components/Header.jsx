import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='font-bold text-xl flex gap-8 w-1/2 mx-auto justify-center my-12'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}>Home</NavLink>
                <NavLink to="/users" className={({ isActive }) => (isActive ? 'text-blue-500 underline' : '')}>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;