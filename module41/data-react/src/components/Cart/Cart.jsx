import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h3>
            {cart.length === 0 ? (
                <div className="text-gray-500 text-center py-8">Your cart is empty.</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {cart.map(item => (
                        <div key={item.id} className="relative group rounded-lg overflow-hidden bg-gray-50 shadow hover:shadow-lg transition-shadow">
                            <button
                                className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 hover:bg-red-500 hover:text-white text-gray-500 rounded-full p-1 shadow transition-colors"
                                onClick={() => handleRemoveFromCart(item.id)}
                                aria-label="Remove from cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-32 object-contain p-2 transition-transform duration-200 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;