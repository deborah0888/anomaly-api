import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file || !user?.id) return alert("Please select a file and login first!");

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user.id);

    try {
      const { data } = await axios.post("http://localhost:8000/api/auth/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser({ ...user, imageUrl: data.imageUrl });
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Image</h2>
  
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 w-full px-3 py-2 border rounded-lg text-sm"
        />
  
        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`w-full py-2 rounded-lg text-white ${
            uploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
  
      </div>
    </div>
  );
  
};

export default Dashboard;
