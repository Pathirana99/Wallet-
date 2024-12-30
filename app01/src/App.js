import React from 'react';
import './App.css';

function buttonClick(){
  console.log("Button is clicked.")
  alert("Button is Clicked")
}
function App() {
  return (
    <div>
      <h1>React event handling...</h1>
      <br></br><hr></hr>
      <button onClick={buttonClick}>Click Here</button>
    </div>
  );
}

export default App;
