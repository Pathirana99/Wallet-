import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import InProfile from "../Sections/InProfile";
import SettingsIcon from "@mui/icons-material/Settings";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [userId, setUserId] = useState("");
  const [balance, setBalance] = useState("click add button");
  const [showInProfile, setShowInProfile] = useState(false);
  const inProfileRef = useRef(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const decodedJwt = jwtDecode(jwt);
      setUsername(decodedJwt.username);
      setEmail(decodedJwt.email);
      setUserId(decodedJwt.userId);
    }
  }, []);

  const add = async () => {
    try {
      const incomeValue = parseFloat(income) || 0;
      const outcomeValue = parseFloat(outcome) || 0;
      const calBal = incomeValue - outcomeValue;

      const response = await axios.put(`http://localhost:8080/user/${userId}`, {
        balance: calBal,
      });

      setBalance(response.data.balance);

      setIncome("");
      setOutcome("");
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");

    window.location.href = "/";
  };

  const toggleInProfile = () => {
    setShowInProfile(!showInProfile);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inProfileRef.current &&
        !inProfileRef.current.contains(event.target)
      ) {
        setShowInProfile(false);
      }
    };

    if (showInProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInProfile]);

  return (
    <div className="home">
      <div className="sidebar">
        <SettingsIcon
          className="iconInProfile"
          sx={{ fontSize: 60 }}
          onClick={toggleInProfile}
        />
        <div className="profilePic">
          <div className="profileLetter">{username.charAt(0)}</div>
        </div>
        <div className="userName">{email}</div>
        <button className="logOut" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div className="mainContent">
        <div className="header">
          <div>{username}</div>
        </div>
        <div className="form">
          <div className="section">
            <label>INCOME</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="section">
            <label>OUTCOME</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
            />
          </div>
          <div className="balance">
            <div className="balanceValue">{balance}</div>
          </div>
          <button className="addButton" onClick={add}>
            ADD
          </button>
        </div>
      </div>

      {showInProfile && (
        <div className="Overlay">
          <div className="inProfileContent" ref={inProfileRef}>
            <HighlightOffIcon
              className="closeButton"
              sx={{ fontSize: 30 }}
              onClick={toggleInProfile}
            />
            <InProfile />
          </div>
        </div>
      )}
    </div>
  );
}
