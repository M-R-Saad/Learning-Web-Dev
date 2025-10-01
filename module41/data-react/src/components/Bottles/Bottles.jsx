import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addItemLS, getCartLS, removeItemLS } from '../../utilities/localeStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlePromise }) => {

    const [cart, setCart] = useState([]);

    const bottles = use(bottlePromise);
    // console.log(bottles);

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        // console.log(bottle);
        addItemLS(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        const newCart = cart.filter(bottle => bottle.id !== id);
        setCart(newCart);

        removeItemLS(id);
    }

    useEffect(() => {
        const savedCart = getCartLS();

        const storedCart = [];

        if(savedCart.length) {
            for(const id of savedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    storedCart.push(bottle);
                }
            }
        }

        setCart(storedCart);

    }, [bottles]);

    return (
        <div className='container mx-auto px-4 py-8'>
            <div>
                <h3 className='text-xl text-center font-semibold text-gray-700 mb-8'>Shopping Cart ({cart.length} items)</h3>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>

            <div className='text-center mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Our Collection</h2>
                <p className='text-lg text-gray-600'>Discover {bottles.length} premium bottles</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    bottles.map(bottle => <Bottle
                                            key={bottle.id}
                                            bottle={bottle}
                                            handleAddToCart={handleAddToCart}
                                        />
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;