import React from 'react';
import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";

const NewsCard = ({ news }) => {
    return (
        <div className='border border-base-300 rounded-md'>
            <div className='flex justify-between items-center px-5 py-4 bg-base-200'>
                <div className='flex gap-4'>
                    <img className='rounded-full w-12 h-12' src={news.author.img} alt="" />
                    <div>
                        <h3 className='text-lg font-semibold text-[#403F3F]'>
                            {news.author.name ? news.author.name : 'No Name Found'}
                        </h3>
                        <p className='text-accent'>
                            {news.author.published_date ? news.author.published_date.split('T')[0] : 'No Date Found'}
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 text-accent'>
                    <HiOutlineBookmark size={30} />
                    <HiOutlineShare size={30} />
                </div>
            </div>
            <div className='px-5 py-4 text-[#403F3F] flex flex-col gap-6'>
                <h2 className='text-2xl font-bold'>
                    {news.title}
                </h2>
                <img className='w-full h-auto object-cover rounded-md' src={news.image_url} alt="" />
                <p className='text-accent'>
                    {news.details}
                </p>
            </div>
            <div className='flex justify-between mx-5 py-4 border-t border-base-300'>
                <div className='flex items-center gap-2'>
                    <FaStar size={24} color={'#FF8C47'} />
                    <FaStar size={24} color={'#FF8C47'} />
                    <FaStar size={24} color={'#FF8C47'} />
                    <FaStar size={24} color={'#FF8C47'} />
                    <FaStar size={24} color={'#FF8C47'} />
                    <p className='text-accent text-lg'>
                        {news.rating.number}
                    </p>
                </div>
                <div className='flex items-center gap-2 text-accent'>
                    <MdRemoveRedEye size={28} />
                    <p className='text-lg'>
                        {news.total_view}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;