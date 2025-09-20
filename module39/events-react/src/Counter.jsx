import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const style = {
        border: '2px solid white',
        marginTop: '20px',
        borderRadius: '10px',
        padding: '20px',
    }

    return (
        <div style={style}>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Counter;