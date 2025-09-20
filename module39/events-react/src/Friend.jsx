

function Friend( { friend } ) {

    const { name, email, phone } = friend;

    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default Friend;