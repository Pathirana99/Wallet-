import React, { useState } from 'react'
import './signIn.css'
import axios from "axios"

export default function SignIn() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/user/save",{
        username:username,
        email:email,
        password:password,
      });
      alert("Registration Successfully");
    }catch(err){
      alert(err);
    }
  }

    return (
        <div className="login">
          <div className="loginContent">
            <div className="loginHeader">
              <h2>SignUp</h2>
            </div>
            <div className="loginForm">
              <div className="formSection">
                <label>Name</label>
                <input type="text" placeholder="Enter your name"
                  value={username}
                  onChange={(Event) => {
                    setUsername(Event.target.value);
                  }}
                />
              </div>
              <div className="formSection">
                <label>Email</label>
                <input type="text" placeholder="Enter your email"
                  value={email}
                  onChange={(Event) => {
                    setEmail(Event.target.value);
                  }}
                />
              </div>
              <div className="formSection">
                <label>Password</label>
                <input type="password" placeholder="Enter your password"
                  value={password}
                  onChange={(Event) => {
                    setPassword(Event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="loginButton" onClick={save}>SignUp</button>
            </div>
          </div>
        </div>
      );
}
