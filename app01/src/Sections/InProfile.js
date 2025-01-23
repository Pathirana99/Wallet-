import React, { useState } from "react";
import "./inprofile.css";
import ChangePassword from "./ChangePassword";

export default function InProfile() {
const [showChangePassword, setShowChangePassword] = useState(false);


const toggleChangePassword = () => {
  setShowChangePassword(!showChangePassword);
  };



  return (
    <div className="page">
    <div className="inProfile">
      <div className="box" onClick={toggleChangePassword}>Change Password</div>
      <div className="box">Change Email</div>
      <div className="box">Change user name</div>
      <div className="box">Change profile image</div>
      <div className="box">Delete account</div>

      {showChangePassword && (
        <div className="ChangePasswordOverlay">
          <div className="ChangePasswordContent">
            <button
              className="buttonClose"
              onClick={toggleChangePassword}
            >Close</button>
            <ChangePassword />
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
