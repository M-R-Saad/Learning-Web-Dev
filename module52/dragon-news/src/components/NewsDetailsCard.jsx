import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetailsCard = ({ news }) => {

    return (
        <div className='border border-base-300 rounded-sm p-8 flex flex-col gap-8 items-start'>
            <img className='rounded-sm object-cover w-full h-auto' src={news.image_url} alt="" />
            <h2 className='text-3xl font-bold text-[#403F3F]'>
                {news.title}
            </h2>
            <p className='text-lg text-accent'>
                {news.details}
            </p>

            <div className='flex justify-between w-full items-center'>
                <Link to={`/category/${news.category_id}`}>
                    <button className='btn btn-secondary rounded-none btn-lg'>
                        <FaArrowLeft size={20} />
                        All news in this category
                    </button>
                </Link>

                <div className='flex gap-4 items-center border border-secondary px-4'>
                    <img className='rounded-full w-10 h-10' src={news.author?.img} alt="" />
                    <div>
                        <h3 className='text-lg font-semibold text-[#403F3F]'>
                            {news.author?.name ? news.author.name : 'No Name Found'}
                        </h3>
                        <p className='text-accent'>
                            {news.author?.published_date ? news.author.published_date.split('T')[0] : 'No Date Found'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;