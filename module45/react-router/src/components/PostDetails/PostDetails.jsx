import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    
    const navigate = useNavigate();

    return (
        <div className='m-4 p-4 border-2 border-gray-400 rounded-lg w-1/4'>
            <h1 className='text-xl font-bold'>{post.title}</h1>
            <p className='mt-4'>{post.body}</p>
            <button className='mt-4 px-3 py-2 text-blue-500 hover:underline font-semibold border-2 border-blue-500 rounded-lg cursor-pointer' onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default PostDetails;