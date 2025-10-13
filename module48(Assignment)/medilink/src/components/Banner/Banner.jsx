import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center px-40 py-16 mx-24 my-16 border-3 border-white rounded-3xl bg-gradient-to-t from-white to-[#FFFFFF00] shadow-lg'>
            <h2 className="text-5xl font-extrabold text-center mb-8 w-3/4">
                Dependable Care, Backed by Trusted Professionals.
            </h2>
            <p className='text-center font-medium w-3/4'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='flex justify-center gap-4 my-8'>
                <input type="text" className='bg-white border border-gray-300 rounded-full px-5 py-2 text-sm w-128' placeholder='Search by doctor...'/>
                <button className='btn btn-info text-white rounded-full border-none text-base'>Search Now</button>
            </div>
            <div className='flex justify-center gap-6'>
                <img className='w-[660px] h-[400px]' src="https://i.postimg.cc/FsNPR3bp/banner-img-1.png" alt="Banner Image 1" />
                <img className='w-[660px] h-[400px] rounded-2xl object-cover' src="https://i.postimg.cc/fy4r5P9k/banner-image-2.jpg" alt="Banner Image 2" />
            </div>
        </div>
    );
};

export default Banner;