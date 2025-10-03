import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-4'>This is Posts! Total Posts: {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;