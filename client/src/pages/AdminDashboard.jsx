import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/users", { withCredentials: true })
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const handleUserClick = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/admin/user/${userId}/history`, {
        withCredentials: true,
      });
      setSelectedUser({ name: res.data.name, email: res.data.email });
      setUserHistory(res.data.images || []);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Left panel: list of users */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>All Users</h2>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: selectedUser?.email === user.email ? "#f0f0f0" : "#fff"
            }}
            onClick={() => handleUserClick(user._id)}
          >
            <strong>{user.name}</strong><br />
            {user.email}
          </div>
        ))}
      </div>

      {/* Right panel: selected user's history */}
      <div style={{ flex: 2 }}>
        {selectedUser && (
          <>
            <h2>{selectedUser.name}'s History</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            {userHistory.length === 0 ? (
              <p>No images found.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {userHistory.map((img, idx) => (
                  <div key={idx} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
                    <img
                      src={`http://localhost:8000${img.imageUrl}`}
                      alt={`Upload ${idx}`}
                      style={{ width: "100%", height: "auto", borderRadius: "6px" }}
                    />
                    <p><strong>Score:</strong> {img.anomalyScore}</p>
                    <p><strong>Anomalous:</strong> {img.isAnomalous ? "Yes" : "No"}</p>
                    <p><strong>Uploaded:</strong> {new Date(img.uploadedAt).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
