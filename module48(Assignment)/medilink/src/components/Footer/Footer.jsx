import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded px-10 py-24">
            <div className='flex items-center gap-2'>
                <img className='w-10' src="logo.png" alt="" />
                <p className='font-bold text-3xl'>MediLink</p>
            </div>
            <nav className="grid grid-flow-col gap-12 text-base">
                <NavLink to="/" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                    <a>Home</a>
                </NavLink>
                <NavLink to="/myBookings" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                    <a>My Bookings</a>
                </NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                    <a>Blogs</a>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                    <a>Contact Us</a>
                </NavLink>
            </nav>
            <div className='bg-[#0F0F0F20] p-[.5px] w-[50%]'></div>
            <nav>
                <div className="grid grid-flow-col gap-4 cursor-pointer">
                    <img src="socials.png" alt="" />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;