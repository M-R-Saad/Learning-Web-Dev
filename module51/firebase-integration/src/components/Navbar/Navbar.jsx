import React from 'react';
import { NavLink, Link } from 'react-router';
import AuthContext from '../../contexts/AuthContext';


const Navbar = () => {

    const { user, signOutUser } = React.useContext(AuthContext);

    console.log('Navbar user:', user);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully.');
            })
            .catch(error => {
                console.error('Error signing out:', error);
            });
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>Home</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => (isActive ? "underline" : "")}>Login</NavLink></li>
        <li><NavLink to="/signup" className={({ isActive }) => (isActive ? "underline" : "")}>SignUp</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? "underline" : "")}>Dashboard</NavLink></li>
        {
            user &&
                <>
                    <li><NavLink to="/profile" className={({ isActive }) => (isActive ? "underline" : "")}>Profile</NavLink></li>
                    <li><NavLink to="/orders" className={({ isActive }) => (isActive ? "underline" : "")}>Orders</NavLink></li>
                </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg py-4 sticky top-0 z-10">
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
                <a className="btn btn-ghost text-2xl">Firebase Integration</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold gap-12">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end mr-6">
                {
                    user ?
                        <div className="flex items-center gap-8">
                            <div className='flex items-center gap-4 border border-dashed border-green-400 p-2 rounded'>
                                <img className='w-8 rounded-full' src={user.photoURL} alt="" />
                                <span className="font-bold text-green-400">{user.displayName}</span>
                            </div>
                            <button onClick={handleSignOut} className="btn btn-lg btn-outline btn-error">Logout</button>
                        </div>
                        :
                        <Link to='/login' className="btn btn-lg btn-outline btn-info">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;