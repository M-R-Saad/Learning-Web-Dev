import { use } from "react";


function Users({ users }) {
    const fetchedUsers = use(users);
    console.log(fetchedUsers);

    return (
        <div className="card">
            <h2>Users: {fetchedUsers.length}</h2>
        </div>
    );
}

export default Users;