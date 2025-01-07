import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <div className="profilePic">
          <div className="profileLetter">S</div>
        </div>
        <div className="userName">Sunith P Pathirana</div>
        <button className="logOut">Log Out</button>
      </div>
      <div className="mainContent">
        <div className="header">
          <h2>Sunith P Pathirana</h2>
        </div>
        <div className="form">
          <div className="section">
            <label>INCOME</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div className="section">
            <label>OUTCOME</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div className="balance">
            <div className="balanceValue">Balance</div>
          </div>
          <button className="addButton">ADD</button>
        </div>
      </div>
    </div>
  );
}
