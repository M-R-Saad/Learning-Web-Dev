import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <div style={
                { 
                    display: 'flex', 
                    gap: '12px'
                }
            }>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={incrementCount}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;