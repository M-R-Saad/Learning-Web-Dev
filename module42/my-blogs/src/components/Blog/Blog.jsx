import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    src={blog.cover}
                    alt="Blog Cover"
                />
                <div className="absolute top-4 right-4">
                    <button
                        onClick={() => handleBookmark(blog)}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
                    >
                        <FaBookmark
                            size={18}
                            className="text-slate-400 group-hover:text-blue-500 transition-colors duration-200"
                        />
                    </button>
                </div>
            </div>
            
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-200 object-cover"
                        src={blog.author_img}
                        alt={blog.author}
                    />
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-800">{blog.author}</h3>
                        <p className="text-sm text-slate-500">{blog.posted_date}</p>
                    </div>
                    <div className="flex items-center bg-slate-50 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4 text-slate-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-slate-600 font-medium">{blog.reading_time} min read</span>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-slate-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer line-clamp-2">
                    {blog.title}
                </h2>
                
                <div className="mb-6 flex flex-wrap gap-2">
                    {blog.hashtags.map((hashtag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200 cursor-pointer"
                        >
                            #{hashtag}
                        </span>
                    ))}
                </div>
                
                <button onClick={() => handleMarkAsRead(blog)} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Mark as Read
                </button>
            </div>
        </div>
    );
};

export default Blog;