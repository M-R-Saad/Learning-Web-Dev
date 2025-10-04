import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        if(!name){
            setError('Name is required!');
            return;
        }
        else if(!price){
            setError('Price is required!');
            return;
        }
        else if(!quantity){
            setError('Quantity is required!');
            return;
        }
        else{
            setError('');
        }

        const newProduct = {
            name,
            price,
            quantity
        };

        addProduct(newProduct);
        event.target.reset();
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-6 text-center'>Form Submit and <span className='text-blue-500'>Pass Data to another Component</span></h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-2 p-5 w-1/2 mx-auto mt-5'>
                <input className='border p-2' name='name' type="text" placeholder='Product Name' />
                <input className='border p-2' name="price" type="text" placeholder='Product Price' />
                <input className='border p-2' name="quantity" type="text" placeholder='Product Quantity' />
                <button className='border p-2 bg-blue-500 text-white cursor-pointer' type="submit">
                    Submit
                </button>
            </form>
            {error && <p className='text-red-500 text-center font-semibold mt-2'>{error}</p>}
        </div>
    );
};

export default ProductForm;