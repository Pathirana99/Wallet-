import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const userDetails = await axios.get("http://localhost:8080/admin/all");
      setUsers(userDetails.data);
    }
    fetchUsers();
  }, []);

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
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
