import React from 'react'

export default function ChangePassword() {
  return (
    <div>
      <div className="loginForm">
          <div className="formSection">
            {/* {error && <p className="errorMessage">{error}</p>} */}
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="formSection">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
             />
          </div>
          <div className="formSection">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              />
          </div>
          <button type="submit" className="loginButton">
            Save
          </button>
        </div>
    </div>
  )
}
