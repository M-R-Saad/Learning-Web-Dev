import React from 'react';
import { TiHeartOutline } from "react-icons/ti";
import Favorite from '../Favorite/Favorite';

const Favorites = ({ bidItems, handleRemoveBidItem }) => {

    return (
        <div className='pt-[116px]'>
            <table className='bg-white w-full rounded-3xl'>
                <thead>
                    <tr className='text-xl'>
                        <th>
                            <div className='flex flex-1 justify-center items-center gap-4 m-8'>
                                <TiHeartOutline size={32} color='#0E2954' />
                                <h1 className='font-medium text-3xl text-[#0E2954]'>Favorite Items</h1>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bidItems.length > 0 ? (
                        bidItems.map(item => <Favorite 
                                                    key={item.id} 
                                                    item={item}
                                                    handleRemoveBidItem={handleRemoveBidItem}
                                                />
                                    )
                        ) : (
                            <tr className='border-t-2 border-[#DCE5F3] text-center'>
                                <td>
                                    <div className='p-8 flex flex-col justify-center items-center gap-4'>
                                        <h1 className='text-2xl font-medium'>
                                            No favorites yet
                                        </h1>
                                        <p className='text-lg w-[80%]'>
                                            Click the heart icon on any item to add it to your favorites.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                    )}

                </tbody>
                <tfoot>
                    <tr className='border-t-2 border-[#DCE5F3] text-center'>
                        <td className=' text-2xl p-8'>
                            <div className='flex justify-between items-center'>
                                <h1>
                                    Total bids Amount
                                </h1>
                                <p className='text-2xl font-medium'>
                                    ${bidItems.reduce((total, item) => total + item.currentBidPrice, 0)}
                                </p>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Favorites;