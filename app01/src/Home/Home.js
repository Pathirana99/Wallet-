import React, { useEffect, useState } from 'react';
import './home.css';
import { jwtDecode } from 'jwt-decode';

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const decodedJwt = jwtDecode(jwt);
      setUsername(decodedJwt.username);
      setEmail(decodedJwt.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");

    window.location.href = "/Login";
  };

  return (
    <div className="home">
      <div className="sidebar">
        <div className="profilePic">
          <div className="profileLetter">S</div>
        </div>
        <div className="userName">{email}</div>
        <button className="logOut" onClick={handleLogout}>Log Out</button>
      </div>
      <div className="mainContent">
        <div className="header">
        <div>{username}</div>
          
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
