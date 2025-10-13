import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-36 py-4 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/myBookings"><li>My Bookings</li></NavLink>
                        <NavLink ><li>Blogs</li></NavLink>
                        <NavLink ><li>Contact Us</li></NavLink>
                    </ul>
                </div>
                <button className="btn btn-ghost font-bold text-2xl">
                    <img className='w-8' src="logo.png" alt="" />
                    MediLink
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-x-8 text-base">
                    <NavLink to="/" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                        <li><a>Home</a></li>
                    </NavLink>
                    <NavLink to="/myBookings" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                        <li><a>My Bookings</a></li>
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                        <li><a>Blogs</a></li>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold border-b-2" : ""}>
                        <li><a>Contact Us</a></li>
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-info text-white rounded-full border-none text-base">
                    Emergency
                </a>
            </div>
        </div>
    );
};

export default Navbar;