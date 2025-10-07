import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#13131310] rounded-3xl px-32 py-24 flex justify-center items-center'>
            <div>
                <h1 className='playfair-display text-[3.5rem] font-bold mb-12 w-[60%]'>
                    Books to freshen up your bookshelf
                </h1>
                <button className='btn bg-[#23BE0A] border-none rounded-xl text-xl text-white mt-6 p-7'>
                    View The List
                </button>
            </div>
            <img className='w-[457px] h-[566px]' src="/banner-book.png" alt="" />
        </div>
    );
};

export default Banner;