// // // // import { useContext } from 'react';
// // // // import { UserContext } from '../context/userContext';

// // // // export default function UserHistory() {
// // // //   const { user } = useContext(UserContext);

// // // //   if (!user) return <div>Loading...</div>;
// // // //   if (!user.images || user.images.length === 0) return <div>No search history available.</div>;

// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto">
// // // //       <h1 className="text-2xl font-bold mb-4">Your Search History</h1>
// // // //       <div className="space-y-4">
// // // //         {[...user.images]
// // // //           .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
// // // //           .map((img, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="border rounded-lg p-4 shadow-md flex gap-4 items-center bg-white"
// // // //             >
// // // //               <img
// // // //                 src={`http://localhost:8000${img.imageUrl}`}
// // // //                 alt={`Image ${index}`}
// // // //                 className="w-32 h-32 object-cover rounded"
// // // //               />
// // // //               <div>
// // // //                 <p><strong>Anomaly Score:</strong> {img.anomalyScore.toFixed(2)}</p>
// // // //                 <p><strong>Status:</strong> {img.isAnomalous ? 'Anomalous' : 'Normal'}</p>
// // // //                 <p><strong>Uploaded:</strong> {new Date(img.uploadedAt).toLocaleString()}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useContext } from 'react';
// // // import { UserContext } from '../context/userContext';

// // // export default function UserHistory() {
// // //   const context = useContext(UserContext);

// // //   // Prevent crash if context is undefined
// // //   if (!context) return <div>Error: UserContext not available.</div>;

// // //   const { user } = context;

// // //   if (!user) return <div>Loading...</div>;
// // //   if (!user.images || user.images.length === 0) return <div>No search history available.</div>;

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <h1 className="text-2xl font-bold mb-4">Your Search History</h1>
// // //       <div className="space-y-4">
// // //         {user.images.map((img, index) => (
// // //           <div
// // //             key={index}
// // //             className="border rounded-lg p-4 shadow-md flex gap-4 items-center bg-white"
// // //           >
// // //             <img
// // //               src={`http://localhost:8000${img.imageUrl}`}
// // //               alt={`Image ${index}`}
// // //               className="w-32 h-32 object-cover rounded"
// // //             />
// // //             <div>
// // //               <p><strong>Anomaly Score:</strong> {img.anomalyScore.toFixed(2)}</p>
// // //               <p><strong>Status:</strong> {img.isAnomalous ? 'Anomalous' : 'Normal'}</p>
// // //               <p><strong>Uploaded:</strong> {new Date(img.uploadedAt).toLocaleString()}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useContext } from 'react';
// // import { UserContext } from '../../context/userContext';

// // const UserHistory = () => {
// //   const context = useContext(UserContext);

// //   if (!context) {
// //     return <div>Error: UserContext is not available (check import and provider).</div>;
// //   }

// //   const { user } = context;

// //   if (!user) return <div>Loading...</div>;

// //   // Defensive check to ensure images array exists and is valid
// //   if (!user.images || !Array.isArray(user.images) || user.images.length === 0) {
// //     return <div>No history available.</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Your History</h1>
// //       {user.images.map((img, index) => (
// //         <div key={index}>
// //           <img src={`http://localhost:8000${img.imageUrl}`} alt="" />
// //           <p>Anomaly Score: {img.anomalyScore}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// // export default UserHistory;

// // components/User/UserHistory.jsx
// import React, { useContext } from 'react';
// import { UserContext } from '../../context/userContext';

// const UserHistory = () => {
//   const { user, loading } = useContext(UserContext);

//   // While loading the user profile
//   if (loading) {
//     return <div>Loading your history...</div>;
//   }

//   // If user is null after loading (e.g., not logged in or error)
//   if (!user) {
//     return <div>Error: User not found. Please log in again.</div>;
//   }

//   // No images available
//   if (!user.images || !Array.isArray(user.images) || user.images.length === 0) {
//     return <div>No history available.</div>;
//   }

//   return (
//     <div>
//       <h1>Your History</h1>
//       {user.images.map((img, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <img
//             src={`http://localhost:8000${img.imageUrl}`}
//             alt={`Uploaded ${index}`}
//             style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
//           />
//           <p>Anomaly Score: {img.anomalyScore}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserHistory;

// components/User/UserHistory.jsx
import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const UserHistory = () => {
  const { user, loading } = useContext(UserContext);

  // While loading the user profile
  if (loading) {
    return <div>Loading your history...</div>;
  }

  // If user is null after loading (e.g., not logged in or error)
  if (!user) {
    return <div>Error: User not found. Please log in again.</div>;
  }

  // No images available
  if (!user.images || !Array.isArray(user.images) || user.images.length === 0) {
    return <div>No history available.</div>;
  }

  return (
    <div>
      <h1>Your History</h1>
      {user.images.map((img, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <img
            src={`http://localhost:8000${img.imageUrl}`}
            alt={`Uploaded ${index}`}
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
          <p>Anomaly Score: {img.anomalyScore}</p>
        </div>
      ))}
    </div>
  );
};

export default UserHistory;
