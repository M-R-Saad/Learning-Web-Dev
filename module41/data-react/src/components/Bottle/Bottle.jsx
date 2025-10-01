import React from 'react';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, seller, price, stock, ratings, ratingsCount, img, shipping } = bottle;

    // Generate star rating display
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200'>
            <div className='relative h-64 bg-gray-50 overflow-hidden'>
                <img
                    src={img}
                    alt={name}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                />
                {stock < 5 && stock > 0 && (
                    <div className='absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                        Low Stock
                    </div>
                )}
                {stock === 0 && (
                    <div className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                        Out of Stock
                    </div>
                )}
            </div>

            <div className='p-4'>
                <div className='text-sm text-blue-600 font-medium mb-1'>{seller}</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>{name}</h3>

                <div className='flex items-center mb-3'>
                    <div className='flex items-center mr-2'>
                        {renderStars(ratings)}
                    </div>
                    <span className='text-sm text-gray-600'>({ratingsCount} reviews)</span>
                </div>

                <div className='flex items-center justify-between mb-3'>
                    <div className='text-2xl font-bold text-green-600'>${price}</div>
                    <div className='text-sm text-gray-500'>+ ${shipping} shipping</div>
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <span className='text-sm text-gray-600'>Stock: </span>
                    <span className={`text-sm font-medium ${stock > 10 ? 'text-green-600' : stock > 0 ? 'text-orange-600' : 'text-red-600'}`}>
                        {stock > 0 ? `${stock} available` : 'Out of stock'}
                    </span>
                </div>

                <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${stock > 0
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    disabled={stock === 0}
                    onClick={() => handleAddToCart(bottle)}
                >
                    {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default Bottle;