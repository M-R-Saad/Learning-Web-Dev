import React from 'react';

const Users = ({ userPromise }) => {

    const initialUsers = React.use(userPromise);
    const [users, setUsers] = React.useState(initialUsers);

    const handleAddUser = event => {
        event.preventDefault();
       
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        
        const user = { name, email };
        console.log(user);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if(data.insertedId){
                alert('User added successfully!');
                console.log('User added:', data);
                user._id = data.insertedId;
                setUsers([...users, user]);
                form.reset();
            }
        })
        .catch(error => {
            console.error('Error adding user:', error);
        });
    }

    const handleUserDelete = (userId) => {
        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('User deleted successfully!');
                setUsers(users.filter(user => user._id !== userId));
            }
        })
        .catch(error => {
            console.error('Error deleting user:', error);
        });
    }

    return (
        <div>
            <form onSubmit={handleAddUser} className='w-1/2 mx-auto border p-10 rounded-lg shadow-lg'>
                <h2 className='text-3xl font-semibold mb-6 text-center'>Add New User</h2>
                <div className='mb-4'>
                    <label className='block text-lg font-medium mb-2' htmlFor="name">Name</label>
                    <input className='w-full px-3 py-2 border rounded' type="text" id='name' name='name' placeholder='Enter your name' required />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium mb-2' htmlFor="email">Email</label>
                    <input className='w-full px-3 py-2 border rounded' type="email" id='email' name='email' placeholder='Enter your email' required />
                </div>
                <button className='w-full btn btn-info text-white' type='submit'>Add User</button>
            </form>
            <div className='w-1/2 mx-auto mt-10'>
                <h2 className='text-3xl font-semibold mb-6 text-center'>User List</h2>
                <div className='border rounded p-4'>
                    {
                        users.map(user => 
                            <p key={user._id} className='text-center py-2 font-semibold'>
                                {user.name} - {user.email}
                                <button onClick={() => handleUserDelete(user._id)} className='btn btn-error btn-xs text-white ml-4'>X</button>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;