import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/users", { withCredentials: true })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/admin/user/${userId}/history`);
  };

  return (
    <div className="admin-dashboard">
      <h1>All Users</h1>
      <div className="user-card-container">
        {users.map((user) => (
          <div
            className="user-card"
            key={user._id}
            onClick={() => handleUserClick(user._id)}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
