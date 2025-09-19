import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <button onClick={decrement} className="btn">-</button>
            <span className="number">{count}</span>
            <button onClick={increment} className="btn">+</button>
        </div>
    );
}

export default Counter;
