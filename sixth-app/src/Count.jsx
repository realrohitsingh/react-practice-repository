import { useState } from "react";
function Counter() {
    // let [Dynamic_state,setState] = useState(Initial Value);

    let [count, setCount] = useState(0);
    function incr_emp() {
        setCount(++count);
        console.log(count);
    }
    function dect_emp() {
        setCount(--count);
        console.log(count);
    }
    return (
        <>
            <h1>Counter</h1>
            <h1>The number of employees is : {count}</h1>
            <button onClick={incr_emp}>Add Employee</button>
            <button onClick={dect_emp}>Remove Employee</button>
        </>
    )
}

export default Counter