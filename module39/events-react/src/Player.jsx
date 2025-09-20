import { useState } from 'react';

function Player() {

    const [score, setScore] = useState(0);

    const handle3K = () => {
        setScore(score + 3);
    }

    const handle4K = () => {
        setScore(score + 4);
    }

    const handleACE = () => {
        setScore(score + 5);
    }

    const style = {
        border: '2px solid white',
        marginTop: '20px',
        borderRadius: '10px',
        padding: '20px',
    }

    return (
        <div style={style}>
            <h3>Player: TenZ</h3>
            <h1>Kills: {score}k</h1>

            {
                score >= 30 ? <p>Congratulations! You've reached 30 kills!</p> : null
            }

            <button onClick={handle3K}>3K</button>
            <button onClick={handle4K}>4K</button>
            <button onClick={handleACE}>ACE!</button>
        </div>
    );
}

export default Player;