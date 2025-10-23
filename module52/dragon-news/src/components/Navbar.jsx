import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-16'>
            <div className='w-1/12'></div>
            <div className='flex gap-8 text-accent text-lg'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Career</NavLink>
            </div>
            <div className='flex gap-6 items-center'>
                <img className='w-12 h-12' src={user} alt="" />
                <button className='btn btn-primary btn-lg rounded-none px-12'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;