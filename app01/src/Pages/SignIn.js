import React, { useState } from 'react'
import './signIn.css'
import axios from "axios"
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try{
      const response =  await axios.post("http://localhost:8080/user/save",{
        username:username,
        email:email,
        password:password,
        role:"USER",
      });
      const { jwt, role } = response.data;
      
            localStorage.setItem("jwt", jwt);
            localStorage.setItem("role", role);
      
            const decodedJwt = jwtDecode(jwt);
            const { username: decodedUsername, email: userEmail } = decodedJwt;
      
            localStorage.setItem("username", decodedUsername);
            localStorage.setItem("userEmail", userEmail);
      
            if(role === "USER"){
              navigate("/Home");
            }else if(role === "ADMIN"){
              navigate("/Admin");
            }else{
              console.log("error")
            }
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
