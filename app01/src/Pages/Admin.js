import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [countU, setCount] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const decodedJwt = jwtDecode(jwt);
      setUsername(decodedJwt.username);
      setEmail(decodedJwt.email);
    }
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const email = localStorage.getItem("userEmail");
      const password = localStorage.getItem("password");

      // Encode email and password for Basic Auth
      const basicAuth = `Basic ${btoa(`${email}:${password}`)}`;

      try {
        const userDetails = await axios.get("http://localhost:8080/admin/all", {
          headers: {
            Authorization: basicAuth,
          },
        });
        setUsers(userDetails.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    async function countUsers() {
      const email = localStorage.getItem("userEmail");
      const password = localStorage.getItem("password");

      // (Encode email,password for Basic Auth)
      const basicAuth = `Basic ${btoa(`${email}:${password}`)}`;

      try {
        const count = await axios.get("http://localhost:8080/admin/count", {
          headers: {
            Authorization: basicAuth,
          },
        });
        setCount(count.data);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    }

    fetchUsers();
    countUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("password");

    window.location.href = "/";
  };

  return (
    <div className="admin">
      <div className="admheader">
        <h1>Admin Panel</h1>
        <div className="adminDetails">
          <h2>{username}</h2>
          <h2>{email}</h2>

          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="userTable">
        <div className="userDetailsSection">
          <h2 className="userDetails">User Details</h2>
          <h2 className="countUers">{countU} Users</h2>
        </div>
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
