import './App.css';
import React from 'react';
import LoadingPage from './Pages/LoadingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoadingPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
