import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-6 text-center'>Form Data Handling with <span className='text-blue-500'>Event</span></h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-2 p-5 w-1/2 mx-auto mt-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name:</label>
                    <input className='border p-2' type="text" name="name" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email:</label>
                    <input className='border p-2' type="email" name="email" />
                </div>
                <input className='border p-2 bg-blue-500 text-white cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;