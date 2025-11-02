import React from 'react';
import { use } from 'react';

const Users = ({ userPromise }) => {

    const users = use(userPromise);

    return (
        <div>
            {
                <ul>
                    {users.map(user => <li style={{ listStyle: "none"}}>{user.name}</li>)}
                </ul>

            }
        </div>
    );
};

export default Users;