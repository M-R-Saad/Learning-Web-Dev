import { useState } from "react";


function Card() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
        document.getElementById("text").style.display = show ? "none" : "block";
    }

    return (
        <div className="counter">
            <h1 id="text">"Hello, React Learners!"</h1>
            <button onClick={handleClick}>{show ? "Hide" : "Show"} Text!</button>
        </div>
    );
}

export default Card