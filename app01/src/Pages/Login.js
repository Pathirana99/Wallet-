import React from 'react'
import './login.css';

export default function Login() {
    return (
        <div className="login">
          <div className="loginContent">
            <div className="loginHeader">
              <h2>Login</h2>
            </div>
            <div className="loginForm">
              <div className="formSection">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="formSection">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button className="loginButton">Login</button>
            </div>
          </div>
        </div>
      );
}
