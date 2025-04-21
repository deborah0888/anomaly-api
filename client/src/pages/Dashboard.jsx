// import { useContext, useState } from "react";
// import { UserContext } from "../../context/userContext";
// import axios from "axios";

// const Dashboard = () => {
//   const { user, setUser } = useContext(UserContext);
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleUpload = async () => {
//     if (!file || !user?.id) return alert("Please select a file and login first!");

//     setUploading(true);
//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("userId", user.id);

//     try {
//       const { data } = await axios.post("http://localhost:8000/api/auth/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
      
//       setUser({ ...user, imageUrl: data.imageUrl });
//       console.log("Anomaly Score:", data.anomalyScore);
//       alert("Upload successful!");
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Upload failed!");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">
//         <h2 className="text-2xl font-semibold mb-4">Upload Your Image</h2>
  
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="mb-4 w-full px-3 py-2 border rounded-lg text-sm"
//         />
  
//         <button
//           onClick={handleUpload}
//           disabled={uploading}
//           className={`w-full py-2 rounded-lg text-white ${
//             uploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {uploading ? "Uploading..." : "Upload"}
//         </button>
  
//       </div>
//     </div>
//   );
  
// };

// export default Dashboard;
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [anomalyResult, setAnomalyResult] = useState(null);  // State to store anomaly detection result

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file || !user?.id) return alert("Please select a file and login first!");

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user.id);

    try {
      // Send the image to Flask API for anomaly detection
      const { data } = await axios.post("http://localhost:5001/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      // Log anomaly score and update user image URL if needed
      console.log("Anomaly Score:", data.error);
      
      // Set the result of anomaly detection
      setAnomalyResult({
        isAnomalous: data.is_anomalous,
        error: data.error,
      });

      // If you need to update the user image URL, you can do that here as well
      // setUser({ ...user, imageUrl: data.imageUrl });

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

        {/* Display the anomaly detection result */}
        {anomalyResult !== null && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              {anomalyResult.isAnomalous ? "Anomaly Detected!" : "Normal Image"}
            </h3>
            <p className="text-sm text-gray-500">
              Error: {anomalyResult.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
