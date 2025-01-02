import React from 'react'
import './signIn.css'

export default function SignIn() {
    return (
        <div className="login">
          <div className="loginContent">
            <div className="loginHeader">
              <h2>SignUp</h2>
            </div>
            <div className="loginForm">
            <div className="formSection">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="formSection">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="formSection">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button className="loginButton">SignUp</button>
            </div>
          </div>
        </div>
      );
}
