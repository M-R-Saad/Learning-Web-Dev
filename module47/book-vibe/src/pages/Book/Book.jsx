import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {

    return (
        <Link to={`/bookDetails/${book.bookId}`} 
        className="border border-[#13131315] p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] duration-300">
            <div>
                <div className='bg-[#F3F3F3] p-8 rounded-2xl mb-6 flex justify-center'>
                    <img className='w-[175px] h-[270px]' src={book.image} alt={book.bookName} />
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-4 mb-4'>
                        {
                            book.tags.map((tag, idx) => <div key={idx} 
                                                        className='bg-[#23BE0A10] text-[#23BE0A] px-6 py-3 rounded-3xl font-medium text-lg'>
                                                            {tag}
                                                        </div>
                            )
                        }
                    </div>
                    <h2 className='playfair-display font-bold text-[2rem] mb-4'>
                        {book.bookName} <span className='ml-2 text-[#59C6D2]'>({book.yearOfPublishing})</span>
                    </h2>
                    <p className='text-[#13131380] text-xl font-medium mb-5'>
                        By : {book.author}
                    </p>
                </div>
            </div>


            <div className='flex justify-between items-center border-t border-dashed border-[#13131350] pt-5'>
                <p className='text-[#13131380] font-medium text-lg'>
                    {book.category}:
                </p>
                <div className='flex items-center gap-2'>
                    <p className='text-[#13131380] font-medium text-lg'>{book.rating}</p>
                    <FaRegStar color='gold' size={20} />
                </div>
            </div>
        </Link>
    );
};

export default Book;