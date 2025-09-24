import { useState } from 'react';
import LandingPage from "./LandingPage.jsx"

function App() {
  let [num, setNum] = useState(0);
  return (
    <div className='App'>
      <button onClick={() => { setNum(++num) }}><h1>Increment +</h1></button>
      <button onClick={() => { setNum(--num) }}><h1>Decrement -</h1></button>
      <h1>The Value of Number in App : {num}</h1>
      <LandingPage data={num}/>
    </div>
  )
}

export default App
