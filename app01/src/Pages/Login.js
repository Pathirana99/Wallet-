import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    
    event.preventDefault();
    setError(""); 

    try {
      const response = await axios.post(
        "http://localhost:8080/loginUser/login",
        {
          email: email,
          password: password,
        }
      );

      const { jwt, role } = response.data;

      localStorage.setItem("jwt", jwt);
      localStorage.setItem("role", role);

      const decodedJwt = jwtDecode(jwt);
      const { username, email: userEmail } = decodedJwt;

      localStorage.setItem("username", username);
      localStorage.setItem("userEmail", userEmail);

      navigate("/Home");
    } catch (error) {
      setError("invalid password or email");
    }
  };

  return (
    <div className="login">
      <div className="loginContent">
        <div className="loginHeader">
          <h2>Login</h2>
        </div>
        <div className="loginForm">
          <div className="formSection">
          {error && <p className="errorMessage">{error}</p>}
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formSection">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
