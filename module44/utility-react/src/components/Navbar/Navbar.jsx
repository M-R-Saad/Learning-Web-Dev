import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navLinks.map(route => <Link 
                                            key={route.id} 
                                            route={route}
                                        />
                );

    return (
        <nav className='flex justify-between items-center p-6 border-b border-gray-300'>
            <div className='flex gap-8' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden cursor-pointer'></X> : <Menu className='md:hidden cursor-pointer'></Menu>
                }
                <ul className={`flex flex-col gap-2 border border-gray-300 md:hidden absolute ${open ? 'top-16' : '-top-48'} bg-white px-6 py-4 rounded-lg transition-all duration-500 ease-in`}>
                    {
                        links
                    }
                </ul>
                <h3>
                    My Navbar
                </h3>
            </div>
            <ul className='hidden md:flex justify-center gap-12'>
                {
                    links
                }
            </ul>
            <button className='btn btn-primary'>
                Sign In
            </button>
        </nav>
    );
};

export default Navbar;