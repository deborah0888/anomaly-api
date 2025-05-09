// export default function AdminDashboard() {
//     return (
//       <div>
//         <h2>Welcome to Admin Dashboard</h2>
//         {/* Add admin-specific content here */}
//       </div>
//     );
//   }
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
      setUserHistory(res.data.images);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>All Users</h2>
        {users.map((user) => (
          <div key={user._id} style={{ cursor: "pointer", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}
               onClick={() => handleUserClick(user._id)}>
            <strong>{user.name}</strong><br />
            {user.email}
          </div>
        ))}
      </div>

      <div style={{ flex: 2 }}>
        {selectedUser && (
          <>
            <h2>{selectedUser.name}'s History</h2>
            {userHistory.length === 0 ? (
              <p>No images found.</p>
            ) : (
              <div>
                {userHistory.map((img, idx) => (
                  <div key={idx} style={{ border: "1px solid #ddd", marginBottom: "10px", padding: "10px" }}>
                    <img src={`http://localhost:8000/uploads/${img.imageUrl}`} alt="user upload" style={{ maxWidth: "200px" }} />
                    <p><strong>Score:</strong> {img.anomalyScore}</p>
                    <p><strong>Anomalous:</strong> {img.isAnomalous ? "Yes" : "No"}</p>
                    <p><strong>Uploaded At:</strong> {new Date(img.uploadedAt).toLocaleString()}</p>
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
