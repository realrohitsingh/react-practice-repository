import Count from './Count.jsx';
import Counter from './Counter.jsx';
function Events() {
    function print() {
        console.log("Hello Events");
    }
    function add(a, b) {
        console.log(`this is parameter function and addition of a,b is ${a + b}`);
    }
    return (
        <>
            <h1>Events</h1>
            <button onClick={print}>Print</button>
            <button onClick={() => { add(10, 20) }}>Add A and B</button>
            <hr />
            <Count />
            <hr />
            <h1>Shopping Cart : </h1>
            <Counter />
        </>
    )
}

export default Events