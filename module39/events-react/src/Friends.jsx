import { use } from "react";
import Friend from "./Friend";

function Friends ({ friends }) {

    const fetchedFriends = use(friends);
    console.log(fetchedFriends);

    return (
        <div className="card">
            <h2>Friends: {fetchedFriends.length}</h2>

            {
                fetchedFriends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
        </div>
    );
}

export default Friends;