import './App.css';
import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavBar/NavigationBar';

function App() {

  return (
    <Router>
     <NavigationBar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
