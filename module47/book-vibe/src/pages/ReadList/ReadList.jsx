import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import { getStoredBooks } from '../../utilities/addToDB';
import ReadBook from '../ReadBook/ReadBook';
import { RiArrowDropDownLine } from "react-icons/ri";


const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const handleSortChange = (type) => {
        setSort(type);
        let sortedList = [...readList];
        switch (type) {
            case 'title':
                sortedList.sort((a, b) => a.bookName.localeCompare(b.bookName));
                break;
            case 'year':
                sortedList.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                break;
            case 'pages':
                sortedList.sort((a, b) => a.totalPages - b.totalPages);
                break;
            case 'rating':
                sortedList.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        setReadList(sortedList);
    };

    const booksData = useLoaderData();

    useEffect(() => {
        const storedReadBooksID = getStoredBooks();
        console.log(storedReadBooksID);

        const readBooks = booksData.filter(book => storedReadBooksID.includes(book.bookId));
        setReadList(readBooks);
    }, [booksData]);

    return (
        <Tabs>
            <div className='flex justify-center items-center'>
                <div className="dropdown dropdown-center mb-12">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] rounded-lg border-none flex items-center justify-center p-6">
                        <p className='text-white text-lg font-medium'>
                            Sort By
                        </p>
                        {
                            sort ? <p className='text-white text-lg font-medium'>
                                    : {sort.charAt(0).toUpperCase() + sort.slice(1)}
                                </p>
                            : <RiArrowDropDownLine size={32} color='white' className='mt-1' />
                        }
                    </div>
                    <ul tabIndex={0} className="dropdown-content text-center bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSortChange('title')} className='rounded-md hover:bg-[#23BE0A] hover:text-white mb-1 cursor-pointer'><a>Title</a></li>
                        <li onClick={() => handleSortChange('year')} className='rounded-md hover:bg-[#23BE0A] hover:text-white mb-1 cursor-pointer'><a>Publish Year</a></li>
                        <li onClick={() => handleSortChange('pages')} className='rounded-md hover:bg-[#23BE0A] hover:text-white mb-1 cursor-pointer'><a>Number of Pages</a></li>
                        <li onClick={() => handleSortChange('rating')} className='rounded-md hover:bg-[#23BE0A] hover:text-white cursor-pointer'><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel className='mt-8'>
                {
                    readList.map(book => <ReadBook key={book.bookId} book={book} />)
                }
            </TabPanel>
            <TabPanel>
                <h2>Wishlist books</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ReadList;