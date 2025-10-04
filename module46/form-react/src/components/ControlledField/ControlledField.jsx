import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log(name, email, password);
        // if(event.target.password.value.length < 6){
        //     setError('Password must be at least 6 characters long!');
        // }
        // else{
        //     setError('');
        // }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        
        if(event.target.value.length < 6){
            setError('Password must be at least 6 characters long!');
        }
        else{
            setError('');
        }
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-6 text-center'>Form Data Handling with <span className='text-blue-500'>Controlled Field</span></h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-2 p-5 w-1/2 mx-auto mt-5'>
                <input className='border p-2' type="text" name='name' placeholder='Name' defaultValue={name} onChange={handleNameChange} />
                <input className='border p-2' name="email" type="email" placeholder='Email' defaultValue={email} onChange={handleEmailChange} />
                <input className='border p-2' name="password" type="password" placeholder='Password' defaultValue={password} onChange={handlePasswordChange} />
                <button className='border p-2 bg-blue-500 text-white cursor-pointer' type="submit">
                    Submit
                </button>
            </form>
            <p className='text-red-500 font-semibold text-center mt-2'>
                {error}
            </p>
        </div>
    );
};

export default ControlledField;