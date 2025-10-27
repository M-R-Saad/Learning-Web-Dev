import React from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {

    const categories = React.use(categoryPromise);

    return (
        <div>
            <h3 className='text-xl font-semibold mb-5'>All Category ({categories.length})</h3>
            <div className='flex flex-col text-lg font-semibold text-accent-content'>
                {
                    categories.map(category => <NavLink key={category.id}
                                                    to={`/category/${category.id}`}
                                                    className={({ isActive }) => `pl-16 py-5 rounded-md ${isActive ? "bg-base-300 text-black" : ""}`}
                                                >
                                                    {category.name}
                                                </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;