import React from 'react';
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { ToastContainer, Bounce } from 'react-toastify';

const Item = ({ item, handleBidNow, bidItems }) => {

    const isItemFavorite = bidItems.some(bidItem => bidItem.id === item.id);

    const handleClick = () => {
        if (!isItemFavorite) {
            handleBidNow(item);
        }
    };

    return (
        <tr className='border-t-2 border-[#DCE5F3] text-center'>
            <td className='flex items-center gap-4 py-4 px-8'>
                <img className='w-24 h-24 object-cover' src={item.image} alt="" />
                <p className='text-[#0E2954] text-lg text-start w-3/4'>
                    {item.title}
                </p>
            </td>
            <td className='text-[#0E2954] text-lg p-8'>
                ${item.currentBidPrice}
            </td>
            <td className='text-[#0E2954] text-lg p-8'>
                {item.timeLeft} days left
            </td>
            <td>
                <div className={`flex justify-center items-center 
                        ${isItemFavorite ? 'cursor-not-allowed opacity-70'
                            : 'cursor-pointer hover:scale-110 transition-transform duration-200'
                        }`
                    }
                >
                    {isItemFavorite ? (
                        <TiHeartFullOutline
                            size={32}
                            color='red'
                        />
                    ) : (
                        <TiHeartOutline
                            onClick={handleClick}
                            size={32}
                            color='red'
                        />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default Item;