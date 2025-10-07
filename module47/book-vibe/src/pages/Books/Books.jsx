import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {

    // console.log(...booksData);

    return (
        <div className='my-24'>
            <h1 className='playfair-display text-[2.5rem] font-bold text-center mb-8'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Suspense fallback={<span className="loading loading-xl loading-spinner text-success"></span>}>
                    {
                        booksData.map(book => <Book
                                                key={book.bookId}
                                                book={book}
                                            ></Book>
                        )
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default Books;