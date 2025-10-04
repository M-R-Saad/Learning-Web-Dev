import React from 'react';
import { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-6 text-center'>Form Data Handling with <span className='text-blue-500'>Uncontrolled Field</span></h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-2 p-5 w-1/2 mx-auto mt-5'>
                <input ref={emailRef} className='border p-2' name="email" type="email" placeholder='Email' />
                <input ref={passwordRef} className='border p-2' name="password" type="password" placeholder='Password' />
                <button className='border p-2 bg-blue-500 text-white cursor-pointer' type="submit">
                    Submit
                </button>
            </form>
            <p className='text-red-500 font-semibold text-center mt-2'>
                
            </p>
        </div>
    );
};

export default UncontrolledField;