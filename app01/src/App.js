import './App.css';
import React from 'react';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavBar/NavigationBar';

function App() {

  return (
    <Router>
     <NavigationBar/>
      <div>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/SignIn' element={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
