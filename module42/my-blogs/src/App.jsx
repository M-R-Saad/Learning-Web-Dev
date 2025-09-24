import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {

  const [bookMarked, setBookMarked] = useState([]);

  const handleBookmark = (blog) => {
    if (bookMarked.includes(blog)) {
      Swal.fire({
        title: "You have already bookmarked this blog!",
        icon: "warning",
        draggable: true
      });
      return;
    }
    setBookMarked([...bookMarked, blog]);
  }

  const [readingTime, setReadingTime] = useState([]);

  const handleMarkAsRead = (blog) => {
    if (readingTime.includes(blog)) {
      Swal.fire({
        title: "You have already marked this blog as read!",
        icon: "warning",
        draggable: true
      });
      return;
    }
    setReadingTime([...readingTime, blog]);

    setBookMarked(bookMarked.filter(b => b.id !== blog.id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar></Navbar>

      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='left-container flex-1 lg:w-[70%]'>
            <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          </div>

          <div className='right-container lg:w-[30%] space-y-6'>
            {/* Reading Time Card */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-slate-200'>
              <div className='flex items-center mb-4'>
                <div className='w-3 h-3 bg-blue-500 rounded-full mr-3'></div>
                <h2 className='text-xl font-bold text-slate-800'>Reading Statistics</h2>
              </div>
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4'>
                <p className='text-2xl font-bold text-blue-600'>{readingTime.reduce((a, b) => a + b.reading_time, 0)} min</p>
                <p className='text-sm text-slate-600'>Total Reading Time</p>
              </div>
            </div>

            {/* Bookmarked Blogs Card */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-slate-200'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-purple-500 rounded-full mr-3'></div>
                  <h2 className='text-xl font-bold text-slate-800'>Bookmarked</h2>
                </div>
                <span className='bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold'>
                  {bookMarked.length}
                </span>
              </div>

              <div className='space-y-3 max-h-96 overflow-y-auto'>
                {bookMarked.length === 0 ? (
                  <div className='text-center py-6'>
                    <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                      <svg className='w-8 h-8 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' />
                      </svg>
                    </div>
                    <p className='text-slate-500 text-sm'>No bookmarked blogs yet</p>
                  </div>
                ) : (
                  bookMarked.map((blog, index) => (
                    <div key={index} className='bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-3 border-l-4 border-purple-400'>
                      <p className='text-sm font-medium text-slate-700 line-clamp-2'>{blog.title}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
