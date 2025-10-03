import React, { use } from 'react';
import User from '../User/User.jsx';

const Users2 = ({ usersPromise }) => {

    const users = use(usersPromise);

    console.log(users);

    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-4'>This is Users2!</h1>
            {
                users.map(user => <User 
                                    key={user.id} 
                                    user={user}>
                                </User>
                )
            }
        </div>
    );
};

export default Users2;