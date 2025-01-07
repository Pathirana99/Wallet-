import React from "react";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <div className="admheader">
        <h1>Admin Panel</h1>
        <div className="adminDetails">
          <h2>Name</h2>
          <h2>Email</h2>
        </div>
      </div>
      <div className="userTable">
        <h2>User Details</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>name</td>
              <td>email</td>
              <td>password</td>
              <td>Balance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
