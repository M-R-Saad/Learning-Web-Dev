import React from 'react';
import { Link } from 'react-router';
import { FaRegStar } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const ReadBook = ({ book }) => {
    return (
        <div
            className="border border-[#13131315] p-6 rounded-2xl grid grid-cols-[0.2fr_.8fr] gap-6 justify-between hover:shadow-lg hover:scale-[1.02] duration-300 mb-8">
            <div className='bg-[#F3F3F3] rounded-2xl flex justify-center items-center'>
                <img className='w-[115px] h-[175px]' src={book.image} alt={book.bookName} />
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h2 className='playfair-display font-bold text-[2rem] mb-4'>
                        {book.bookName} <span className='ml-2 text-[#59C6D2]'>({book.yearOfPublishing})</span>
                    </h2>
                    <p className='text-[#13131399] text-xl font-medium mb-4'>
                        By : {book.author}
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>Tag</p>
                        {
                            book.tags.map((tag, idx) => <div key={idx}
                                className='bg-[#23BE0A10] text-[#23BE0A] px-4 py-2 rounded-3xl font-medium text-lg'>
                                #{tag}
                            </div>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <LuMapPin size={20} color='#13131399' />
                        <p className='text-[#13131399] text-[18px]'>
                            Year of Publishing: {book.yearOfPublishing}
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 my-4'>
                    <div className='flex items-center gap-2'>
                        <GoPeople color='#13131399' size={20} />
                        <p className='text-[#13131399] text-[18px]'>
                            Publisher: {book.publisher}
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <HiOutlineDocumentChartBar color='#13131399' size={20} />
                        <p className='text-[#13131399] text-[18px]'>
                            Page {book.totalPages}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-t border-[#13131330] pt-4 mt-auto'>
                    <div className='bg-[#328EFF20] text-[#328EFF] px-4 py-2 rounded-3xl font-medium text-lg'>
                        Category: {book.category}
                    </div>

                    <div className='bg-[#FFAC3320] text-[#FFAC33] px-4 py-2 rounded-3xl font-medium text-lg'>
                        Rating: {book.rating}
                    </div>

                    <Link to={`/bookDetails/${book.bookId}`}>
                        <button className='bg-[#23BE0A] text-white border px-4 py-2 rounded-full font-medium text-lg border-none cursor-pointer'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;