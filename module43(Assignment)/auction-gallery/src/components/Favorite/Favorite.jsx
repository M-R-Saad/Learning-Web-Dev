import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Favorite = ({ item, handleRemoveBidItem }) => {
    return (
        <tr className='border-t-2 border-[#DCE5F3] text-center'>
            <td className='flex items-center gap-4 py-4 px-8'>
                <img className='w-24 h-24 object-cover' src={item.image} alt="" />
                <div className='flex flex-col flex-1 justify-between'>
                    <p className='text-[#0E2954] text-lg text-start'>
                        {item.title}
                    </p>
                    <div className='flex gap-8 mt-2 text-[#0E2954]'>
                        <p>
                            ${item.currentBidPrice}
                        </p>
                        <p>
                            Bids: {item.bidsCount}
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer transition-transform duration-300 hover:scale-110 '>
                    <IoIosCloseCircleOutline 
                        onClick={() => handleRemoveBidItem(item.id)} 
                        color='#0E2954' 
                        size={32}
                    />
                </div>
            </td>
        </tr>
    );
};

export default Favorite;