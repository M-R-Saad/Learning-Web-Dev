import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${post.id}`);
    }

    return (
        <div className='border-2 border-gray-400 m-4 p-4 text-center rounded-lg w-[400px] items-end'>
            <h2 className='text-xl font-bold mb-4'>{post.title}</h2>
            <Link to={`/posts/${post.id}`} className='text-blue-500 font-semibold hover:underline'>View Details</Link>
            <button className='ml-4 px-3 py-2 text-blue-500 hover:underline font-semibold border-2 border-blue-500 rounded-lg cursor-pointer' onClick={handleNavigate}>
                Details of Post: {post.id}
            </button>
        </div>
    );
};

export default Post;