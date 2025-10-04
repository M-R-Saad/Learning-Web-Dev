import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-6 text-center'>Form Data Handling with <span className='text-blue-500'>Form Action</span></h2>
            <form action={handleFormAction} className='flex flex-col gap-3 border-2 p-5 w-1/2 mx-auto mt-5'>
                <input className='border p-2' name="name" type="text" placeholder='Name' />
                <input className='border p-2' name="email" type="email" placeholder='Email' />
                <button className='border p-2 bg-blue-500 text-white cursor-pointer' type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormAction;