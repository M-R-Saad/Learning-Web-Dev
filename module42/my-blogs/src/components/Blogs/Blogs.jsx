import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // console.log(blogs);

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                        <h1 className='text-3xl font-bold text-slate-800'>Latest Blogs</h1>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full">
                        <span className='text-blue-600 font-semibold'>{blogs.length} Articles</span>
                    </div>
                </div>
                <p className="text-slate-600 mt-2">Discover amazing content from our community of writers</p>
            </div>

            {/* Blogs Grid */}
            <div className="grid gap-8">
                {blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-lg border border-slate-200">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-slate-700 mb-2">No blogs available</h3>
                        <p className="text-slate-500">Check back later for new content!</p>
                    </div>
                ) : (
                    blogs.map((blog, index) => (
                        <Blog
                            key={index}
                            blog={blog}
                            handleBookmark={handleBookmark}
                            handleMarkAsRead={handleMarkAsRead}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Blogs;