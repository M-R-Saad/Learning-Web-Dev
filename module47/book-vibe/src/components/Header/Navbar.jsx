import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm bg-base-100 px-12 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/listed-books"><li>Listed Books</li></Link>
                        <Link to="/pages-to-read"><li>Pages to Read</li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-[28px]">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-[18px]">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/listed-books" className='mx-12'><li>Listed Books</li></Link>
                    <Link to="/pages-to-read"><li>Pages to Read</li></Link>
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <a className="btn bg-[#23BE0A] border-none text-white text-[18px] p-6 rounded-lg">Sign In</a>
                <a className="btn bg-[#59C6D2] border-none text-white text-[18px] p-6 rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;