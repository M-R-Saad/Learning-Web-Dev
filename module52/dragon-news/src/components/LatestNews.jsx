import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='bg-base-200 p-4 flex gap-5 mb-8'>
            <p className='btn btn-secondary rounded-none btn-lg'>
                Latest
            </p>
            <Marquee className='flex gap-4' pauseOnHover={true} speed={100}>
                <p className='font-semibold'>
                    I can be a React component, multiple React components, or just some text.
                </p>
                <p className='font-semibold'>
                    I can be a React component, multiple React components, or just some text.
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;