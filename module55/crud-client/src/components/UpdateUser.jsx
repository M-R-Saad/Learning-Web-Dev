import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {

    const user = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const updatedUser = { name, email };
        console.log(updatedUser);

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(response => response.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('User updated successfully!');
                console.log('User updated:', data);
                // form.reset();
            }
        })
        .catch(error => {
            console.error('Error updating user:', error);
        });
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold mb-6 text-center'>Update User</h2>
            <div className='w-1/2 mx-auto border p-10 rounded-lg shadow-lg'>
                <form onSubmit={handleUpdate} className='flex flex-col'>
                    <div className='mb-4'>
                        <label className='block font-bold mb-2' htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            defaultValue={user.name}
                            className='w-full px-3 py-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block font-bold mb-2' htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            defaultValue={user.email}
                            className='w-full px-3 py-2 border rounded'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary text-white font-extrabold'>Update User</button>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateUser;