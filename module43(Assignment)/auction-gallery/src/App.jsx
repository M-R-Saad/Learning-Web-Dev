import './App.css'
import Swal from 'sweetalert2'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import Favorites from './components/Favorites/Favorites';
import { useState } from 'react';

function App() {

  const addNotification = () => toast.success('Item has been added to your favorites.', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const errorNotification = () => toast.warn('You have already added this item to your favorites!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const [bidItems, setBidItems] = useState([]);

  const handleBidNow = (item) => {
    if (bidItems.includes(item)) {
      errorNotification();
      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Already Added!',
      //   text: 'You have already added this item to your favorites!',
      // })
    }
    else {
      setBidItems([...bidItems, item]);
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Added!',
      //   text: 'Item has been added to your favorites.',
      // })
      addNotification();
    }
  }

  const handleRemoveBidItem = (id) => {
    setBidItems(bidItems.filter(item => item.id !== id));
    Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'Item has been removed from your favorites.',
    })
  }

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='bg-[#EBF0F5] p-32'>
        <div className='container mx-auto grid grid-cols-[2fr_1fr] gap-6'>
          <div>
            <Items handleBidNow={handleBidNow} bidItems={bidItems}></Items>
          </div>
          <div>
            <Favorites bidItems={bidItems} handleRemoveBidItem={handleRemoveBidItem}></Favorites>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
