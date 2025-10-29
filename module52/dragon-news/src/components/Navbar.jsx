import React from 'react';
import { NavLink, Link } from 'react-router';
import userImg from '../assets/user.png'
import logo from '../assets/logo.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logout } = React.useContext(AuthContext);
    // console.log(user);

    const handleLogout = () => {
        logout()
        .then(() => {
            console.log('User logged out successfully');
        })
        .catch((error) => {
            console.error(error);
        });    
    }

    return (
        <div className='bg-white flex justify-between items-center p-4 mb-6 border border-secondary'>
            <div className=''>
                <img className='h-6' src={logo} alt="" />
            </div>
            <div className='flex gap-8 text-accent text-lg'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>Home</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>About</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>Career</NavLink>
            </div>
            <div className='flex gap-6 items-center'>
                {
                    user ?
                        <div className='flex gap-2 items-center justify-center'>
                            <img className='h-12 w-12 rounded-full object-cover border border-secondary' src={user.photoURL} alt={user.displayName} title={user.displayName} />
                            {/* <p className='text-sm text-center font-medium'>{user.displayName}</p> */}
                        </div>
                        :
                        <img className='h-12 w-12 rounded-full border border-secondary' src={userImg} alt="User" />
                }
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-secondary btn-lg rounded-none px-12'>
                            Logout
                        </button>
                        :
                        <Link to="/auth/login" className='btn btn-primary btn-lg rounded-none px-12'>
                            Login
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;