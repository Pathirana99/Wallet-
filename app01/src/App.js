import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);

const increment = ()=>{
  setCount(count + 1);
};

const decrement = ()=>{
  setCount(count - 1);
};

useEffect(()=>{
  console.log(`New count is: ${count}`); // Correct
},[]
);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
