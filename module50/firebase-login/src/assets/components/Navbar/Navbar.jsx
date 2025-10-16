import React from 'react';
import { NavLink } from 'react-router';
import { useUser } from '../../../contexts/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../utilities/firebase_init';

const Navbar = () => {
    const { user, isLoggedIn, clearUser } = useUser();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                clearUser();
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {!isLoggedIn ? (
            <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </>
        ) : null}
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost border-none text-2xl">Firebase Authentication</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold gap-12">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img 
                                    src={user.photoURL} 
                                    alt={user.displayName}
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${user.email}&background=random&color=fff&size=32`;
                                    }}
                                />
                            </div>
                        </div>
                        <span className="text-sm font-medium hidden sm:inline">
                            {user.displayName}
                        </span>
                        <button onClick={handleLogout} className="btn btn-outline mr-5">
                            Logout
                        </button>
                    </div>
                ) : (
                    <NavLink to="/login" className="btn btn-outline">
                        Get Started
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;