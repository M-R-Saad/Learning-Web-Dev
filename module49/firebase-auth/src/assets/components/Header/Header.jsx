import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='font-bold text-2xl py-8'>
            <ul className='flex gap-12 justify-center'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'underline text-blue-500' : '')}>
                    Home
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'underline text-blue-500' : '')}>
                    Login
                </NavLink>
            </ul>
        </nav>
    );
};

export default Header;