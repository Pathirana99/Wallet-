import React, { useState } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);

const increment = ()=>{
  setCount(count + 1);
  console.log(count);
};

const decrement = ()=>{
  setCount(count - 1);
};

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
