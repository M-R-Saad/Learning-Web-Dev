import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const booksData = useLoaderData();
    const { id } = useParams();

    const book = booksData.find(book => book.bookId === parseInt(id));
    console.log(book);

    return (
        <div className='grid grid-cols-[.4fr_.6fr] gap-24 mt-6 mb-12'>
            <div className='bg-[#F3F3F3] p-16 rounded-3xl mb-6 flex justify-center'>
                <img className='w-[398px] h-[695px]' src={book.image} alt={book.bookName} />
            </div>
            <div className='flex flex-col mb-4'>
                <h2 className='playfair-display font-bold text-[3rem] mb-4'>
                    {book.bookName} <span className='ml-2 text-[#59C6D2]'>({book.yearOfPublishing})</span>
                </h2>
                <p className='text-[#13131380] text-xl font-medium mb-6'>
                    By : {book.author}
                </p>
                <div className='border-t-2 border-b-2 border-[#13131325] py-4 text-[#13131380] font-medium text-lg mb-6'>
                    {book.category}
                </div>
                <p className='text-[#131313B2] text-[18px] mb-6'>
                    <span className='text-black font-bold'>Review : </span> {book.review}
                </p>
                <div className='flex gap-4 items-center mb-6 border-b-2 border-[#13131325] pb-6'>
                    <p className='font-bold text-lg mr-4'>Tag </p>
                    {
                        book.tags.map((tag, idx) => <div key={idx}
                            className='bg-[#23BE0A10] text-[#23BE0A] px-6 py-3 rounded-3xl font-medium text-lg inline-block mr-2'>
                            {tag}
                        </div>
                        )
                    }
                </div>
                <div className='flex gap-16 items-center mb-8'>
                    <div>
                        <p className='text-[#131313B2] text-[18px] mb-2'>
                            Number of Pages: 
                        </p>
                        <p className='text-[#131313B2] text-[18px] mb-2'>
                            Publisher: 
                        </p>
                        <p className='text-[#131313B2] text-[18px] mb-2'>
                            Year of Publishing: 
                        </p>
                        <p className='text-[#131313B2] text-[18px] mb-2'>
                            Rating: 
                        </p>
                    </div>
                    <div>
                        <p className='text-black font-bold text-[18px] mb-2'>{book.totalPages}</p>
                        <p className='text-black font-bold text-[18px] mb-2'>{book.publisher}</p>
                        <p className='text-black font-bold text-[18px] mb-2'>{book.yearOfPublishing}</p>
                        <p className='text-black font-bold text-[18px] mb-2'>{book.rating}</p>
                    </div>

                </div>
                <div className='flex gap-4'>
                    <button className='bg-white text-black border px-8 py-4 rounded-lg font-medium text-lg mr-4'>
                        Mark As Read
                    </button>
                    <button className='bg-[#59C6D2] text-white border px-8 py-4 rounded-lg font-medium text-lg'>
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;