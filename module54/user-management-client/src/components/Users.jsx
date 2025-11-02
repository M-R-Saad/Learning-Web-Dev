import React from 'react';
import { use } from 'react';

const Users = ({ userPromise }) => {

    const initialUsers = use(userPromise);
    const [users, setUsers] = React.useState(initialUsers);

    const handleAddUser = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log('Adding user:', { name, email });
        
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log('User added:', data);
            setUsers([...users, data]);
        })
        .catch(error => {
            console.error('Error adding user:', error);
        });
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input name="name" type="text" placeholder='Enter users name' />
                <br />
                <input name="email" type="email" placeholder='Enter email address'/>
                <br />
                <input type="submit" value="Add User" />
            </form>
            {
                users.map(user => <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;